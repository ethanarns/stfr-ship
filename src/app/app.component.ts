import { Component } from '@angular/core';
import { StarshipData } from './starship/starship-data.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public curShip: StarshipData;

    constructor() {
        this.curShip = new StarshipData();
        console.log("Ship stats:")
        console.log("baseTl:", this.curShip.getBaseTl());
        console.log("baseAc:", this.curShip.getBaseAc());
        console.log("pilotMod:",this.curShip.getPilotingMod());
    }
}