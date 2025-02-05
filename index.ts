import express from 'express';
import bodyParser from 'body-parser';
import twilio from 'twilio';
import axios from 'axios';

require('dotenv').config();
const app = express();
app.use(bodyParser.json()); // for parsing application/json

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.post("/api/send-whatsapp", async (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    const from = req.body.From;
    let body = req.body.Body;
    console.log("Received message:", body);

    let port;
    if (body.toLowerCase().includes("mode")) {
        port = 3004;
    } else if (body.toLowerCase().includes("avalanche")) {
        port = 3002;
    } else if (body.toLowerCase().includes("sui")) {
        port = 3001;
    } else {
        port = 3003;
    }

    if (port) {
        try {
            await axios.post(`http://localhost:${port}`, { message: body });
            console.log(`Forwarded message to port ${port}`);
        } catch (error) {
            console.error("Failed to forward message:", error);
        }
    }

    try {
        const message = await twilioClient.messages.create({
            to: `${from}`,
            from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
            body: body
        });
        res.json({ success: true, message: "Message sent.", sid: message.sid });
    } catch (error) {
        console.error("Failed to send message:", error);
        res.status(500).json({ success: false, message: "Failed to send message." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
