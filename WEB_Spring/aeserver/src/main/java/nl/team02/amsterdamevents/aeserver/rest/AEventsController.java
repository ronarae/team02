package nl.team02.amsterdamevents.aeserver.rest;

import com.fasterxml.jackson.annotation.JsonView;
import nl.team02.amsterdamevents.aeserver.models.AEvent;
import nl.team02.amsterdamevents.aeserver.repositories.AEventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class AEventsController {

    @Autowired
    private AEventsRepository aEventsRepository;

    private URI getLocationURI(String id) {
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().
                path("/{id}").buildAndExpand(id).toUri();
        return location;
    }

    @GetMapping("/aevents")
    public List<AEvent> getAllAEvents() {
        return aEventsRepository.getAllAEvents();
    }
//    voor E
//    @GetMapping(path = "/aevents-summary")
//    @JsonView(value = AEventView.SummaryView.class)
//    public List<AEvent> getAllEventSummary(){
//        return aEventsRepository.getAllAEvents();
//    }

    @PutMapping("/aevents/{id}")
    public ResponseEntity<AEvent> getAEventById(@PathVariable String id) {
        AEvent aEvent = aEventsRepository.getAEventById(id);

        String intToStringId = Integer.toString(aEvent.getId());

        URI location = getLocationURI(intToStringId);
        return ResponseEntity.created(location).body(aEvent);
    }
}
