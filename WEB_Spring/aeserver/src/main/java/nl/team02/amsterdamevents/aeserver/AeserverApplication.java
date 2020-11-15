package nl.team02.amsterdamevents.aeserver;

import nl.team02.amsterdamevents.aeserver.models.AEvent;
import nl.team02.amsterdamevents.aeserver.repositories.AEventsRepository;
import nl.team02.amsterdamevents.aeserver.repositories.AEventsRepositoryJpa;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.transaction.Transactional;
import java.util.List;

@SpringBootApplication
public class AeserverApplication implements CommandLineRunner {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    AEventsRepositoryJpa aEventsRepositoryJpa;

    public static void main(String[] args) {
        SpringApplication.run(AeserverApplication.class, args);
    }

    private void createInitialAEvents(){
        List<AEvent> aEvents = this.aEventsRepositoryJpa.findAll();
        if (aEvents.size() > 0) return;
        System.out.println("Configuring some initial aEvent data");

        for (int i = 0; i < 9; i++) {
            AEvent aEvent = AEvent.createRandomAEvent();
            aEvent = this.aEventsRepositoryJpa.save(aEvent);
        }
    }

    @Transactional
    @Override
    public void run(String... args) {
        System.out.println("Running CommandLine Startup");
        this.createInitialAEvents();
    }
}
