# Migration `20191115112851-init`

This migration has been generated by Akshay Kadam at 11/15/2019, 11:28:51 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "lift"."Joke" (
  "id" TEXT NOT NULL   ,
  "joke" TEXT NOT NULL DEFAULT ''  ,
  PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "lift"."Joke.joke" ON "Joke"("joke")
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration ..20191115112851-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,13 @@
+generator photon {
+  provider = "photonjs"
+}
+
+datasource db {
+  provider = "sqlite"
+  url      = "file:dev.db"
+}
+
+model Joke {
+  id   String @default(cuid()) @id
+  joke String @unique
+}
```

## Photon Usage

You can use a specific Photon built for this migration (20191115112851-init)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20191115112851-init'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
