import  dotenv from 'dotenv';
dotenv.config();

import express from "express";
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();


const api_key =process.env.API_KEY;
const api_secret =process.env.API_SECRET;

router.post("/create", async (req, res) => {
  try {
    const { userInvite } = req.body;
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const randomChannelId = uuidv4();
    const channel = serverClient.channel("game", randomChannelId);
    await channel.create();
    await channel.inviteMembers([userInvite]);
    res.json({ randomChannelName });
  } catch (error) {
    res.json(error);
  }
});
export {router}