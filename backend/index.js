const express = require('express');
const cors = require('cors');
// Untuk sementara kita ambil dari data.js. Nanti ini akan dihapus.
const { educationHistory, skills, projects } = require('./data.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint untuk mendapatkan data pendidikan
app.get('/api/education', (req, res) => {
  res.json(educationHistory);
});

// Endpoint untuk mendapatkan data skill
app.get('/api/skills', (req, res) => {
  res.json(skills);
});

// Endpoint untuk mendapatkan data proyek
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// ⏳ Baris ini PENTING supaya server tetap hidup
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
