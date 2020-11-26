package nl.team02.amsterdamevents.aeserver.repositories;

import nl.team02.amsterdamevents.aeserver.models.AEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;


import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
@Primary
public class AEventsRepositoryJpa implements AEventsRepository {

    @Autowired
    private EntityManager entityManager;

    @Override
    public AEvent save(AEvent aevent) {
        if (aevent.getId() == 0) {
            entityManager.persist(aevent);
        } else {
            entityManager.merge(aevent);
        }
        return aevent;
    }

    @Override
    public List<AEvent> findAll() {
        TypedQuery<AEvent> query = this.entityManager.createQuery(
                "select e from AEvent e", AEvent.class);
        return query.getResultList();
    }

    @Override
    public AEvent findById(long id) {
        return entityManager.find(AEvent.class, id);
    }

    @Override
    public boolean deleteById(long id) {
        if (findById(id) != null) {
            entityManager.remove(findById(id));
            return true;
        }
        return false;
    }
}
