import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {
  @Input() monsters
  constructor() { }

  ngOnInit() {
  }

}
