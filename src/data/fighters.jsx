import f22 from "../assets/Images/F22-Raptor.avif";
import f35 from "../assets/Images/F-35.jpg";
import f15ex from "../assets/Images/F-15EX.jpg";
import f18 from "../assets/Images/F-18.jpg";
import su57 from "../assets/Images/Su-57.jpg";
import mig35 from "../assets/Images/Mig-35.jpg";
import j20 from "../assets/Images/J-20.jpg";
import rafale from "../assets/Images/Rafale.jpg";
import eurofighter from "../assets/Images/eurofighter-typhoon.jpg";
import gripen from "../assets/Images/F39-E.avif";

export const fighters = [
  {
    id: 1,
    name: "F-22 Raptor",
    country: "United States",
    generation: "5th Generation",
    role: "Air Superiority",
    manufacturer: "Lockheed Martin",
    speed: "Mach 2.25",
    image: f22,

    description:
      "The F-22 Raptor is considered one of the most advanced air superiority fighters ever built. Combining stealth technology, supercruise capability, advanced avionics and unmatched maneuverability, it was designed to dominate enemy aircraft before being detected. Its integrated sensor suite provides exceptional situational awareness and allows pilots to engage threats at long distances.",

    firstFlight: "1997",
    introduced: "2005",
  },

  {
    id: 2,
    name: "F-35 Lightning II",
    country: "United States",
    generation: "5th Generation",
    role: "Multirole",
    manufacturer: "Lockheed Martin",
    speed: "Mach 1.6",
    image: f35,

    description:
      "The F-35 Lightning II is a family of stealth multirole fighters developed to perform air superiority, strike missions, intelligence gathering and electronic warfare. Its advanced sensor fusion technology provides pilots with a complete picture of the battlefield, making it one of the most connected combat aircraft ever developed.",

    firstFlight: "2006",
    introduced: "2015",
  },

  {
    id: 3,
    name: "F-15EX Eagle II",
    country: "United States",
    generation: "4.5 Generation",
    role: "Air Superiority",
    manufacturer: "Boeing",
    speed: "Mach 2.5",
    image: f15ex,

    description:
      "The F-15EX Eagle II represents the latest evolution of the legendary F-15 platform. Featuring a modern cockpit, powerful radar systems and increased weapons capacity, it combines proven performance with modern technology to remain relevant in future combat environments.",

    firstFlight: "2021",
    introduced: "2024",
  },

  {
    id: 4,
    name: "F/A-18 Super Hornet",
    country: "United States",
    generation: "4.5 Generation",
    role: "Carrier-Based Multirole",
    manufacturer: "Boeing",
    speed: "Mach 1.8",
    image: f18,

    description:
      "The F/A-18 Super Hornet serves as the backbone of United States Navy carrier aviation. Designed for both air-to-air and air-to-ground missions, it offers flexibility, reliability and operational effectiveness in a wide range of combat scenarios.",

    firstFlight: "1995",
    introduced: "1999",
  },

  {
    id: 5,
    name: "Su-57 Felon",
    country: "Russia",
    generation: "5th Generation",
    role: "Stealth Fighter",
    manufacturer: "Sukhoi",
    speed: "Mach 2.0",
    image: su57,

    description:
      "The Su-57 is Russia's first operational stealth fighter. It combines advanced maneuverability, reduced radar signature and modern avionics. The aircraft was designed to compete with Western fifth-generation fighters while maintaining strong aerodynamic performance.",

    firstFlight: "2010",
    introduced: "2020",
  },

  {
    id: 6,
    name: "MiG-35",
    country: "Russia",
    generation: "4.5 Generation",
    role: "Multirole",
    manufacturer: "Mikoyan",
    speed: "Mach 2.25",
    image: mig35,

    description:
      "The MiG-35 is an advanced derivative of the MiG-29 family. Equipped with modern radar systems, electronic warfare capabilities and precision-guided weapon integration, it offers improved versatility and survivability over previous variants.",

    firstFlight: "2016",
    introduced: "2019",
  },

  {
    id: 7,
    name: "J-20 Mighty Dragon",
    country: "China",
    generation: "5th Generation",
    role: "Stealth Fighter",
    manufacturer: "Chengdu Aerospace",
    speed: "Mach 2.0",
    image: j20,

    description:
      "The J-20 Mighty Dragon is China's premier stealth fighter. Designed with long-range missions and advanced sensor capabilities in mind, it represents a major step forward in China's military aviation industry.",

    firstFlight: "2011",
    introduced: "2017",
  },

  {
    id: 8,
    name: "Dassault Rafale",
    country: "France",
    generation: "4.5 Generation",
    role: "Multirole",
    manufacturer: "Dassault Aviation",
    speed: "Mach 1.8",
    image: rafale,

    description:
      "The Rafale is a highly versatile combat aircraft capable of air superiority, ground attack, reconnaissance and nuclear deterrence missions. Its adaptability and combat record have made it one of the most respected fighters in service today.",

    firstFlight: "1986",
    introduced: "2001",
  },

  {
    id: 9,
    name: "Eurofighter Typhoon",
    country: "Europe",
    generation: "4.5 Generation",
    role: "Air Superiority",
    manufacturer: "Eurofighter GmbH",
    speed: "Mach 2.0",
    image: eurofighter,

    description:
      "The Eurofighter Typhoon is a twin-engine multirole fighter developed by a European consortium. Renowned for its agility and high-performance capabilities, it serves as a cornerstone of several European air forces.",

    firstFlight: "1994",
    introduced: "2003",
  },

  {
    id: 10,
    name: "Gripen E",
    country: "Sweden",
    generation: "4.5 Generation",
    role: "Multirole",
    manufacturer: "Saab",
    speed: "Mach 2.0",
    image: gripen,

    description:
      "The Gripen E is the latest generation of Saab's lightweight fighter family. It combines advanced avionics, low operational costs and modern combat capabilities, making it attractive for countries seeking a cost-effective yet capable fighter platform.",

    firstFlight: "2017",
    introduced: "2021",
  },
];
