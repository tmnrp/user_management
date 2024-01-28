import { PrismaClient } from '@prisma/client';
import { seedRights, seedRoles } from './utils';
const prisma = new PrismaClient();

//
async function main() {
  await seedRights(prisma);
  await seedRoles(prisma);
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
