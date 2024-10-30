const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views')
app.get('/', (req,res) => {
    res.send('Exercício simples, apenas para exemplo');
});

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:3000');

});


app.get('/html', (req, res) => {
    res.render('cv')
    
})
