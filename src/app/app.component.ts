import { Component } from '@angular/core';
import { StarshipComponent } from './starship/starship.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public curShip?: StarshipComponent;
}