import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Vytvorenie používateľa
  const user = await prisma.user.create({
    data: {
      clerkId: 'clerk_test_123',
      email: 'test@example.com',
    },
  })

  // Auto
  const car = await prisma.car.create({
    data: {
      ownerId: user.id,
      brand: 'Škoda',
      model: 'Octavia',
      fullName: 'Škoda Octavia 2.0 TDI',
      yearOfProduction: 2015,
      kilometers: 187000,
    },
  })

  // Servisný záznam
  const serviceRecord = await prisma.serviceRecord.create({
    data: {
      carId: car.id,
      serviceType: 'Výmena oleja a filtrov',
      date: new Date('2024-06-01'),
      cost: 180.0,
      description: 'Kompletná výmena oleja, vzduchového a peľového filtra',
    },
  })

  // Diely (ServicePart)
  await prisma.servicePart.createMany({
    data: [
      {
        serviceRecordId: serviceRecord.id,
        name: 'Olej Castrol 5W-30',
        brand: 'Castrol',
        unitPrice: 45.0,
        quantity: 1,
        note: '5 litrové balenie',
      },
      {
        serviceRecordId: serviceRecord.id,
        name: 'Vzduchový filter',
        brand: 'Mann',
        unitPrice: 18.0,
        quantity: 1,
      },
    ],
  })

  // Reminder
  await prisma.reminder.create({
    data: {
      userId: user.id,
      carId: car.id,
      date: new Date('2025-01-01'),
      mileage: 195000,
      type: 'OIL_CHANGE',
    },
  })
}

main()
  .then(() => {
    console.log('🌱 Seed hotový.')
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
