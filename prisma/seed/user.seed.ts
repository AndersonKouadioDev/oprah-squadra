import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

export async function seedUser() {
  const users = [
    {
      username: 'admin',
      email: 'admin@example.com',
      firstname: 'John',
      lastname: 'Doe',
      password: 'Admin123',
      roleId: 1,
    },
    {
      username: 'user1',
      email: 'user1@example.com',
      firstname: 'Daniel',
      lastname: 'Dupont',
      password: 'User123',
      roleId: 2,
    },
    {
      username: 'moderator1',
      email: 'moderator1@example.com',
      firstname: 'Michel',
      lastname: 'Tremblay',
      password: 'Moderator123',
      roleId: 2,
    },
  ];

  for (const user of users) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);

      await prisma.user.upsert({
        where: { email: user.email },
        update: {
          ...user,
          password: hashedPassword,
          roleId: user.roleId ?? undefined,
        },
        create: {
          ...user,
          password: hashedPassword,
          roleId: user.roleId ?? undefined,
        },
      });
    } catch (error) {
      console.error(
        `Erreur lors de l'upsert de l'utilisateur ${user.email}:`,
        error,
      );
    }
  }
}
