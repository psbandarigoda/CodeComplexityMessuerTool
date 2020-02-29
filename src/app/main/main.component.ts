import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  headerText: string;

  constructor(private router: Router) {

    router.events.subscribe((val) => {
      this.setHeaderTextAndButtons();
    });

  }

  ngOnInit() {
  }

  setHeaderTextAndButtons() {

    if (this.router.url == '/main/upload') {
      this.headerText = "Uploade";
    }
    // } else if (this.router.url == '/main/customer_vehicle') {
    //   this.headerText = "Customer Vehicle Details";
    // }
  }

  changeRoute(button) {
    console.log(button)
    if (button == "Upload") {
      this.router.navigate(['/main/upload'])
    }
    // } else if (button == "Employees") {
    //   this.router.navigate(['/main/employee'])
    // }
  }

}
