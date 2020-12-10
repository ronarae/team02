import {Component, OnInit, ViewChild} from '@angular/core';
import {SessionSbService} from "../../../services/session.sb.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css']
})
export class SignOnComponent implements OnInit {

  private targetUrl;

  constructor(private sessionService: SessionSbService,
              private activatedRoute: ActivatedRoute) {
    //get target url from route param or default to '/'
    this.targetUrl = this.activatedRoute.snapshot.queryParams['targetUrl'] || 'home';
  }


  ngOnInit() {
  }

  @ViewChild('editForm')
  public detailForm: NgForm
  public userEmail: string;
  public userPassword: string;

  public onSignIn(){
    this.sessionService.signIn(
      this.userEmail, this.userPassword
    );
  }
}
