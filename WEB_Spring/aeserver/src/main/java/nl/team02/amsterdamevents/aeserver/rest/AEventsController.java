package nl.team02.amsterdamevents.aeserver.rest;

import nl.team02.amsterdamevents.aeserver.models.AEvent;
import nl.team02.amsterdamevents.aeserver.repositories.AEventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AEventsController {

    @Autowired
    private AEventsRepository aEventsRepository;

    @GetMapping("/events")
    public List<AEvent> getAllAEvents() {
        return aEventsRepository.findAll();

    }

}
