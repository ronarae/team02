package nl.team02.amsterdamevents.aeserver.rest;

import nl.team02.amsterdamevents.aeserver.models.AEvent;
import nl.team02.amsterdamevents.aeserver.repositories.AEventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

    
}
