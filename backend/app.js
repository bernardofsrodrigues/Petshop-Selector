const express = require('express');
const cors = require('cors');
const app = express();
const petshopRoutes = require('./src/routes/petshopRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', petshopRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
