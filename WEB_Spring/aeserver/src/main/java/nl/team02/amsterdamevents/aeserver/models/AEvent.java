package nl.team02.amsterdamevents.aeserver.models;

import java.time.LocalDate;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class AEvent {
    public int id;
    public String title;
    public LocalDate start;
    public LocalDate end;
    public AEventStatus status;
    public double participationFee;
    public int maxParticipants;
    public boolean isTicketed;
    public static int counter = 0;

    public AEvent(int id, String title, LocalDate start, LocalDate end, AEventStatus status, double participationFee, int maxParticipants, boolean isTicketed) {
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
        int id = counter++;
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

    @Override
    public String toString() {
        return String.format("AEvent{id=%d, title='%s', start=%s, end=%s, status=%s, participationFee=%s, maxParticipants=%d, isTicketed=%s}", id, title, start, end, status, participationFee, maxParticipants, isTicketed);
    }
}

enum AEventStatus {
    DRAFT,
    PUBLISHED,
    CANCELLED
}

