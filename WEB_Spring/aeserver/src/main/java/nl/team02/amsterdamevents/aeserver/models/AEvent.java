package nl.team02.amsterdamevents.aeserver.models;

import java.util.Date;

public class AEvent {
    public int id;
    public String title;
    public Date start;
    public Date end;
    public double participationFee;
    public int maxParticipants;
    public boolean isTicketed;
    public static int counter = 0;

    public AEvent(int id, String title, Date start, Date end, double participationFee, int maxParticipants, boolean isTicketed) {
        this.id = id;
        this.title = title;
        this.start = start;
        this.end = end;
        this.participationFee = participationFee;
        this.maxParticipants = maxParticipants;
        this.isTicketed = isTicketed;
    }

    public AEvent(String title) {
        this.id = counter++;
        this.title = title;
    }
}
