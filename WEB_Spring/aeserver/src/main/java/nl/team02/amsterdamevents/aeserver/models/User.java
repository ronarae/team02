package nl.team02.amsterdamevents.aeserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity (name = "User")
public class User {

    @Id
    @SequenceGenerator(name = "id_gen", sequenceName = "id_seq", initialValue = 10000)
    @GeneratedValue(generator = "id_gen")
    public long id;
    private String name;
    private String eMail;
    private String hashedPassword;
    private boolean isAdmin;

    public  User(){}

    public User(long id, String name, String eMail, String hashedPassword, boolean isAdmin) {
        this.id = id;
        this.name = name;
        this.eMail = eMail;
        this.hashedPassword = hashedPassword;
        this.isAdmin = isAdmin;
    }

    public User(long id, String name, String eMail, boolean isAdmin) {
        this.id = id;
        this.name = name;
        this.eMail = eMail;
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
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
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
