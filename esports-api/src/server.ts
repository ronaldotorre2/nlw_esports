import express, { response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

app.use(express.json());

const db = new PrismaClient({
    log: ['query']
});

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

    if(games != null) {
        return response.status(200).json(games);
    }
    else {
        return response.status(204).json();
    }
});

app.get('/game/:id', async(request, response) => {
    const gameId = request.params.id;

    if (parseInt(gameId) > 0) {
        const games = await db.game.findMany({
            where:{id: gameId }
        });

        if(games != null) {
            return response.status(200).json(games);
        }
        else {
            return response.status(204).json();
        }
    }
    else {
        return response.status(404).json();
    }
});

app.post('/game', async(request, response) => {
   //TODO to implement create of game
});

app.put('/game', async(request, response) => {
    //TODO to implement update of game
});


app.get('/anuncios', async(request, response) => {
    const anuncios = await db.anuncio.findMany();

    if(anuncios.length > 0) {
        return response.status(200).json(anuncios);
    }
    else {
        return response.status(204).json();
    }
});

app.get('/anuncio/:discord', async(request, response) => {
    const discord = request.params.discord;

    if(discord != null) {
        const anuncio = await db.anuncio.findMany({
            where:{discord: discord }
        });

        if(anuncio != null) {
            return response.status(200).json(anuncio);
        }
        else {
            return response.status(204).json();
        }
    }
    else {
        return response.status(404).json();
    }
});

app.post('/anuncio', async(request, response) => {
    const anuncio = request.body;
    
    if(anuncio != null 
       && anuncio.name != null && anuncio.name != '' 
      ) {
        const ad = await db.anuncio.create(anuncio);
        console.log(ad);
        return response.status(201).json(anuncio);
    }
    else {
        return response.status(404).json();
    }
 });
 
 app.put('/anuncio', async(request, response) => {
     //TODO to implement update of anuncio
 });
 

app.listen(3333, () => {
    console.log('Hello!..');
    console.log('eSports Api is runing!...');
});