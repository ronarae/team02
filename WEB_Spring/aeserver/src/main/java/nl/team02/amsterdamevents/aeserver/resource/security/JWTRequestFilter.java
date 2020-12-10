package nl.team02.amsterdamevents.aeserver.resource.security;

import nl.team02.amsterdamevents.aeserver.resource.exception.AuthenticationException;
import org.apache.catalina.filters.ExpiresFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;

/**
 * A filter used to check if a secured request has a valid token
 */
@Component
public class JWTRequestFilter extends OncePerRequestFilter {
    //path prefixes that will be protected by the authentication
    private static final Set<String> SECURED_PATHS =
            Set.of("/aevents", "registrations", "/users");

    @Value("${jwt.pass-phrase: This is very secret information for my private company @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@}")
    private String passPhrase;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String servletPath = request.getServletPath();

            if (HttpMethod.OPTIONS.matches(request.getMethod()) ||
                    SECURED_PATHS.stream().noneMatch(servletPath::startsWith)) {
                filterChain.doFilter(request, response);
                return;
            }

            JWToken jwToken = null;
            String encryptedToken = null;

            //get encripted token string from authorization request header
            encryptedToken = request.getHeader(HttpHeaders.AUTHORIZATION);

            if (encryptedToken != null) {
                // remove bearer token prefix if used
                encryptedToken = encryptedToken.replace("Bearer ", "");

                //decode token
                jwToken = JWToken.decode(encryptedToken, this.passPhrase);
            }

            //validate the token
            if (jwToken == null) {
                throw new AuthenticationException("You need to login first");
            }

            // pass-on the token info as an attribute for the request
            request.setAttribute(JWToken.JWT_ATTRIBUTE_NAME, jwToken);
            filterChain.doFilter(request, response);

        } catch (AuthenticationException exception) {
            response.sendError(response.SC_UNAUTHORIZED, "Authentication error");
        }
    }


}

