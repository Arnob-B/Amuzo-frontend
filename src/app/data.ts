export type productType = {
  pid: number,
  images: Array<string>,
  video: Array<string>,
  reels: Array<string>,
  originalPrice: number,
  category: string,
  currentPrice: number,
  age: number,
  name: string,
  description: string
}
const data: Array<productType> = [
  {
    pid: 201,
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    video: ["video1.mp4", "video2.mp4"],
    reels: ["reel1.mp4", "reel2.mp4"],
    originalPrice: 700,
    currentPrice: 650,
    category: "Warrior",
    age: 3,
    name: "Crimson Knight",
    description: "A valiant knight clad in crimson armor, renowned for his bravery in battle."
  },
  {
    pid: 202,
    images: ["image4.jpg", "image5.jpg", "image6.jpg"],
    video: ["video3.mp4", "video4.mp4"],
    reels: ["reel3.mp4", "reel4.mp4"],
    originalPrice: 800,
    currentPrice: 750,
    category: "Assassin",
    age: 4,
    name: "Nightshade",
    description: "A lethal assassin with unparalleled stealth skills, feared across the land."
  },
  {
    pid: 203,
    images: ["image7.jpg", "image8.jpg", "image9.jpg"],
    video: ["video5.mp4", "video6.mp4"],
    reels: ["reel5.mp4", "reel6.mp4"],
    originalPrice: 650,
    currentPrice: 620,
    category: "Mage",
    age: 2,
    name: "Arcane Sorcerer",
    description: "A master of mystical energies, wielding powerful spells to protect allies."
  },
  {
    pid: 204,
    images: ["image10.jpg", "image11.jpg", "image12.jpg"],
    video: ["video7.mp4", "video8.mp4"],
    reels: ["reel7.mp4", "reel8.mp4"],
    originalPrice: 550,
    currentPrice: 500,
    category: "Archer",
    age: 3,
    name: "Golden Archer",
    description: "An archer with unparalleled accuracy and a golden bow, a symbol of excellence."
  },
  {
    pid: 205,
    images: ["image13.jpg", "image14.jpg", "image15.jpg"],
    video: ["video9.mp4", "video10.mp4"],
    reels: ["reel9.mp4", "reel10.mp4"],
    originalPrice: 900,
    currentPrice: 850,
    category: "Defender",
    age: 5,
    name: "Shield Guardian",
    description: "A stalwart defender with an impenetrable shield, safeguarding his allies."
  }
];
export default data;
