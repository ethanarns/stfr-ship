import { Component } from '@angular/core';
import { ShipFrameType } from '../parts/frames';
import { armorList, computerList, crewQuartersList, thrusterList } from '../parts/part-list';
import { ArmorPart, ComputerPart, CrewQuartersPart, PowerCorePart, ThrusterPart } from '../parts/part-types';

@Component({
    selector: 'app-starship',
    templateUrl: './starship.component.html',
    styleUrls: ['./starship.component.scss']
})
export class StarshipComponent {

    public tier: number;
    public frame: ShipFrameType;
    public powerCore: PowerCorePart;
    public thruster: ThrusterPart;
    public armor: ArmorPart;
    public computer: ComputerPart;
    public crewQuarters: CrewQuartersPart;

    constructor() {
        // Default to Kevolari Venture
        this.tier = 1;
        this.frame = "explorer";
        this.powerCore = { name: "Pulse Gray", multBpSize: false, stackable: false, pcu: 100, bp: 10, sizes: ["tiny", "small", "medium"] };
        this.thruster = thrusterList[10]; // M6
        this.armor = armorList[2]; // Mk 3
        this.computer = computerList[0]; // Basic Computer
        this.crewQuarters = crewQuartersList[0]; // Common
    }

}