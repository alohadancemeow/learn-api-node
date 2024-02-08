# Learn Node.ts + Prisma 2024

### Setup node

```bash
# initialize node
npm init -y

# install node & express
npm i -D @types/node @types/express
```

### Setup typescript

```bash
# install ts & initialize
npm i -D typescript ts-node
npx tsc --init
```

### Setup Prisma
```bash
# install prisma
npm install prisma --save-dev

# initialize prisma with sqlite database
npx prisma init --datasource-provider sqlite
```

### Running TypeScript in Node with ts-node

```bash
npx ts-node index.ts
```

### Watching file changes

```bash
npm i -D nodemon
```

### Project Structure
```
▁
learn-api-node
├── package-lock.json
├── package.json
├── prisma
|  ├── dev.db
|  ├── migrations
|  |  ├── 20240126071526_init
|  |  └── migration_lock.toml
|  ├── schema.prisma
|  └── seed.ts
├── README.md
├── src
|  ├── controllers
|  |  └── product.controller.ts
|  ├── index.ts
|  ├── lib
|  |  └── db.ts
|  └── routes
|     └── product.router.ts
└── tsconfig.json
```

