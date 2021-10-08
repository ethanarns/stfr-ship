import { ArmorPart, ComputerPart, CrewQuartersPart, DefensiveCountermeasuresPart, DriftEnginePart, ExpansionBayPart, PowerCorePart, SensorsPart, ShieldsPart, ThrusterPart } from "./part-types";

export const coreList: PowerCorePart[] = [
    { name: "Micron Light", pcu: 50, bp: 4, sizes: ["tiny"] },
    { name: "Pulse Gray", pcu: 100, bp: 10, sizes: ["tiny", "small", "medium"] }
];

// Thrusters
export const thrusterList: ThrusterPart[] = [
    { name: "T6 thrusters", frameSize: "tiny", speed: 6, pilotMod: 1, pcu: 20, bp: 3 },
    { name: "T8 thrusters", frameSize: "tiny", speed: 8, pilotMod: 0, pcu: 25, bp: 4 },
    { name: "T10 thrusters", frameSize: "tiny", speed: 10, pilotMod: 0, pcu: 30, bp: 5 },
    { name: "T12 thrusters", frameSize: "tiny", speed: 12, pilotMod: -1, pcu: 35, bp: 6 },
    { name: "T14 thrusters", frameSize: "tiny", speed: 14, pilotMod: -2, pcu: 40, bp: 7 },

    { name: "S6 thrusters", frameSize: "small", speed: 6, pilotMod: 1, pcu: 30, bp: 3 },
    { name: "S8 thrusters", frameSize: "small", speed: 8, pilotMod: 0, pcu: 40, bp: 4 },
    { name: "S10 thrusters", frameSize: "small", speed: 10, pilotMod: 0, pcu: 50, bp: 5 },
    { name: "S12 thrusters", frameSize: "small", speed: 12, pilotMod: -1, pcu: 60, bp: 6 },

    { name: "M4 thrusters", frameSize: "medium", speed: 4, pilotMod: 2, pcu: 40, bp: 2 },
    { name: "M6 thrusters", frameSize: "medium", speed: 6, pilotMod: 1, pcu: 50, bp: 3 }
];

export const armorList: ArmorPart[] = [
    { name: "Mk1 armor", acMod: 1, tlMod: 0, turnDist: 0, pcu: 0, bp: 1 },
    { name: "Mk2 armor", acMod: 2, tlMod: 0, turnDist: 0, pcu: 0, bp: 2 },
    { name: "Mk3 armor", acMod: 3, tlMod: 0, turnDist: 0, pcu: 0, bp: 3 },
    { name: "Mk4 armor", acMod: 4, tlMod: 0, turnDist: 0, pcu: 0, bp: 5 },

    { name: "Mk5 armor", acMod: 5, tlMod: -1, turnDist: 0, pcu: 0, bp: 7 },
    { name: "Mk6 armor", acMod: 6, tlMod: -1, turnDist: 0, pcu: 0, bp: 9 },
    { name: "Mk7 armor", acMod: 7, tlMod: -1, turnDist: 0, pcu: 0, bp: 12 },
    { name: "Mk8 armor", acMod: 8, tlMod: -1, turnDist: 0, pcu: 0, bp: 15 },

    { name: "Mk9 armor", acMod: 9, tlMod: -2, turnDist: 1, pcu: 0, bp: 18 },
    { name: "Mk10 armor", acMod: 10, tlMod: -2, turnDist: 1, pcu: 0, bp: 21 },
    { name: "Mk11 armor", acMod: 11, tlMod: -2, turnDist: 1, pcu: 0, bp: 25 },

    { name: "Mk12 armor", acMod: 12, tlMod: -3, turnDist: 2, pcu: 0, bp: 30 },
    { name: "Mk13 armor", acMod: 13, tlMod: -3, turnDist: 2, pcu: 0, bp: 35 },
    { name: "Mk14 armor", acMod: 14, tlMod: -3, turnDist: 2, pcu: 0, bp: 40 },

    { name: "Mk15 armor", acMod: 15, tlMod: -4, turnDist: 3, pcu: 0, bp: 45 },
];

export const computerList: ComputerPart[] = [
    { name: "Basic computer", bonus: [0], nodes: 0, pcu: 0, bp: 0 },

    { name: "Mk 1 mononode", bonus: [1], nodes: 1, pcu: 10, bp: 1 },
    { name: "Mk 1 duonode", bonus: [1, 1], nodes: 2, pcu: 10, bp: 2 },
    { name: "Mk 1 trinode", bonus: [1, 1, 1], nodes: 3, pcu: 10, bp: 3 },
    { name: "Mk 1 tetranode", bonus: [1, 1, 1, 1], nodes: 4, pcu: 10, bp: 3 },

    { name: "Mk 2 mononode", bonus: [2], nodes: 1, pcu: 15, bp: 4 },
    { name: "Mk 2 duonode", bonus: [2, 2], nodes: 2, pcu: 15, bp: 8 }
];

export const crewQuartersList: CrewQuartersPart[] = [
    { name: "Common", pcu: 0, bp: 0, description: "Okay" },
    { name: "Good", pcu: 0, bp: 2, description: "Nice" },
    { name: "Luxurious", pcu: 0, bp: 5, description: "Sweet" }
];

export const defensiveCountermeasuresList: DefensiveCountermeasuresPart[] = [
    { name: "Mk 1 defenses", tlMod: 1, pcu: 1, bp: 2 },
    { name: "Mk 2 defenses", tlMod: 2, pcu: 1, bp: 3 }
];

export const driftEngineList: DriftEnginePart[] = [
    { name: "Signal Basic", engineRating: 1, maxSize: "colossal", pcu: 75, bp: 2 },
    { name: "Signal Booster", engineRating: 2, maxSize: "huge", pcu: 100, bp: 5 }
];

export const expansionBayList: ExpansionBayPart[] = [
    { name: "Arcane laboratory", pcu: 1, bp: 1, description: "" },
    { name: "Cargo hold", pcu: 0, bp: 0, description: "" },
    { name: "Science lab", pcu: 2, bp: 1, description: "" }
];

export const sensorList: SensorsPart[] = [
    { name: "Cut rate", range: "Short", mod: -2, bp: 1, pcu: 0 },
    { name: "Budget medium-range", range: "Medium", mod: 0, bp: 3, pcu: 0 }
];

export const shieldList: ShieldsPart[] = [
    { name: "Basic Shields 10", totalSp: 10, regenMin: 1, pcu: 5, bp: 2 },
    { name: "Basic Shields 20", totalSp: 20, regenMin: 1, pcu: 10, bp: 3 }
]
