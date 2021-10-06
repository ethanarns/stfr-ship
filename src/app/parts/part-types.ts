import { BasePart } from "./base-part";
import { FrameSize } from "./frames";

export type Range = "Short" | "Medium" | "Long";

export interface ThrusterPart extends BasePart {
    frameSize: FrameSize;
    speed: number;
    pilotMod: number;
}

export interface ArmorPart extends BasePart {
    acMod: number;
    tlMod: number;
    turnDist: number;
}

export interface ComputerPart extends BasePart {
    bonus: number[];
    nodes: number;
}

export interface CrewQuartersPart extends BasePart {
    description: string;
}

export interface DefensiveCountermeasuresPart extends BasePart {
    tlMod: number;
}

export interface DriftEnginePart extends BasePart {
    engineRating: number;
    maxSize: FrameSize;
}

export interface ExpansionBayPart extends BasePart {
    description: string;
}

export interface SecurityPart extends BasePart {
    description: string;
}

export interface SensorsPart extends BasePart {
    range: Range;
    mod: number;
}

export interface ShieldsPart extends BasePart {
    totalSp: number;
    regenMin: number;
}

export type SpecialWeaponProperty =
    "Line" |
    "Limited fire 5" |
    "Ripper" |
    "Array" |
    "EMP" |
    "Broad arc" |
    "Vortex" |
    "Quantum" |
    "Irradiate" |
    "Tractor beam" |
    "Point";
export interface WeaponPart extends BasePart {
    range: Range;
    hexSpeed: number;
    damage: string;
    specialProperties: SpecialWeaponProperty[];
}