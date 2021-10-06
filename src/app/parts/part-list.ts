import { ArmorPart, ComputerPart, CrewQuartersPart, DefensiveCountermeasuresPart, DriftEnginePart, ExpansionBayPart, PowerCorePart, ThrusterPart } from "./part-types";

export const coreList: PowerCorePart[] = [
    { name: "Micron Light", multBpSize: false, stackable: false, pcu: 50, bp: 4, sizes: ["tiny"] },
    { name: "Pulse Gray", multBpSize: false, stackable: false, pcu: 100, bp: 10, sizes: ["tiny", "small", "medium"] }
];

// Thrusters
export const thrusterList: ThrusterPart[] = [
    { name: "T6 thrusters",  multBpSize: false, stackable: false, frameSize: "tiny", speed: 6,  pilotMod: 1,  pcu: 20, bp: 3 },
    { name: "T8 thrusters",  multBpSize: false, stackable: false, frameSize: "tiny", speed: 8,  pilotMod: 0,  pcu: 25, bp: 4 },
    { name: "T10 thrusters", multBpSize: false, stackable: false, frameSize: "tiny", speed: 10, pilotMod: 0,  pcu: 30, bp: 5 },
    { name: "T12 thrusters", multBpSize: false, stackable: false, frameSize: "tiny", speed: 12, pilotMod: -1, pcu: 35, bp: 6 },
    { name: "T14 thrusters", multBpSize: false, stackable: false, frameSize: "tiny", speed: 14, pilotMod: -2, pcu: 40, bp: 7 },

    { name: "S6 thrusters",  multBpSize: false, stackable: false, frameSize: "small", speed: 6,  pilotMod: 1,  pcu: 30, bp: 3 },
    { name: "S8 thrusters",  multBpSize: false, stackable: false, frameSize: "small", speed: 8,  pilotMod: 0,  pcu: 40, bp: 4 },
    { name: "S10 thrusters", multBpSize: false, stackable: false, frameSize: "small", speed: 10, pilotMod: 0,  pcu: 50, bp: 5 },
    { name: "S12 thrusters", multBpSize: false, stackable: false, frameSize: "small", speed: 12, pilotMod: -1, pcu: 60, bp: 6 },

    { name: "M4 thrusters", multBpSize: false, stackable: false, frameSize: "medium", speed: 4, pilotMod: 2, pcu: 40, bp: 2 },
    { name: "M6 thrusters", multBpSize: false, stackable: false, frameSize: "medium", speed: 6, pilotMod: 1, pcu: 50, bp: 3 }
];

export const armorList: ArmorPart[] = [
    { name: "Mk1 armor",  multBpSize: true, stackable: false, acMod: 1,  tlMod: 0, turnDist: 0, pcu: 0, bp: 1 },
    { name: "Mk2 armor",  multBpSize: true, stackable: false, acMod: 2,  tlMod: 0, turnDist: 0, pcu: 0, bp: 2 },
    { name: "Mk3 armor",  multBpSize: true, stackable: false, acMod: 3,  tlMod: 0, turnDist: 0, pcu: 0, bp: 3 },
    { name: "Mk4 armor",  multBpSize: true, stackable: false, acMod: 4,  tlMod: 0, turnDist: 0, pcu: 0, bp: 5 },

    { name: "Mk5 armor",  multBpSize: true, stackable: false, acMod: 5,  tlMod: -1, turnDist: 0, pcu: 0, bp: 7  },
    { name: "Mk6 armor",  multBpSize: true, stackable: false, acMod: 6,  tlMod: -1, turnDist: 0, pcu: 0, bp: 9  },
    { name: "Mk7 armor",  multBpSize: true, stackable: false, acMod: 7,  tlMod: -1, turnDist: 0, pcu: 0, bp: 12 },
    { name: "Mk8 armor",  multBpSize: true, stackable: false, acMod: 8,  tlMod: -1, turnDist: 0, pcu: 0, bp: 15 },

    { name: "Mk9 armor",  multBpSize: true, stackable: false, acMod: 9,  tlMod: -2, turnDist: 1, pcu: 0, bp: 18 },
    { name: "Mk10 armor", multBpSize: true, stackable: false, acMod: 10, tlMod: -2, turnDist: 1, pcu: 0, bp: 21 },
    { name: "Mk11 armor", multBpSize: true, stackable: false, acMod: 11, tlMod: -2, turnDist: 1, pcu: 0, bp: 25 },

    { name: "Mk12 armor", multBpSize: true, stackable: false, acMod: 12, tlMod: -3, turnDist: 2, pcu: 0, bp: 30 },
    { name: "Mk13 armor", multBpSize: true, stackable: false, acMod: 13, tlMod: -3, turnDist: 2, pcu: 0, bp: 35 },
    { name: "Mk14 armor", multBpSize: true, stackable: false, acMod: 14, tlMod: -3, turnDist: 2, pcu: 0, bp: 40 },

    { name: "Mk15 armor", multBpSize: true, stackable: false, acMod: 15, tlMod: -4, turnDist: 3, pcu: 0, bp: 45 },
];

export const computerList: ComputerPart[] = [
    { name: "Basic computer", multBpSize: false, stackable: false, bonus: [0], nodes: 0, pcu: 0,  bp: 0 },

    { name: "Mk 1 mononode",  multBpSize: false, stackable: false, bonus: [1], nodes: 1, pcu: 10, bp: 1 },
    { name: "Mk 1 duonode",   multBpSize: false, stackable: false, bonus: [1,1], nodes: 2, pcu: 10, bp: 2 },
    { name: "Mk 1 trinode",   multBpSize: false, stackable: false, bonus: [1,1,1], nodes: 3, pcu: 10, bp: 3 },
    { name: "Mk 1 tetranode", multBpSize: false, stackable: false, bonus: [1,1,1,1], nodes: 4, pcu: 10, bp: 3 },

    { name: "Mk 2 mononode",  multBpSize: false, stackable: false, bonus: [2], nodes: 1, pcu: 15, bp: 4 },
    { name: "Mk 2 duonode",   multBpSize: false, stackable: false, bonus: [2,2], nodes: 2, pcu: 15, bp: 8 }
];

export const crewQuartersList: CrewQuartersPart[] = [
    { name: "Common",    multBpSize: false, stackable: true, pcu: 0, bp: 0, description: "Okay" },
    { name: "Good",      multBpSize: false, stackable: true, pcu: 0, bp: 2, description: "Nice" },
    { name: "Luxurious", multBpSize: false, stackable: true, pcu: 0, bp: 5, description: "Sweet"}
];

export const defensiveCountermeasuresList: DefensiveCountermeasuresPart[] = [
    { name: "Mk 1 defenses", multBpSize: false, stackable: false, tlMod: 1, pcu: 1, bp: 2 },
    { name: "Mk 2 defenses", multBpSize: false, stackable: false, tlMod: 2, pcu: 1, bp: 3}
];

export const driftEngineList: DriftEnginePart[] = [
    { name: "Signal Basic",   multBpSize: true, stackable: false, engineRating: 1, maxSize: "colossal", pcu: 75,  bp: 2 },
    { name: "Signal Booster", multBpSize: true, stackable: false, engineRating: 2, maxSize: "huge",     pcu: 100, bp: 5 }
];

export const expansionBayList: ExpansionBayPart[] = [
    { name: "Arcane laboratory", multBpSize: false, stackable: true, pcu: 1, bp: 1, description: "" },
    { name: "Cargo hold", multBpSize: false, stackable: true, pcu: 0, bp: 0, description: "" }
];

