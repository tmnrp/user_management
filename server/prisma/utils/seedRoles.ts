import { PrismaClient } from '@prisma/client';

//
export const seedRoles = async () => {
  const prisma = new PrismaClient();

  //
  const roles = [
    {
      id: 1,
      name: 'SUPER_ADMIN',
      description: 'Full access',
      rights: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
    },
    {
      id: 2,
      name: 'Admin',
      description: 'Major access',
      rights: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
    {
      id: 3,
      name: 'GUEST',
      description: 'Limited access',
      rights: {
        connect: [{ id: 1 }],
      },
    },
  ];

  //
  console.log('Seeding roles...');

  //
  for (let index = 0; index < roles.length; index++) {
    const role = roles[index];

    //
    const res = await prisma.role.upsert({
      where: { id: index + 1 },
      update: {},
      create: role,
    });

    //
    console.log({ id: index + 1, res });
  }

  //
  console.log('Seeding roles completed!');
};
