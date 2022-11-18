import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';


mongoose.connect('mongodb://127.0.0.1:27017')
  .then(() => {console.log('conectado ao mongodb')
  const app = express();
  const port = 3001;


  app.use(express.json());
  app.use(router);

    app.listen(port, () => {
      console.log(`server is runing on https://localhost:${port}`);
    });

})

  .catch(() => console.log('Erro ao conectar ao servidor'));


