export type FrameSize = "tiny" | "small" | "medium" | "large" | "huge" | "gargantuan" | "colossal";

export const frameModifier: Record<FrameSize,number> = {
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
    size: FrameSize;
    maneuverability: ManeuverabilityType;
    baseHp: number;
    hpIncrement: number;
    dt: number;
    ct: number;
    expansionBays: number;
    minCrew: number;
    maxCrew: number;
    cost: number;
    weaponMounts: any[];
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
        size: "tiny",
        maneuverability: "perfect",
        baseHp: 20,
        hpIncrement: 5,
        dt: 0,
        ct: 4,
        expansionBays: 0,
        minCrew: 1,
        maxCrew: 1,
        cost: 4,
        weaponMounts: ["asdf"]
    },
    explorer: {
        size: "medium",
        maneuverability: "good",
        baseHp: 55,
        hpIncrement: 10,
        dt: 0,
        ct: 11,
        expansionBays: 4,
        minCrew: 1,
        maxCrew: 6,
        cost: 12,
        weaponMounts: ["asdf"]
    }
}