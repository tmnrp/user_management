import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

//
export const seedRoles = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  //
  const roles = [
    {
      id: 1,
      name: 'SUPER_ADMIN',
      description: 'Full access',
      rights: {
        connect: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
        ],
      },
    },
    {
      id: 2,
      name: 'ADMIN',
      description: 'Major access',
      rights: {
        connect: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
        ],
      },
    },
    {
      id: 3,
      name: 'GUEST',
      description: 'Limited access',
      rights: {
        connect: [{ id: 1 }, { id: 4 }],
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
