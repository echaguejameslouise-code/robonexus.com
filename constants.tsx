
import { Category, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'c1',
    name: 'ExoBuild M1 Masonry Robot',
    category: Category.CONSTRUCTION,
    price: 45000,
    description: 'An autonomous brick-laying system designed for rapid structural development with precision down to the millimeter.',
    features: ['Autonomous pathing', 'Precision laying', 'Weather resistant'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    specs: { 'Speed': '500 bricks/hr', 'Accuracy': '±1mm', 'Power': 'Industrial Battery' }
  },
  {
    id: 'c2',
    name: 'Atlas Paving Drone',
    category: Category.CONSTRUCTION,
    price: 32000,
    description: 'Autonomous surface finisher for large concrete slabs. Drastically reduces manual labor and improves surface quality.',
    features: ['LiDAR scanning', 'Self-leveling', 'Remote monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    specs: { 'Coverage': '2000sqft/hr', 'Battery': '8 hours', 'Weight': '120kg' }
  },
  {
    id: 'a1',
    name: 'AgriScan Harvest Pro',
    category: Category.AGRICULTURE,
    price: 28500,
    description: 'Intelligent fruit and vegetable harvester with computer vision to identify ripeness and handle delicate crops.',
    features: ['Soft-touch grip', 'Ripeness detection', 'Solar powered'],
    imageUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800',
    specs: { 'Payload': '15kg', 'Vision': '4K HDR', 'Drive': '4WD Electric' }
  },
  {
    id: 'a2',
    name: 'SeedBot Precision Planter',
    category: Category.AGRICULTURE,
    price: 15900,
    description: 'Small autonomous fleet unit for high-precision seed placement and soil health analysis.',
    features: ['GPS/RTK Precision', 'Soil mapping', 'Swarm capable'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    specs: { 'GPS': 'CM level accuracy', 'Depth': 'Adjustable 1-10cm', 'Communication': 'LoRaWAN' }
  },
  {
    id: 'e1',
    name: 'RoboLearn Arduino Ultimate Kit',
    category: Category.ARDUINO,
    price: 199,
    description: 'Everything you need to build your first 10 robots. Includes Arduino Mega, sensors, motors, and full curriculum.',
    features: ['30+ Projects', 'Step-by-step videos', 'No soldering required'],
    imageUrl: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=800',
    specs: { 'Board': 'Arduino Mega 2560', 'Modules': '60+', 'Level': 'Beginner to Advanced' }
  },
  {
    id: 'e2',
    name: 'SpiderBot Hexapod Kit',
    category: Category.ARDUINO,
    price: 249,
    description: 'A 6-legged walking robot kit based on Arduino. Perfect for learning inverse kinematics and complex locomotion.',
    features: ['18 Servos', 'Bluetooth control', 'C++ Source code'],
    imageUrl: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800',
    specs: { 'Controller': 'Arduino Uno Compatible', 'Body': 'Aluminum Alloy', 'Legs': '6' }
  },
  {
    id: 'e3',
    name: 'IoT Weather Station Kit',
    category: Category.ARDUINO,
    price: 129,
    description: 'Build a cloud-connected weather monitoring system. Teaches sensor integration and data visualization.',
    features: ['Real-time cloud', 'Mobile App', 'Solar support'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    specs: { 'Sensors': 'Temp, Hum, Pres, UV', 'Connectivity': 'Wi-Fi / ESP32', 'Power': 'MicroUSB' }
  }
];
