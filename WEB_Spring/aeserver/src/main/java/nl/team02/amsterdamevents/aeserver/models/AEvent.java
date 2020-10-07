package nl.team02.amsterdamevents.aeserver.models;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Random;

public class AEvent {
    public int id;
    public String title;
    public Date start;
    public Date end;
    public AEventStatus status;
    public double participationFee;
    public int maxParticipants;
    public boolean isTicketed;
    public static int counter = 0;

    public AEvent(int id, String title, Date start, Date end, AEventStatus status, double participationFee, int maxParticipants, boolean isTicketed) {
        this.id = id;
        this.title = title;
        this.start = start;
        this.end = end;
        this.status = status;
        this.participationFee = participationFee;
        this.maxParticipants = maxParticipants;
        this.isTicketed = isTicketed;
    }

    public AEvent(String title) {
        this.id = counter++;
        this.title = title;
    }

    public static AEvent createRandomAEvent() {
        int id = counter++;
        String title = "Event " + id;
        Date start = new Date();
        Date end = new Date();
        AEventStatus status = getRandomAEventStatus();
        double participationFee = getRandomParticipationFee();
        int maxParticipants = getRandomMaxParticipants();
        boolean isTicketed = getRandomIsTicketed();

        return new AEvent(id, title, start, end, status, participationFee, maxParticipants, isTicketed);
    }

    public static Date getRandomDate() {

        //wip
        return getRandomDate();
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

