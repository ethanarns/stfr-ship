export type FrameSize = "tiny" | "small" | "medium" | "large" | "huge" | "gargantuan" | "colossal";

// For both AC and TL
const FRAME_ACTL_MOD: Record<FrameSize,number> = {
    tiny: 2,
    small: 1,
    medium: 0,
    large: -1,
    huge: -2,
    gargantuan: -4,
    colossal: -8
};

export interface ManeuverabilityData {
    pilot: number;
    turn: number;
}

export type ManeuverabilityType = "perfect" | "good" | "average" | "poor" | "clumsy";

export const maneuverability: Record<ManeuverabilityType,ManeuverabilityData> = {
    perfect: { pilot: 2, turn: 0 },
    good: { pilot: 1, turn: 1 },
    average: { pilot: 0, turn: 2 },
    poor: { pilot: -1, turn: 3 },
    clumsy: { pilot: -2, turn: 4}
};

export interface ShipFramePart {
    name: ShipFrameType;
    size: FrameSize;
    maneuverability: ManeuverabilityData;
    baseHp: number;
    hpIncrement: number;
    dt: number;
    ct: number;
    expansionBays: number;
    minCrew: number;
    maxCrew: number;
    cost: number;
    weaponMounts: any[];
    actlSizeMod: number;
}

export type ShipFrameType = "racer" | "explorer";
    // "racer" |
    // "interceptor" |
    // "fighter" |
    // "shuttle" |
    // "light freighter" |
    // "explorer" |
    // "transport" |
    // "destroyer" |
    // "heavy freighter" |
    // "bulk freighter" |
    // "cruiser" |
    // "carrier" |
    // "battleship" |
    // "dreadnought";

export const shipFrames: Record<ShipFrameType,ShipFramePart> = {
    racer: {
        name: "racer",
        size: "tiny",
        maneuverability: maneuverability["perfect"],
        baseHp: 20,
        hpIncrement: 5,
        dt: 0,
        ct: 4,
        expansionBays: 0,
        minCrew: 1,
        maxCrew: 1,
        cost: 4,
        weaponMounts: ["asdf"],
        actlSizeMod: FRAME_ACTL_MOD["tiny"]
    },
    explorer: {
        name: "explorer",
        size: "medium",
        maneuverability: maneuverability["good"],//good",
        baseHp: 55,
        hpIncrement: 10,
        dt: 0,
        ct: 11,
        expansionBays: 4,
        minCrew: 1,
        maxCrew: 6,
        cost: 12,
        weaponMounts: ["asdf"],
        actlSizeMod: FRAME_ACTL_MOD["medium"]
    }
}