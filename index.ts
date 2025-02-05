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

    const bodyText = req.body.Body.toLowerCase();
    let targetPorts: number[] = [];

    if (bodyText.includes("balance")) {
        // Send to all ports if the message contains "balance"
        targetPorts = [3001, 3002, 3003, 3004];
    } else if (bodyText.includes("arb") || bodyText.includes("arbitrium")) {
        targetPorts = [3001];
    } else if (bodyText.includes("avalanche") || bodyText.includes("avax")) {
        targetPorts = [3002];
    } else if (bodyText.includes("mode")) {
        targetPorts = [3003];
    } else if (bodyText.includes("sei")) {
        targetPorts = [3004];
    } else {
        // Default case: Send to port 3003
        targetPorts = [3003];
    }

    try {
        const requests = targetPorts.map(port =>
            axios.post(`http://localhost:${port}/api/send-whatsapp`, req.body, {
                headers: req.headers
            })
        );

        await Promise.all(requests);

        res.json({ success: true, message: `Message forwarded to ports: ${targetPorts.join(", ")}` });
    } catch (error) {
        console.error("Failed to forward message:", error);
        res.status(500).json({ success: false, message: "Failed to forward message." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
