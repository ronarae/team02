package nl.team02.amsterdamevents.aeserver.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

@Entity
public class Registration {


    @Id
    @SequenceGenerator(name = "id_gen", sequenceName = "id_seq", initialValue = 10000, allocationSize = 100)
    @GeneratedValue(generator = "id_gen")
    public long id;
    public String ticketCode;
    public boolean paid;
    public LocalDateTime submissionDate;

    @ManyToOne
    @JsonBackReference
    private AEvent aEvent;

    public Registration(long id, String ticketCode, boolean paid, LocalDateTime submissionDate, AEvent aEvent) {
        this.id = id;
        this.ticketCode = ticketCode;
        this.paid = paid;
        this.submissionDate = submissionDate;
        this.aEvent = aEvent;
    }

    public Registration() {
    }

    public static Registration createRandomRegistration(){
        Registration registration = new Registration();
        registration.ticketCode = getRandomTicketCode();
        registration.paid = getRandomPaid();

       return registration;
    }

    public static String getRandomTicketCode(){
        return "test";
    }

    public static LocalDateTime randomDate(LocalDateTime start, LocalDateTime end) {
        long startEpochDay = start.toLocalDate().toEpochDay();
        long endEpochDay = end.toLocalDate().toEpochDay();
        long randomDay = ThreadLocalRandom
                .current()
                .nextLong(startEpochDay, endEpochDay);
        LocalTime randomTime = LocalTime.of((int) Math.floor(Math.random() * 23) + 1,
                (int) Math.floor(Math.random() * 59) + 1,
                (int) Math.floor(Math.random() * 59) + 1);
        return LocalDate.ofEpochDay(randomDay).atTime(randomTime);
    }

    public static boolean getRandomPaid() {
        Random paid = new Random();
        return  paid.nextBoolean();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTicketCode() {
        return ticketCode;
    }

    public void setTicketCode(String ticketCode) {
        this.ticketCode = ticketCode;
    }

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    public LocalDateTime getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(LocalDateTime submissionDate) {
        this.submissionDate = submissionDate;
    }

    public AEvent getaEvent() {
        return aEvent;
    }

    public void setaEvent(AEvent aEvent) {
        this.aEvent = aEvent;
    }
}
