package nl.team02.amsterdamevents.aeserver.rest;

import com.fasterxml.jackson.annotation.JsonView;
import nl.team02.amsterdamevents.aeserver.models.AEvent;
import nl.team02.amsterdamevents.aeserver.repositories.AEventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
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

    @GetMapping("/aevents/{id}")
    public ResponseEntity<AEvent> getAEventById(@PathVariable String id) {
        AEvent aEvent = aEventsRepository.getAEventById(id);

        String intToStringId = Integer.toString(aEvent.getId());

        URI location = getLocationURI(intToStringId);
        return ResponseEntity.created(location).body(aEvent);
    }

    @PutMapping("/aevents/{id}")
    public ResponseEntity<AEvent> saveAEvent(@PathVariable String id, @ModelAttribute AEvent aEvent)
            throws ResponseStatusException {
        if (id.equals(aEvent.getId())) {
            AEvent savedAEvent = aEventsRepository.save(aEvent);
            return ResponseEntity.accepted().body(savedAEvent);
        }
        throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED, "The requested ID does not meet the ID provided in the body");
    }

    @PostMapping("/aevents")
    public ResponseEntity<AEvent> createAEvent(@ModelAttribute AEvent aEvent) {
        AEvent savedAEvent = aEventsRepository.save(aEvent);
        String savedIntToStringId = Integer.toString(savedAEvent.getId());
        URI location = getLocationURI(savedIntToStringId);
        return ResponseEntity.created(location).body(savedAEvent);
    }
}
