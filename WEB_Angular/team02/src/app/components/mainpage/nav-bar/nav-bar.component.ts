import { Component, OnInit } from '@angular/core';
import {SessionSbService} from "../../../services/session.sb.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public sessionService: SessionSbService) { }

  ngOnInit(): void {
  }

  isAuthenticated():boolean {
    return this.sessionService.isAuthenticated();
  }
}
