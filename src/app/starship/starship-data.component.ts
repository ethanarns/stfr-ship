import { ShipFramePart, shipFrames } from '../parts/frames';
import { armorList, computerList, crewQuartersList, defensiveCountermeasuresList } from '../parts/part-list';
import { ArmorPart, ComputerPart, CrewQuartersPart, DefensiveCountermeasuresPart, DriftEnginePart, ExpansionBayPart, PowerCorePart, SensorsPart, ShieldsPart, ThrusterPart, WeaponMountPlacement, WeaponPart } from '../parts/part-types';

const lightLaserCannonDefault: WeaponPart = { name: "Light laser cannon", multBpSize: false, stackable: true, range: "Short", hexSpeed: 0, damage: "2d4", pcu: 5, bp: 2, specialProperties: [] };
const highExplosiveTurretDefault: WeaponPart = { name: "High explosive missile launcher", multBpSize: false, stackable: true, range: "Long", hexSpeed: 12, damage: "4d8", pcu: 10, bp: 14, specialProperties: ["Limited fire 5"]};

export class StarshipData {
    public tier: number;
    public frame: ShipFramePart;
    public powerCore: PowerCorePart;
    public thruster: ThrusterPart;
    public armor: ArmorPart;
    public computer: ComputerPart;
    public crewQuarters: CrewQuartersPart;
    public defensiveCountermeasures: DefensiveCountermeasuresPart;
    public driftEngine: DriftEnginePart;
    public expansionBay: ExpansionBayPart[];
    public sensors: SensorsPart;
    public shields: ShieldsPart;
    public weapons: Record<WeaponMountPlacement,WeaponPart[]>;

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
        this.driftEngine = { name: "Signal Basic",   multBpSize: true, stackable: false, engineRating: 1, maxSize: "colossal", pcu: 75,  bp: 2 };
        this.expansionBay = [
            { name: "Cargo hold", multBpSize: false, stackable: true, pcu: 0, bp: 0, description: "" },
            { name: "Cargo hold", multBpSize: false, stackable: true, pcu: 0, bp: 0, description: "" },
            { name: "Cargo hold", multBpSize: false, stackable: true, pcu: 0, bp: 0, description: "" },
            { name: "Science lab", multBpSize: false, stackable: true, pcu: 2, bp: 1, description: "" }
        ];
        this.sensors = { name: "Budget medium-range", multBpSize: false, stackable: false, range: "Medium", mod: 0, bp: 3, pcu: 0 };
        this.shields = { name: "Basic Shields 20", multBpSize: false, stackable: false, totalSp: 20, regenMin: 1, pcu: 10, bp: 3 };
        this.weapons = {
            "forward": [
                lightLaserCannonDefault
            ],
            "port": [],
            "starboard": [],
            "aft": [],
            "turret": [
                highExplosiveTurretDefault
            ]
        };
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
        totalBp -= this.driftEngine.bp;
        this.expansionBay.forEach(bay => {
            totalBp -= bay.bp;
        });
        totalBp -= this.sensors.bp;
        totalBp -= this.shields.bp;
        totalBp -= this.getWeaponsBp();
        return totalBp;
    }

    public getRemainingPcu(): number {
        let availablePcu = this.powerCore.pcu;
        availablePcu -= this.thruster.pcu;
        availablePcu -= this.armor.pcu;
        availablePcu -= this.computer.pcu;
        availablePcu -= this.crewQuarters.pcu;
        availablePcu -= this.defensiveCountermeasures.pcu;
        // Skip drift, since it requires turning off other systems to activate
        this.expansionBay.forEach(bay => {
            availablePcu -= bay.pcu;
        });
        availablePcu -= this.sensors.pcu; // Usually 0
        availablePcu -= this.shields.pcu;
        availablePcu -= this.getWeaponsPcu();
        return availablePcu;
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

    private getWeaponsBp(): number {
        let bp = 0;
        Object.keys(this.weapons).forEach((key: WeaponMountPlacement) => {
            const weaponsList = this.weapons[key];
            weaponsList.forEach(weapon => {
                bp += weapon.bp;
            });
        });
        return bp;
    }

    private getWeaponsPcu(): number {
        let pcu = 0;
        Object.keys(this.weapons).forEach((key: WeaponMountPlacement) => {
            const weaponsList = this.weapons[key];
            weaponsList.forEach(weapon => {
                pcu += weapon.pcu;
            });
        });
        return pcu;
    }

}