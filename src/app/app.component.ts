import { Component } from '@angular/core';
import { StarshipData } from './starship/starship.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public curShip?: StarshipData;
}