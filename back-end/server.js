const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 4000;

// Use the cors middleware to allow all origins
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample data
const items = [
  { id: 1, name: 'Sample Item 1' },
  { id: 2, name: 'Sample Item 2' },
  { id: 3, name: 'Sample Item 3' }
];

//Endpoint for connection check
app.get('/api/check', async (req, res) => {
  const marketID = req.query.match_id;

  // console.log("check response: ", response)
  try {
    const response = await axios.get(`http://142.93.36.1/api/v1/score?match_id=28569726`);
    // console.log("Response check : ", response)
    res.json(response.data);
  } catch (error) {
    // console.log("Response check : ", error)
    res.status(500).json({ error: 'An error occurred while fetching data.', error });
  }
});


// Custom endpoint for /fetch_data
app.get('/api/v1/fetch_data', async (req, res) => {
  const action = req.query.Action;
  const eventTypeID = req.query.EventTypeID;
  const competitionID = req.query.CompetitionID;
  const EventID = req.query.EventID;
  const MarketID = req.query.MarketID;

  try {
    let url = 'http://142.93.36.1/api/v1/fetch_data?Action=' + action;

    // Add query parameters if provided
    if (eventTypeID) {
      url += `&EventTypeID=${eventTypeID}`;
    }
    if (competitionID) {
      url += `&CompetitionID=${competitionID}`;
    }
    if (EventID) {
      url += `&EventID=${EventID}`;
    }
    if (MarketID) {
      url += `&MarketID=${MarketID}`;
    }
    console.log("Fetch Data API Endpoint")
    console.log(url)
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data. b' });
  }
});

// Custom endpoint for /listMarketBookOdds
app.get('/api/v1/listMarketBookOdds', async (req, res) => {
  const marketID = req.query.market_id;

  try {
    const response = await axios.get(`http://142.93.36.1/api/v1/listMarketBookOdds?market_id=${marketID}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data. c' });
  }
});

// Custom endpoint for /listMarketBookSession
app.get('/api/v1/listMarketBookSession', async (req, res) => {
  const matchID = req.query.match_id;

  try {
    const response = await axios.get(`http://142.93.36.1/api/v1/listMarketBookSession?match_id=${matchID}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data. c' });
  }
});


// Custom endpoint for /score
app.get('/api/v1/score', async (req, res) => {
  const matchID = req.query.match_id;

  try {
    const response = await axios.get(`http://142.93.36.1/api/v1/score?match_id=${matchID}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data. d' });
  }
});

// The Scorecard APIs 

// 1. Match List
app.get('/api/matches/list', async (req, res) => {
  try {
    const response = await axios.get('http://167.99.198.2/api/matches/list');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data. d' });
  }
});

//2. Match Match Score
app.get('/api/matches/score/:match_id', async (req, res) => {
  const matchID = req.params.match_id;
  // const matchID = 5996;
  // console.log(req.query)
  try {
    const response = await axios.get(`http://167.99.198.2/api/matches/score/${matchID}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data. d' });
  }
});


// 1. Sport URL
// app.get('/api/sport', async (req, res) => {
//   try {
//     // Fetch data from a third-party API (e.g., JSONPlaceholder)
//     const response = await axios.get('http://142.93.36.1/api/v1/fetch_data?Action=listEventTypes');

//     // Extract the relevant data
//     const data = response.data;

//     // Combine your sample data with third-party data
//     // const combinedData = [...items, ...thirdPartyData];

//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch data from the third-party API, e' });
//   }
// });



// app.get('/api/items', async (req, res) => {
//   try {
//     // Fetch data from a third-party API (e.g., JSONPlaceholder)
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

//     // Extract the relevant data
//     const thirdPartyData = response.data;

//     // Combine your sample data with third-party data
//     const combinedData = [...items, ...thirdPartyData];

//     res.json(combinedData);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch data from the third-party API, f' });
//   }
// });
// // 2. Fetch series as per sport
// app.get('/api/series', async (req, res) => {
//     try {
//       // Fetch data from a third-party API (e.g., JSONPlaceholder)
//       const response = await axios.get('http://142.93.36.1/api/v1/fetch_data?Action=listEventTypes');

//       // Extract the relevant data
//       const data = response.data;

//       // Combine your sample data with third-party data
//       // const combinedData = [...items, ...thirdPartyData];

//       res.json(data);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch data from the third-party API' });
//     }
//   });


// // http://167.99.198.2
// app.get('/api/sport', async (req, res) => {
//     try {
//       // Fetch data from a third-party API (e.g., JSONPlaceholder)
//       const response = await axios.get('http://167.99.198.2/api/******');

//       // Extract the relevant data
//       const data = response.data;

//       // Combine your sample data with third-party data
//       // const combinedData = [...items, ...thirdPartyData];

//       res.json(data);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch data from the third-party API' });
//     }
//   });

// Add an item
// app.post('/api/items', (req, res) => {
//   const newItem = req.body;
//   items.push(newItem);
//   res.status(201).json(newItem);
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
