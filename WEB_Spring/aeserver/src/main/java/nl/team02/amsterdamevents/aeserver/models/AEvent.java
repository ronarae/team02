package nl.team02.amsterdamevents.aeserver.models;

import com.fasterxml.jackson.annotation.JsonView;
import nl.team02.amsterdamevents.aeserver.repositories.AEventsRepositoryMock;
import nl.team02.amsterdamevents.aeserver.views.ViewAEvent;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

@Entity
public class AEvent {
    @JsonView(ViewAEvent.Public.class)
    @Id //primary key
    @GeneratedValue
    public long id;
    @JsonView(ViewAEvent.Public.class)
    public String title;
    public LocalDate startDate;
    public LocalDate endDate;
    @JsonView(ViewAEvent.Public.class)
    public AEventStatus status;
    public double entranceFee;
    public int maxParticipants;
    public boolean isTicketed;
    @OneToMany(mappedBy = "aEvent")
    private List<Registration> registrations = new ArrayList<>();

    public AEvent() {}

    public AEvent(long id, String title, LocalDate startDate, LocalDate endDate, AEventStatus status, double entranceFee, int maxParticipants, boolean isTicketed) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.entranceFee = entranceFee;
        this.maxParticipants = maxParticipants;
        this.isTicketed = isTicketed;
    }

    public static AEvent createRandomAEvent() {
        long id = AEventsRepositoryMock.aEventId++;
        String title = "A fantastic backend aEvent-" + id;
        LocalDate start = getRandomStartDate(2020, 2021);
        LocalDate end = getRandomEndDate(start, 2021);
        AEventStatus status = getRandomAEventStatus();
        double entranceFee = getRandomEntranceFee();
        int maxParticipants = getRandomMaxParticipants();
        boolean isTicketed = getRandomIsTicketed();



        return new AEvent(id, title, start, end, status, entranceFee, maxParticipants, isTicketed);
    }


    public static LocalDate getRandomStartDate(int startYear, int endYear) {
        LocalDate startDate = LocalDate.of(startYear, 1, 1); //Min of start
        LocalDate endDate = LocalDate.of(endYear, 12, 31); //Max of end
        long start = startDate.toEpochDay();
        long end = endDate.toEpochDay();

        long randomEpochDay = ThreadLocalRandom.current().longs(start, end).findAny().getAsLong();
        return LocalDate.ofEpochDay(randomEpochDay);
    }

    public static LocalDate getRandomEndDate(LocalDate startDate, int endYear) {
        long start = startDate.toEpochDay();

        LocalDate endDate = LocalDate.of(endYear, 12, 31); //Max of end
        long end = endDate.toEpochDay();

        long randomEpochDay = ThreadLocalRandom.current().longs(start, end).findAny().getAsLong();
        return LocalDate.ofEpochDay(randomEpochDay);
    }

    public static AEventStatus getRandomAEventStatus() {
        AEventStatus[] values = AEventStatus.values();
        int length = values.length;
        int randomIndex = new Random().nextInt(length);
        return values[randomIndex];
    }

    public static double getRandomEntranceFee() {
        double minimumFee = 10.00;
        double maximumFee = 100.00;
        double generatedRandomFee = Math.floor(minimumFee + (new Random().nextDouble() * (maximumFee - minimumFee)));
        return generatedRandomFee;
    }

    public static int getRandomMaxParticipants() {
        int minimumParticipants = 1;
        int maximumParticipants = 80;
        int generatedRandomParticipants = minimumParticipants + (int) (new Random().nextFloat() * (maximumParticipants - minimumParticipants));
        return generatedRandomParticipants;
    }

    public static boolean getRandomIsTicketed() {
        Random ticketed = new Random();
        return ticketed.nextBoolean();
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Registration> getRegistrations() {
        return registrations;
    }

    public void addRegistration(Registration registration) {
        this.registrations.add(registration);
    }

    public void removeRegistration(Registration registration) {
        this.registrations.remove(registration);
    }

    @Override
    public String toString() {
        return "AEvent{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", status=" + status +
                ", entranceFee=" + entranceFee +
                ", maxParticipants=" + maxParticipants +
                ", isTicketed=" + isTicketed +
                '}';
    }
}

enum AEventStatus {
    DRAFT,
    PUBLISHED,
    CANCELLED
}

