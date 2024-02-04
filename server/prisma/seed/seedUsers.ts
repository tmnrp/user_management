import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

//
export const seedUsers = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  //
  console.log('Creating super user');
  const resSuper = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      firstName: 'Super',
      lastName: 'User',
      phoneNumber: '001',
    },
  });
  console.log('Created super user', resSuper);

  //
  console.log('Creating admin user');
  const resAdmin = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      firstName: 'Admin',
      lastName: 'User',
      phoneNumber: '002',
    },
  });
  console.log('Created admin user', resAdmin);

  //
  console.log('Seeding users...');
  const changeLogs = [
    {
      id: 1,
      createdByUserId: 1,
      createdAt: new Date(),
    },
    {
      id: 2,
      createdByUserId: 1,
      createdAt: new Date(),
    },
  ];

  const users = [
    {
      id: 10,
      firstName: 'Tony',
      lastName: 'Martin',
      phoneNumber: '10',
      changeLogId: 1,
    },
    {
      id: 11,
      firstName: 'Mahek',
      lastName: 'Iyer',
      phoneNumber: '11',
      changeLogId: 2,
    },
  ];

  //
  if (changeLogs.length === users.length) {
    for (let index = 0; index < changeLogs.length; index++) {
      const changeLog = changeLogs[index];
      const user = users[index];

      //
      console.log('Creating log entry');
      const resChangeLog = await prisma.changeLog.upsert({
        where: { id: changeLog.id },
        update: {},
        create: changeLog,
      });
      console.log('Created log entry', resChangeLog);

      //
      console.log('Creating user entry');
      const resUser = await prisma.user.upsert({
        where: { id: user.id },
        update: {},
        create: user,
      });
      console.log('Created user entry', resUser);
    }
  } else {
    console.log('Change logs length do not match with users length');
  }

  //
  console.log('Seeding rights completed!');
};
