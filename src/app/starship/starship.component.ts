import { Component } from '@angular/core';
import { ShipFrameType } from '../parts/frames';
import { armorList, thrusterList } from '../parts/part-list';
import { ArmorPart, ThrusterPart } from '../parts/part-types';

@Component({
    selector: 'app-starship',
    templateUrl: './starship.component.html',
    styleUrls: ['./starship.component.scss']
})
export class StarshipComponent {

    public tier: number;
    public frame: ShipFrameType;
    public thruster: ThrusterPart;
    public armor: ArmorPart;

    constructor() {
        // Default to Kevolari Venture
        this.tier = 1;
        this.frame = "explorer";
        this.thruster = thrusterList[10]; // M6
        this.armor = armorList[2]; // Mk 3
    }

}