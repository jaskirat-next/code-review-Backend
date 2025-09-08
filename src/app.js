const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Backend deployed successfully on Vercel!');
});

app.use('/ai', aiRoutes);

module.exports = app;
