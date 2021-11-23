import { Component, OnInit } from '@angular/core';
import { skills_elements } from './skills-elements';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent implements OnInit {
  title: string;
  skills: any[];
  constructor() { 
    this.title = "My Skills"
    this.skills = skills_elements;
  }

  ngOnInit(): void {
  }

}
