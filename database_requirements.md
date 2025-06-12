# Database manual for the Nitro Application

## Entities

### AccessLevel enum

- READ
- WRITE

### CarProjectStatus enum

- TODO
- IN_PROGRESS
- DONE

### Role enum

- ADMIN (my account as administrator)
- OWNER (owner of the car)
- VIEWER (someone who has access, but its not the owner)
- SERVICE (service shop)

### BodyType enum

- SEDAN
- COMBI
- LIFTBACK
- HATCHBACK
- SUV
- COUPE
- CABRIOLET
- SMALLCAR
- PICKUP

### FuelType enum

- PETROL
- DIESEL
- HYBRID
- ELECTRIC
- LPG
- CNG
- HYDROGEN

## Reminder enum

- INSURANCE
- CASCO
- HIGHWAY
- STK
- EK
- OIL_CHANGE

### Reminder model

- id String @id @default(cuid())
- user User @relation(fields: [userId], references: [id])
- userId String

- car Car @relation(fields: [carId], references: [id])
- carId String

- type ReminderType
- date DateTime? // napr. platnosť STK do 01.06.2025
- mileage Int? // napr. pripomenúť pri 180000 km
- repeatYearly Boolean @default(false) // napr. olej raz ročne

- notifyBeforeDays Int @default(7) // koľko dní pred koncom poslať upozornenie

- createdAt DateTime @default(now())
- updatedAt DateTime @updatedAt

### User model

- id String @id @default(cuid()) // interné ID
- clerkId String @unique // ID z Clerka
- email String @unique
- role Role @default(OWNER) // enum
- createdAt DateTime @default(now())

- notifyBeforeInsuranceDays Int @default(7)
- notifyBeforeCascoDays Int @default(7)
- notifyBeforeHighwayStickerDays Int @default(7)
- notifyBeforeStkDays Int @default(30)
- notifyBeforeEkDays Int @default(30)

- pushToken String? // Expo push token (alebo FCM)

**Relations**

- cars Car[] @relation("OwnedCars")
- sharedAccesses SharedAccess[]
- reminders Reminder[]

### CarProject model

- id String @id @default(cuid())
- car Car @relation(fields: [carId], references: [id])
- carId String

- name String
- description String?
- status ProjectStatus @default(TODO)

- totalCost Float @default(0)
- links String[] // array of URLs

- items ProjectItem[]

- createdAt DateTime @default(now())
- updatedAt DateTime @updatedAt

### ProjectItem

- id String @id @default(cuid())
- project Project @relation(fields: [projectId], references: [id])
- projectId String

- name String // napr. „Spojka SACHS“
- price Float
- quantity Int @default(1)
- link String? // odkaz na diel

createdAt DateTime @default(now())

### Car model

- id String @id @default(uuid()) @db.Uuid
- ownerId String @map("user_id") // pôvodné userId
- owner User @relation(fields: [ownerId], references: [id], onDelete: Cascade)

- brand String @db.VarChar(128) // napr. "Škoda"
- model String @db.VarChar(128) // napr. "Octavia"
- bodyType BodyType?
- fuelType FuelType?
- engine Float? // napr. 2.0
- yearOfProduction Int?
- kilometers Int @default(0)
- buyingPrice Float @default(0)

- vinNumber String? @db.Char(17)
- spzNumber String? @db.Char(7)
- fullName String @db.VarChar(255) // "Škoda Octavia Combi"
- imageUrl String? @db.VarChar(255)

- createdAt DateTime @default(now()) @db.Timestamptz()
- editedAt DateTime?

**Relations**

- serviceRecords ServiceRecord[]
- sharedAccesses SharedAccess[] // kto má zdieľaný prístup
- reminders Reminder[]
- projects Project[]

- @@map("cars")

### SharedAccess model

- id String @id @default(cuid())
- car Car @relation(fields: [carId], references: [id])
- carId String
- user User @relation(fields: [userId], references: [id])
- userId String
- createdAt DateTime @default(now())
- @@unique([carId, userId])
- accessLevel AccessLevel @default(READ)
