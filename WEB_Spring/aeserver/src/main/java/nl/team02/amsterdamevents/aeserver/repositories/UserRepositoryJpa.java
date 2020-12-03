package nl.team02.amsterdamevents.aeserver.repositories;

import nl.team02.amsterdamevents.aeserver.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class UserRepositoryJpa implements UserRepository {

    @Autowired
    private EntityManager em;


    @Override
    public User save(User user) {
        return em.merge(user);
    }

    @Override
    public void delete(User user) {
        User toRemove = em.merge(user);
        em.remove(toRemove);
    }

    @Override
    public List<User> findAll() {
        TypedQuery<User> query = em.createQuery("SELECT u FROM User u",User.class);

        return query.getResultList();
    }

    @Override
    public User findByEmail(String email) {
        return em.find(User.class,email);
    }
}
