import { Component, OnInit } from '@angular/core';

// import { ContactService } from '../service/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  helo : number[];
  constructor() { }

  ngOnInit() {

    this.helo = [1,2,3];
  }



}
