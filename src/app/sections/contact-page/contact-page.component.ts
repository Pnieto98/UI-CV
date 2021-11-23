import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  title: string;
  constructor() {
    this.title = "Contact"
   }

  ngOnInit(): void {
  }

}
