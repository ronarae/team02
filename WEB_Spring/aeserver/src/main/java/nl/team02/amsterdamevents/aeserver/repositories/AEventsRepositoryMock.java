package nl.team02.amsterdamevents.aeserver.repositories;

import nl.team02.amsterdamevents.aeserver.models.AEvent;
import org.springframework.stereotype.Component;


import java.util.ArrayList;
import java.util.List;

@Component
public class AEventsRepositoryMock implements AEventsRepository {
    private final List<AEvent> aevents;

    public static int aEventId = 10000;

    public AEventsRepositoryMock() {
        this.aevents = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            this.aevents.add(AEvent.createRandomAEvent());
        }
    }

    @Override
    public List<AEvent> findAll() {
        return aevents;
    }

    @Override
    public AEvent findById(long id) {
        for (AEvent aevent : this.aevents) {
            if (aevent.getId() == id) {
                return aevent;
            }
        }
        return null;
    }

    @Override
    public AEvent save(AEvent aEvent) {
        if (aEvent.getId() == 0L) {
            aEvent.setId(AEventsRepositoryMock.aEventId++);
            aevents.add(aEvent);
            return aEvent;
        }

        int index = aevents.indexOf(findById(aEvent.getId()));
        aevents.set(index, aEvent);

        return findById(aEvent.getId());
    }

    @Override
    public boolean deleteById(long id) {
        AEvent aEvent = findById(id);
        if (aEvent != null) {
            this.aevents.remove(aEvent);
            return true;
        }
        return false;
    }

}
