import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();

const prisma = new PrismaClient();

router.get("/users", async (request, response) => {
  const users = await prisma.user.findMany();
  response.json(users);
});

export { router };
