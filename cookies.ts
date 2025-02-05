import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3005;

// Add your API key here
const API_KEY = process.env.COOKIE_KEY;
const BASE_URL = 'https://api.cookie.fun/v2/agents';

// Utility function for making API requests
const fetchAgentData = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'x-api-key': API_KEY,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:",error);
    throw new Error("Failed to fetch data");
  }
};

// Get agent data by Twitter username
app.get('/api/agents/twitter/:twitterUsername', async (req, res) => {
  const { twitterUsername } = req.params;
  const { interval = '_7Days' } = req.query;

  const url = `${BASE_URL}/twitterUsername/${twitterUsername}?interval=${interval}`;
  try {
    const agentData = await fetchAgentData(url);
    res.json(agentData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Get agent data by contract address
app.get('/api/agents/contract/:contractAddress', async (req, res) => {
  const { contractAddress } = req.params;
  const { interval = '_7Days' } = req.query;

  const url = `${BASE_URL}/contractAddress/${contractAddress}?interval=${interval}`;
  try {
    const agentData = await fetchAgentData(url);
    res.json(agentData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Get paged agent data
app.get('/api/agents/paged', async (req, res) => {
  const { interval = '_7Days', page = 1, pageSize = 25 } = req.query;
  
  const url = `${BASE_URL}/agentsPaged?interval=${interval}&page=${page}&pageSize=${pageSize}`;
  try {
    const agentData = await fetchAgentData(url);
    res.json(agentData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
