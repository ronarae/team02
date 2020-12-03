package nl.team02.amsterdamevents.aeserver.repositories;

import nl.team02.amsterdamevents.aeserver.models.User;
import java.util.List;

public interface UserRepository {

    User save(User user);

    void delete(User user);

    List<User> findAll();

    User findByEmail(String email);
}
