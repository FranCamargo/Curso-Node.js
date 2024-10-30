const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views')
app.get('/', (req,res) => {
    res.send('Caraca, não é que eu consegui fazer uma api Node.js usando Express <3 que emoção manoooooooo!');
});

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:3000');

});


app.get('/html', (req, res) => {
    res.render('cv')
    
})