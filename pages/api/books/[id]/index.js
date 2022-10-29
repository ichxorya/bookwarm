import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    
    if (req.method === "GET") {
        const books = await prisma.books.findMany();
        res.status(200).json({ books });
        return res.send(books);
    }
}