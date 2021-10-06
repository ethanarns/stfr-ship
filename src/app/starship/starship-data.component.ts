import { ShipFramePart, shipFrames } from '../parts/frames';
import { armorList, computerList, crewQuartersList } from '../parts/part-list';
import { ArmorPart, ComputerPart, CrewQuartersPart, PowerCorePart, ThrusterPart } from '../parts/part-types';

export class StarshipData {
    public tier: number;
    public frame: ShipFramePart;
    public powerCore: PowerCorePart;
    public thruster: ThrusterPart;
    public armor: ArmorPart;
    public computer: ComputerPart;
    public crewQuarters: CrewQuartersPart;

    private readonly tierBp: Record<number,number> = {
        0.25: 25,
        0.33: 30,
        0.50: 40,
        1: 55,
        2: 75,
        3: 95
    };

    constructor() {
        // Default to Kevolari Venture
        this.tier = 1;
        this.frame = shipFrames["explorer"];
        this.powerCore = { name: "Pulse Gray", multBpSize: false, stackable: false, pcu: 100, bp: 10, sizes: ["tiny", "small", "medium"] };
        this.thruster = { name: "M6 thrusters", multBpSize: false, stackable: false, frameSize: "medium", speed: 6, pilotMod: 1, pcu: 50, bp: 3 };
        this.armor = armorList[2]; // Mk 3
        this.computer = computerList[0]; // Basic Computer
        this.crewQuarters = crewQuartersList[0]; // Common
    }

    public getRemainingBp(): number {
        let totalBp = this.tierBp[this.tier];
        if (!totalBp) {
            console.error("Unhandled tier ", this.tier);
            return -1;
        }
        totalBp -= this.frame.cost;
        totalBp -= this.powerCore.bp;
        totalBp -= this.thruster.bp;
        totalBp -= this.armor.bp;
        totalBp -= this.computer.bp;
        totalBp -= this.crewQuarters.bp;
        return totalBp;
    }

    public getBaseTl(): number {
        let tl = 10;
        // Can be positive or negative
        tl += this.frame.actlMod;
        // Only goes in negatives
        tl += this.armor.tlMod;
        return tl;
    }

}