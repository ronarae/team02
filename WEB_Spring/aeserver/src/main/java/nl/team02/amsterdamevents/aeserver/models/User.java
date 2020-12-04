package nl.team02.amsterdamevents.aeserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class User {

    @Id
    @SequenceGenerator(name = "id_gen", sequenceName = "id_seq", initialValue = 10000)
    @GeneratedValue(generator = "id_gen")
    public long id;
    private String name;
    private String email;
    private String hashedPassword;
    private boolean isAdmin;

    public User(){}

    public User(long id, String name, String email, String hashedPassword, boolean isAdmin) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.hashedPassword = hashedPassword;
        this.isAdmin = isAdmin;
    }

    public User(long id, String name, String email, boolean isAdmin) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String geteMail() {
        return email;
    }

    public void seteMail(String email) {
        this.email = email;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public boolean validateEncodedPassword(String given) {
        return hashedPassword.equals(given);
    }

}
