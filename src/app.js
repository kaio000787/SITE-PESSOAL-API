require('./config/dotenv');

const express = require('express');
const {  initDatabase} = require('./config/db');
const cors = require('cors');

const experienciasRoute = require('./routes/experienciasRoute');
const portfolioRoute = require('./routes/portfolioRoute');
const informacoesRoute = require('./routes/informacoesRoute');
const authRoute = require('./routes/authRouter');


const port = process.env.APP_PORT || 5000;

app.get('/', (req, res) => {
    res.send('Seja bem-vindo à API do Meu Site Pessoal!');
});


app.use(cors());
const app = express();
app.use(express.json());        
initDatabase();

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolio', portfolioRoute);
app.use('/api/informacoes', informacoesRoute);
app.use('/api/auth', authRoute);



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
