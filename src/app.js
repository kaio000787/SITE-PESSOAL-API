require('./config/dotenv');

const express = require('express');
const {  initDatabase} = require('./config/db');
const cors = require('cors');

const experienciasRoute = require('./routes/experienciasRoute');
const portfolioRoute = require('./routes/portfolioRoute');
const informacoesRoute = require('./routes/informacoesRoute');
const authRoute = require('./routes/authRouter');


const port = process.env.APP_PORT || 5000;



const app = express();
initDatabase();
app.use(express.json());        
app.use(cors());

app.get('/', ( req,res) => {
    res.send('Seja bem-vindo à API do Meu Site Pessoal!');
});

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolio', portfolioRoute);
app.use('/api/informacoes', informacoesRoute);
app.use('/api/auth', authRoute);



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
