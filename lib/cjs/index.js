"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const speed_velocity_1 = __importDefault(require("./mechanics/speed-velocity"));
const Mechanics = {
    SpeedVelocity: speed_velocity_1.default,
};
exports.default = {
    Mechanics,
};
