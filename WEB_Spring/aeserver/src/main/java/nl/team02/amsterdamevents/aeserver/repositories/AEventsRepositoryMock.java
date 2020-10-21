package nl.team02.amsterdamevents.aeserver.repositories;

import nl.team02.amsterdamevents.aeserver.models.AEvent;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

@Component
public class AEventsRepositoryMock implements AEventsRepository {
    private final List<AEvent> aevents;
    private int idIncrement = 1;

    public AEventsRepositoryMock() {
        this.aevents = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            this.aevents.add(AEvent.createRandomAEvent(getNextUniqueId()));
        }
    }

    private String getNextUniqueId() {
        return String.format("2020-%d", idIncrement++);
    }

    public List<AEvent> findAll() {
        return this.aevents;
    }

    @Override
    public void addAEvent(AEvent AEventmodel) {
        aevents.add(AEventmodel);
    }

    @Override
    public List<AEvent> getAllAEvents() {
        return null;
    }

    @Override
    public AEvent getAEventById(String id) {
        return aevents.get(getAEventIndexById(id));
    }


    @Override
    public AEvent save(AEvent aevent) {
        if (aevent.getId().equals("0")) {
            aevent.setId(getNextUniqueId());
            aevents.add(aevent);
        } else {

        }
        return null;
    }

    @Override
    public boolean deleteById(String id) {
        return false;
    }


    private int getAEventIndexById(String id) {
        try {
            int max = (int) aevents.stream().count();
            int index = IntStream.range(0, max).filter(idx ->
            {
                return aevents.get(idx).equals((id));
            }).findFirst().getAsInt();
            return index;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "There is no event with the given ID. Are you sure this is correct?");
        }

    }

}
