import { Component } from '@angular/core';
import { ShipFrameType } from '../parts/frames';
import { armorList, computerList, crewQuartersList, thrusterList } from '../parts/part-list';
import { ArmorPart, ComputerPart, CrewQuartersPart, PowerCorePart, ThrusterPart } from '../parts/part-types';

export class StarshipData {
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
        this.thruster = { name: "M6 thrusters", multBpSize: false, stackable: false, frameSize: "medium", speed: 6, pilotMod: 1, pcu: 50, bp: 3 };
        this.armor = armorList[2]; // Mk 3
        this.computer = computerList[0]; // Basic Computer
        this.crewQuarters = crewQuartersList[0]; // Common
    }

}