package nl.team02.amsterdamevents.aeserver.rest;

import com.fasterxml.jackson.annotation.JsonView;
import nl.team02.amsterdamevents.aeserver.models.AEvent;
import nl.team02.amsterdamevents.aeserver.repositories.AEventsRepository;
import nl.team02.amsterdamevents.aeserver.views.ViewAEvent;
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

    private URI getLocationURI(long id) {
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().
                path("/{id}").buildAndExpand(id).toUri();
        return location;
    }

    @GetMapping("/aevents")
    public List<AEvent> getAllAEvents() {
        return aEventsRepository.findAll();
    }

    @JsonView(ViewAEvent.Public.class)
    @GetMapping("/aevents/summary")
    public List<AEvent> getAEventsSummary() {
        if (aEventsRepository.findAll().size() != 0) {
            return aEventsRepository.findAll();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "There are no AEvents found");
    }

    @GetMapping("/aevents/{id}")
    public AEvent getAEventById(@PathVariable long id) throws ResponseStatusException {
        if (aEventsRepository.findById(id) != null) {
            return aEventsRepository.findById(id);
        }
        throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED, "Cannot find AEvents ID: " + id);
    }

    @PostMapping("/aevents")
    public ResponseEntity<AEvent> createAEvent(@RequestBody AEvent aEvent) {
        aEvent.setId(0);
        AEvent createdAEvent = aEventsRepository.save(aEvent);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdAEvent.getId()).toUri();
        return ResponseEntity.created(location).body(createdAEvent);
    }

    @PostMapping("/aevents/{id}")
    public ResponseEntity<AEvent> saveAEvent(@PathVariable long id, @RequestBody AEvent aEvent)
            throws ResponseStatusException {
        if (id == aEvent.getId()) {
            AEvent savedAEvent = aEventsRepository.save(aEvent);
            URI location = getLocationURI(savedAEvent.getId());
            return ResponseEntity.created(location).body(savedAEvent);
        }
        throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED, "The requested ID does not meet the ID provided in the body");
    }

    @DeleteMapping("/aevents/{id}")
    public ResponseEntity<Boolean> deleteById(@PathVariable long id) throws ResponseStatusException {
        if (aEventsRepository.deleteById(id)) {
            return ResponseEntity.ok(true);
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cannot delete the AEvent because the provided ID: " + id + " does not exist");
    }


}
