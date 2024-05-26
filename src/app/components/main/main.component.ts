import {Component, OnInit} from '@angular/core';
import {HeaderDashboardComponent} from "./header-dashboard/header-dashboard.component";
import {DashboardMainComponent} from "./dashboard-main/dashboard-main.component";
import {Router} from "express";
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderDashboardComponent,
    DashboardMainComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  constructor(
    private http: ServiceService,
  ) {
  }

  test = ''
  ngOnInit(): void {
    this.http.getTest().subscribe((res: any) => {
      this.test = res.message
    });
  }

}
