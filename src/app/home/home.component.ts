import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
    title = 'appBootstrap';
   
  formModal: any;
  constructor(private route: Router) { }

  ngOnInit() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }
  Dashboard1() {
    this.route.navigateByUrl('/dashboard1');
  }

  Dashboard2() {
    this.route.navigateByUrl('/dashboard2');
  }

  Dashboard3() {
    this.route.navigateByUrl('/dashboard3');
  }

  Dashboard4() {
    this.route.navigateByUrl('/dashboard4');
  }

  openModal() {
    this.formModal.show();
  }

  close(){
    this.formModal.hide();
  }

}
