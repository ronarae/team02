package nl.team02.amsterdamevents.aeserver.rest;

import nl.team02.amsterdamevents.aeserver.models.AEvent;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AEventsController {
    @GetMapping("/events")
    public List<AEvent> getAllAEvents() {
        return List.of(
                new AEvent("Test-event-A"),
                new AEvent("Test-event-B"));

    }

}
