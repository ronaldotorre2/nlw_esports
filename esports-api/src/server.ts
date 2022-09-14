import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.status(200).json();
})

app.listen(3333, () => {
    console.log('Hello!..');
    console.log('Api is runing!');
});