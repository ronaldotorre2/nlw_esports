import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const db = new PrismaClient();

app.get('/games', async(request, response) => {
    const games = await db.game.findMany({
        include:{
            _count:{
                select:{
                    anuncio: true
                }
            }
        }
    });

    return response.status(200).json(games);
})

app.get('/game/:id', async(request, response) => {
    const gameId = request.params.id;
    const games = await db.game.findMany({
        where:{id: gameId }
    });
    return response.status(200).json(games);
})

app.listen(3333, () => {
    console.log('Hello!..');
    console.log('eSports Api is runing!');
});