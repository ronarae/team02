package nl.team02.amsterdamevents.aeserver.repositories;
import nl.team02.amsterdamevents.aeserver.models.AEvent;


import java.util.List;

public interface AEventsRepository {
    List<AEvent> findAll();
    AEvent findById(long id);
    AEvent save(AEvent aevent);
    boolean deleteById (long id);
}
