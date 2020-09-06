import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  websiteTitle = 'Amsterdam Events';
  todayDate;

  constructor() {
    const date = new Date();
    const dd = String(date.getDate());
    const mm = String(date.getMonth() + 1);
    const yy = String(date.getFullYear());

    this.todayDate = dd + '/' + mm + '/' + yy;
  }

  ngOnInit(): void {
  }

}
