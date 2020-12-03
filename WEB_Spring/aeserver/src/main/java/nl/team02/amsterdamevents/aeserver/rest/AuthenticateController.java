package nl.team02.amsterdamevents.aeserver.rest;

import com.fasterxml.jackson.databind.node.ObjectNode;
import nl.team02.amsterdamevents.aeserver.models.User;
import nl.team02.amsterdamevents.aeserver.repositories.UserRepository;
import nl.team02.amsterdamevents.aeserver.repositories.UserRepositoryJpa;
import nl.team02.amsterdamevents.aeserver.resource.exception.AuthorizationException;
import nl.team02.amsterdamevents.aeserver.resource.security.JWToken;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private UserRepositoryJpa userRepo;

//    @Autowired
//    private JWToken jwToken;

    @PostMapping("/login")
    public ResponseEntity<User> authenticateUser(@RequestBody ObjectNode user,
                                                 HttpServletRequest request,
                                                 HttpServletResponse response) throws AuthenticationException {

        String email = user.get("email").asText();
        String password = user.get("password").asText();

        //User user = userRepo.findByEmail(userEmail);
        String nameInMail = email.substring(0, email.lastIndexOf("@"));
        //password incorrect
        if (!password.equals(nameInMail)) {
            throw new AuthorizationException("Cannot authenticate user by email= " + email
                    + "and password=" + password);
        }
//        if(user == null) {
//            throw new AuthenticationException("No user found!");
//        }
//
//        if(user.getHashedPassword() != password) {
//            throw new AuthenticationException("Invalid password!");
//        }
//
//        throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED, "Error");

       // String tokenString = jwToken.encode(userEmail,false);

        return ResponseEntity.accepted()
//                .header(HttpHeaders.AUTHORIZATION, "Bearer " + tokenString)
                //.header(HttpHeaders.AUTHORIZATION, "Bearer ")
                .body(new User(1, nameInMail, email, false));
    }
}
