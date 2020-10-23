package nl.team02.amsterdamevents.aeserver.models;

import com.fasterxml.jackson.annotation.JsonView;
import nl.team02.amsterdamevents.aeserver.repositories.AEventsRepository;
import nl.team02.amsterdamevents.aeserver.repositories.AEventsRepositoryMock;
import nl.team02.amsterdamevents.aeserver.views.ViewAEvent;

import java.time.LocalDate;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class AEvent {
    @JsonView(ViewAEvent.Public.class)
    public long id;
    @JsonView(ViewAEvent.Public.class)
    public String title;
    public LocalDate start;
    public LocalDate end;
    @JsonView(ViewAEvent.Public.class)
    public AEventStatus status;
    public double participationFee;
    public int maxParticipants;
    public boolean isTicketed;

    public AEvent(long id, String title, LocalDate start, LocalDate end, AEventStatus status, double participationFee, int maxParticipants, boolean isTicketed) {
        this.id = id;
        this.title = title;
        this.start = start;
        this.end = end;
        this.status = status;
        this.participationFee = participationFee;
        this.maxParticipants = maxParticipants;
        this.isTicketed = isTicketed;
    }

    public static AEvent createRandomAEvent() {
        long id = AEventsRepositoryMock.aEventId++;
        String title = "A fantastic backend aEvent-" + id;
        LocalDate start = getRandomStartDate(2020, 2021);
        LocalDate end = getRandomEndDate(start, 2021);
        AEventStatus status = getRandomAEventStatus();
        double participationFee = getRandomParticipationFee();
        int maxParticipants = getRandomMaxParticipants();
        boolean isTicketed = getRandomIsTicketed();

        return new AEvent(id, title, start, end, status, participationFee, maxParticipants, isTicketed);
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

    public static double getRandomParticipationFee() {
        double minimumFee = 10.00;
        double maximumFee = 100.00;
        double generatedRandomFee = Math.floor(minimumFee + new Random().nextDouble() * (maximumFee - minimumFee));
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getStart() {
        return start;
    }

    public void setStart(LocalDate start) {
        this.start = start;
    }

    public LocalDate getEnd() {
        return end;
    }

    public void setEnd(LocalDate end) {
        this.end = end;
    }

    public AEventStatus getStatus() {
        return status;
    }

    public void setStatus(AEventStatus status) {
        this.status = status;
    }

    public double getParticipationFee() {
        return participationFee;
    }

    public void setParticipationFee(double participationFee) {
        this.participationFee = participationFee;
    }

    public int getMaxParticipants() {
        return maxParticipants;
    }

    public void setMaxParticipants(int maxParticipants) {
        this.maxParticipants = maxParticipants;
    }

    public boolean isTicketed() {
        return isTicketed;
    }

    public void setTicketed(boolean ticketed) {
        isTicketed = ticketed;
    }
}

enum AEventStatus {
    DRAFT,
    PUBLISHED,
    CANCELLED
}

