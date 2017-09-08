import { Component } from '@angular/core';

const baseURL = 'http://localhost:3000/api/v1/monsters'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  monsters = []

  async ngOnInit() {
    const data = await fetch(`${baseURL}`)
    const res = await data.json()
    console.log(res.monsters[0].name)
    const monsters = res.monsters
    this.monsters = monsters
  }


}
