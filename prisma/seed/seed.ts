import { PrismaClient } from '@prisma/client';
import { seedRole } from './role.seed';
import { seedUser } from './user.seed';

const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });

async function main() {
  // Seed roles
  await seedRole().catch((e) => {
    console.error(e);
    process.exit(1);
  });

  // Seed users
  await seedUser().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

// Run the seed
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
