package nl.team02.amsterdamevents.aeserver.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
public class Registration {

    @Id
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
