import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DIRECT_URL });
const prisma = new PrismaClient({ adapter });

const categories = [
  { slug: "coding", title: "Coding", img: "/coding.jpg" },
  { slug: "meditation", title: "Meditation", img: "/meditation.jpg" },
  { slug: "stories", title: "Stories", img: "/stories.jpg" },
  { slug: "people", title: "People", img: "/people.jpg" },
  { slug: "events", title: "Events", img: "/events.jpg" },
  { slug: "food", title: "Food", img: "/food.jpg" },
  { slug: "gardening", title: "Gardening", img: "/gardening.jpg" },
];

async function main() {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: category,
      create: category,
    });
  }
  console.log(`Seeded ${categories.length} categories`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
