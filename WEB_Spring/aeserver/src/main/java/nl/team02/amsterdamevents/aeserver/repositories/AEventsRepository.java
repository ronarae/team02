package nl.team02.amsterdamevents.aeserver.repositories;

import nl.team02.amsterdamevents.aeserver.models.AEvent;

import java.util.List;

public interface AEventsRepository {
    void addAEvent(AEvent AEventmodel);
    List<AEvent> getAllAEvents();
    AEvent getAEventById(String id);
    AEvent save(AEvent aevent);
    boolean deleteById (String id);
}
