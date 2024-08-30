import express from 'express';
import mongoose from 'mongoose';
import {LinkMutation} from "../types";
import Link from "../models/Link";

const linksRouter = express.Router();

linksRouter.get('/info/:shortUrl', async (req, res, next) => {
  try {
    const { shortUrl } = req.params;

    const link = await Link.findOne({ shortUrl });

    if (!link) {
      return res.status(404).send({ error: 'Link info not found!' });
    }

    return res.send(link);
  } catch (error) {
    return next(error);
  }
});

linksRouter.get('/:shortUrl', async (req, res, next) => {
  try {
    const { shortUrl } = req.params;

    const link = await Link.findOne({ shortUrl });

    if (!link) {
      return res.status(404).send({ error: 'Link shortUrl not found!' });
    }

    return res.redirect(link.originalUrl);
  } catch (error) {
    return next(error);
  }
});

// app.get('/my-link/:id',(req,res)=>{
//   const id = req.params.id;
//   //find your link in database by id
//   return res.status(301).redirect('https://youtube.com');
// });

const createRandomId = () => {
  let random_id = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < 7; i++) {
    random_id += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return random_id;
}

linksRouter.post('/', async (req, res,next) => {
  try {
    const { originalUrl} = req.body;
    console.log('Received originalUrl:', originalUrl);
    if (!originalUrl) {
      return res.status(400).send({ error: 'originalUrl is required!' });
    }

    let shortUrl;
    do {
      shortUrl = createRandomId();
      const link = await Link.findOne({ shortUrl });
      if (!link) break;
    } while (true);

    const linkMutation: LinkMutation = {
      originalUrl,
      shortUrl,
    };

    const link = new Link (linkMutation);
    await link.save();

    return res.send(link);
  } catch (error){
    if (error instanceof mongoose.Error.ValidationError){
      return res.status(400).send(error);
    }
    return next(error);
  }
});

export default linksRouter;
