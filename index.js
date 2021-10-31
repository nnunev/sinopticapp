const express = require('express');
const app = express();
const path = require('path')
const cities = require('./Cities')
//app.get('/', (req,res) => { res.send('<h1> Fill the location </h1>')} );
app.get ('/', (req,res) => { res.sendFile (path.join(__dirname, 'public', 'index.html'))} );
//app.use(express.static(path.join(__dirname, 'public') ));
app.use(express.urlencoded({extended: false}))
app.post('/weather',(req, res) => {

    const result = (cities.filter(city => city.id === parseInt(req.body.cities)));
    res.send (`<h1>${result[0].name} - ${result[0].temperature}</h1>`)
})
app.get('/weather', (req,res) => {res.sendFile (path.join(__dirname, 'public', 'index.html'))
  
} );    

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
   

