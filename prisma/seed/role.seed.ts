import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedRole() {
  const roles = ['ADMIN', 'USER']; // Liste des rôles à créer ou mettre à jour

  for (const roleName of roles) {
    try {
      await prisma.role.upsert({
        where: { name: roleName },
        update: {
          name: roleName,
        },
        create: {
          name: roleName,
        },
      });
    } catch (error) {
      console.error(`Erreur lors de l'upsert du rôle ${roleName}:`, error);
    }
  }
}
