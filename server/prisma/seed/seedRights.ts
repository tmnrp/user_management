import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

//
export const seedRights = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  //
  const rights = [
    {
      id: 1,
      name: 'RIGHTS_API_READ',
      description: 'Provides access to read rights data',
    },
    {
      id: 2,
      name: 'RIGHTS_API_CREATE',
      description: 'Provides access to create a new right',
    },
    {
      id: 3,
      name: 'RIGHTS_API_UPDATE',
      description: 'Provides access to update rights',
    },
    {
      id: 4,
      name: 'RIGHTS_API_DELETE',
      description: 'Provides access to delete a rights',
    },
    // --------------------------------------------------
    {
      id: 5,
      name: 'ROLES_API_READ',
      description: 'Provides access to read roles data',
    },
    {
      id: 6,
      name: 'ROLES_API_CREATE',
      description: 'Provides access to create a new role',
    },
    {
      id: 7,
      name: 'ROLES_API_UPDATE',
      description: 'Provides access to update roles',
    },
    {
      id: 8,
      name: 'ROLES_API_DELETE',
      description: 'Provides access to delete a roles',
    },
  ];

  //
  console.log('Seeding rights...');

  //
  for (let index = 0; index < rights.length; index++) {
    const right = rights[index];

    //
    const res = await prisma.right.upsert({
      where: { id: index + 1 },
      update: {},
      create: right,
    });

    //
    console.log({ id: index + 1, res });
  }

  //
  console.log('Seeding rights completed!');
};
