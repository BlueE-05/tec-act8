// Capas: db -> controller -> handler -> routes -> Postman
const express = require('express');

const app = express();

import studentsRoutes from '@/routes/students';

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/api/students', studentsRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));