import {Component, OnInit, ViewChild} from '@angular/core';
import {SessionSbService} from "../../../services/session.sb.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-sbheader',
  templateUrl: './sbheader.component.html',
  styleUrls: ['./sbheader.component.css']
})
export class SbheaderComponent implements OnInit {
  websiteTitle = 'Amsterdam Events';
  todayDate;

  private targetURL;

  constructor(public sessionService: SessionSbService,
              public activatedRoute: ActivatedRoute) {
    //get target URL from route parameters or default to '/'
    this.targetURL = this.activatedRoute.snapshot.queryParams['targetURL'] || '/home';

    //date
    const date = new Date();
    const dd = String(date.getDate());
    const mm = String(date.getMonth() + 1);
    const yy = String(date.getFullYear());

    this.todayDate = dd + '/' + mm + '/' + yy;
  }

  ngOnInit(): void {
  }

  @ViewChild('editForm')
  public detailForm: NgForm;
  public userMail: string;
  public userPassword: string;

  public onSignIn() {
    this.sessionService.signIn(
      this.userMail, this.userPassword
    )
  }

}

