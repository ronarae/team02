package nl.team02.amsterdamevents.aeserver.rest;

import com.fasterxml.jackson.databind.node.ObjectNode;
import nl.team02.amsterdamevents.aeserver.models.User;
import nl.team02.amsterdamevents.aeserver.repositories.UserRepository;
import nl.team02.amsterdamevents.aeserver.repositories.UserRepositoryJpa;
import nl.team02.amsterdamevents.aeserver.resource.exception.AuthorizationException;
import nl.team02.amsterdamevents.aeserver.resource.security.JWToken;
import nl.team02.amsterdamevents.aeserver.resource.security.JWToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/authenticate")
public class AuthenticateController {

    // JWT configuration that can be adjusted from application.properties
    @Value("${jwt.issuer:private company}")
    private String issuer;

    @Value("${jwt.pass-phrase: This is very secret information for my private company @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@}")
    private String passPhrase;

    @Value("${jwt.duration-of-:1200}") //default 20 minutes
    private int tokenDurationOfValidity;


    @Autowired
    private UserRepositoryJpa userRepositoryJpa;

    @Autowired
    private JWToken jwToken;

    @PostMapping("/login")
    public ResponseEntity<User> authenticateUser(@RequestBody ObjectNode signOnInfo,
                                                 HttpServletRequest request,
                                                 HttpServletResponse response) throws AuthenticationException {

        String email = signOnInfo.get("email").asText();
        String password = signOnInfo.get("password").asText();

        String nameInMail = email.substring(0, email.lastIndexOf("@"));

        //password incorrect
        if (!password.equals(nameInMail)) {
            throw new AuthorizationException("Cannot authenticate user by email= " + email
                    + "and password=" + password);
        }

//        if(user == null) {
//            throw new AuthenticationException("No user found!");
//        }

        String tokenString = jwToken.encode(issuer,passPhrase,tokenDurationOfValidity);

        return ResponseEntity.accepted()
                    .header(HttpHeaders.AUTHORIZATION, "Bearer " + tokenString)
                    .body(new User(1, nameInMail, email, false));
    }
}
