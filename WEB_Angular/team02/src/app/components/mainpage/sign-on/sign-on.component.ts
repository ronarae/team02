import {Component, OnInit, ViewChild} from '@angular/core';
import {SessionSbService} from "../../../services/session.sb.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {NgForm} from "@angular/forms";
import {User} from "../../../models/user";

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css']
})
export class SignOnComponent implements OnInit {

  private targetUrl;

  user: User;
  expectedUrl: string;
  errorMessage: string;

  constructor(private sessionService: SessionSbService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    //get target url from route param or default to '/'
    this.targetUrl = this.activatedRoute.snapshot.queryParams['targetUrl'] || 'home';
  }


  ngOnInit(){}

  @ViewChild('editForm')
  public detailForm: NgForm

  logOut(): void {
    this.sessionService.signOff();
  }

  isAuthenticated(): boolean {
    return this.sessionService.isAuthenticated();
  }


  public onSignIn(): void {
    this.sessionService.signIn(this.user.email, this.user.password).subscribe((data) => {
      this.router.navigate([this.expectedUrl]);
    },
      (error) => {
        this.errorMessage = error.error.message || 'Apparently your server is down: ' + error.message;
      });
  }




}
