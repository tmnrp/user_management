import { PrismaClient } from '@prisma/client';
import { seedUsers } from '.';
const prisma = new PrismaClient();

//
async function main() {
  await seedUsers(prisma);
  // await seedRights(prisma);
  // await seedRoles(prisma);
}

//
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
