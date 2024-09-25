const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'innovaweb',
  password: 'ds564',
  port: 7777, 
});

app.get('/cursos', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM cursos');
      res.json({
          total: result.rowCount,
          cursos: result.rows,
      });
    } catch (error) {
      console.error('Erro ao obter cursos:', error);
      res.status(500).send('Erro ao obter cursos');
    }
  });
  

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });