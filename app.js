const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname,'public')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});
app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});
app.get('/ayuda', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/Ayuda.html'))
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});
app.get('/miscompras', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/MisCompras.html'))
});
app.get('/ofertas', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/Ofertas.html'))
});
app.get('/tiendasoficiales', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/TiendasOficiales.html'))
});

app.get('/vender', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/Vender.html'))
});

app.listen(port, () => console.log('corriendo en http://localhost:' + port+ " port"));