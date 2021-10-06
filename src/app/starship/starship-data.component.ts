import { ShipFramePart, shipFrames } from '../parts/frames';
import { armorList, computerList, crewQuartersList, defensiveCountermeasuresList } from '../parts/part-list';
import { ArmorPart, ComputerPart, CrewQuartersPart, DefensiveCountermeasuresPart, PowerCorePart, ThrusterPart } from '../parts/part-types';

export class StarshipData {
    public tier: number;
    public frame: ShipFramePart;
    public powerCore: PowerCorePart;
    public thruster: ThrusterPart;
    public armor: ArmorPart;
    public computer: ComputerPart;
    public crewQuarters: CrewQuartersPart;
    public defensiveCountermeasures: DefensiveCountermeasuresPart;

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
        this.defensiveCountermeasures = defensiveCountermeasuresList[0]; // Mk 1 defenses
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
        totalBp -= this.defensiveCountermeasures.bp;
        return totalBp;
    }

    public getBaseTl(): number {
        let tl = 10;
        // Can be positive or negative
        tl += this.frame.actlSizeMod;
        // Only goes in negatives
        tl += this.armor.tlMod;
        // Only positives
        tl += this.defensiveCountermeasures.tlMod;
        return tl;
    }

    public getBaseAc(): number {
        let ac = 10;
        // Only positives
        ac += this.armor.acMod;
        // Can be positive or negative
        ac += this.frame.actlSizeMod;
        return ac;
    }

    public getPilotingMod(): number {
        let pilotMod = 0;
        // Can be positive or negative
        pilotMod += this.frame.maneuverability.pilot;
        pilotMod += this.thruster.pilotMod;
        return pilotMod;
    }

}