const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/api/test', (req, res) => {
  res.json({ message: 'API working' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


