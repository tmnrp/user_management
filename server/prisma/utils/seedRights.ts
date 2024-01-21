import { PrismaClient } from '@prisma/client';

//
export const seedRights = async () => {
  const prisma = new PrismaClient();

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
