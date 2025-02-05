import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/send-whatsapp", async (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    try {
        const response = await axios.post("http://localhost:3002/api/send-whatsapp", req.body, {
            headers: req.headers // Forward the same headers
        });

        res.json({ success: true, message: "Message forwarded successfully.", response: response.data });
    } catch (error) {
        console.error("Failed to forward message:", error);
        res.status(500).json({ success: false, message: "Failed to forward message." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
