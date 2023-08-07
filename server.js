const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/mult', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 * num2;
  res.json({ result });
});

app.get('/info', (req, res) => {
    const carnetInfo = {
      carnet: '201807162',
      message: 'Información del carnet'
    };
    res.json(carnetInfo);
  });
  

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
