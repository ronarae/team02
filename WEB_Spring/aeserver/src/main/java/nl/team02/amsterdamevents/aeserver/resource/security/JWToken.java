package nl.team02.amsterdamevents.aeserver.resource.security;

import io.jsonwebtoken.Jwts;

import java.security.Key;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JWToken {
    private static final String JWT_USERNAME_CLAIM = "sub";
    private static final String JWT_USERID_CLAIM = "id";
    private static final String JWT_ADMIN_CLAIM = "admin";

    private String userName = null;
    private Long userId = null;
    private boolean admin = false;

    public String encode(String issuer, String passPhrase, int expiration) {
        Key key = getKey(passPhrase);

        String token = Jwts.builder()
                .claim(JWT_USERNAME_CLAIM, this.userName)
                .claim(JWT_USERID_CLAIM, this.userId)
                .claim(JWT_ADMIN_CLAIM, this.admin)
                .setIssuer(issuer)
                .setIssuedAt(new Date())
                .setExpiration(new java.sql.Date((System.currentTimeMillis() + expiration * 1000)))
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();

                return token;
    }

    /**
     * Get the secret key
     * @param passPhrase
     * @return secret key
     */
    private Key getKey(String passPhrase) {
        byte hmacKey[] = passPhrase.getBytes(StandardCharsets.UTF_8);
        Key key = new SecretKeySpec(hmacKey, SignatureAlgorithm.HS512.getJcaName());
        return key;
    }
}
