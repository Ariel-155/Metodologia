import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema-products.prisma",
 
  migrations: {
    path: "prisma/migrations/products",
  },
  datasource: {
    url: env("DATABASE_URL_PRODUCT"),
  },
});
