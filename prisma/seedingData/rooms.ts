import { Prisma} from "@prisma/client"
import  cuid  from 'cuid';

export const roomsData = [
    {
      id: cuid(),
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
    { id: cuid(),
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
      id: cuid(),
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
      id: cuid(),
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
      id: cuid(),
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
      id: cuid(),
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
      id: cuid(),
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
      id: cuid(),
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
      id: cuid(),
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
      id: cuid(),
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
  ]