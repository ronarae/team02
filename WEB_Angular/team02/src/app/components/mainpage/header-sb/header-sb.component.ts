import {Component, OnInit, ViewChild} from '@angular/core';
import {SessionSbService} from "../../../services/session.sb.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header-sb.component.html',
  styleUrls: ['./header-sb.component.css']
})
export class HeaderSBComponent implements OnInit {
  websiteTitle = 'Amsterdam Events';
  todayDate;

  private targetURL;

  constructor(private sessionService: SessionSbService,
              private activatedRoute: ActivatedRoute) {
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
   private detailForm: NgForm;
  private userMail: string;
  private userPassword: string;

  private onSignIn() {
    this.sessionService.signIn(
      this.userMail, this.userPassword
    )
  }

}
