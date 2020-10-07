package nl.team02.amsterdamevents.aeserver.repositories;
import nl.team02.amsterdamevents.aeserver.models.AEvent;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;

@Component
public class AEventsRepositoryMock implements AEventsRepository{
    List<AEvent> aeventsList = new ArrayList<>();

    public AEventsRepositoryMock(){
        for (int i = 0; i < 7 ; i++) {
            AEvent aEvent = AEvent.createRandomAEvent();
            System.out.println(aEvent.toString());
            this.aeventsList.add(aEvent);
        }
    }

    public List<AEvent> findAll(){
        return this.aeventsList;
    }

}
