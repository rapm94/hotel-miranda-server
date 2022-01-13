"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsData = void 0;
const cuid_1 = __importDefault(require("cuid"));
exports.roomsData = [
    {
        id: (0, cuid_1.default)(),
        name: "Alley",
        price: 285,
        status: false,
        facilities: [
            "Excavator",
            "Compactor",
            "Grader"
        ],
        bedType: "King",
        offerPrice: null
    },
    { id: (0, cuid_1.default)(),
        name: "Hill",
        price: 111,
        status: true,
        facilities: [
            "Bulldozer",
            "Trencher",
            "Compactor"
        ],
        bedType: "King",
        offerPrice: 130
    },
    {
        id: (0, cuid_1.default)(),
        name: "Terrace",
        price: 258,
        status: true,
        facilities: [
            "Backhoe",
            "Bulldozer",
            "Excavator"
        ],
        bedType: "King",
        offerPrice: 147
    },
    {
        id: (0, cuid_1.default)(),
        name: "Center",
        price: 250,
        status: true,
        facilities: [
            "Excavator",
            "Dump Truck",
            "Scraper"
        ],
        bedType: "Double",
        offerPrice: 127
    },
    {
        id: (0, cuid_1.default)(),
        name: "Crossing",
        price: 214,
        status: false,
        facilities: [
            "Excavator",
            "Dump Truck",
            "Trencher"
        ],
        bedType: "Queen",
        offerPrice: null
    },
    {
        id: (0, cuid_1.default)(),
        name: "Point",
        price: 131,
        status: true,
        facilities: [
            "Bulldozer",
            "Bulldozer",
            "Grader"
        ],
        bedType: "Double",
        offerPrice: 54
    },
    {
        id: (0, cuid_1.default)(),
        name: "Circle",
        price: 151,
        status: false,
        facilities: [
            "Scraper",
            "Compactor",
            "Dump Truck"
        ],
        bedType: "Double",
        offerPrice: 64
    },
    {
        id: (0, cuid_1.default)(),
        name: "Drive",
        price: 295,
        status: true,
        facilities: [
            "Dragline",
            "Crawler",
            "Crawler"
        ],
        bedType: "Queen",
        offerPrice: null
    },
    {
        id: (0, cuid_1.default)(),
        name: "Circle",
        price: 244,
        status: true,
        facilities: [
            "Excavator",
            "Scraper",
            "Scraper"
        ],
        bedType: "Queen",
        offerPrice: 104
    },
    {
        id: (0, cuid_1.default)(),
        name: "Parkway",
        price: 127,
        status: true,
        facilities: [
            "Grader",
            "Trencher",
            "Crawler"
        ],
        bedType: "Queen",
        offerPrice: null
    }
];
