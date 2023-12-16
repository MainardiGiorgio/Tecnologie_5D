const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response

app.get('/api', (req, res) => {
    var jsonData = {
        "Stazioni": [
            {
                "nome": "Tokyo Station",
                "stazione": "Tokyo",
                "regione": "Kanto"
            },
            {
                "nome": "Shinjuku Station",
                "stazione": "Shinjuku",
                "regione": "Kanto"
            },
            {
                "nome": "Shibuya Station",
                "stazione": "Shibuya",
                "regione": "Kanto"
            },
            {
                "nome": "Osaka Station",
                "stazione": "Osaka",
                "regione": "Kansai"
            },
            {
                "nome": "Nagoya Station",
                "stazione": "Nagoya",
                "regione": "Tōkai"
            }
        ],
        "Top10": [
            {
                "posizione": 1,
                "stazione": "Tokyo Station",
                "regione": "Kanto"
            },
            {
                "posizione": 2,
                "stazione": "Shinjuku Station",
                "regione": "Kanto"
            },
            {
                "posizione": 3,
                "stazione": "Shibuya Station",
                "regione": "Kanto"
            },
            {
                "posizione": 4,
                "stazione": "Osaka Station",
                "regione": "Kansai"
            },
            {
                "posizione": 5,
                "stazione": "Nagoya Station",
                "regione": "Tōkai"
            },
            {
                "posizione": 6,
                "stazione": "Kyoto Station",
                "regione": "Kansai"
            },
            {
                "posizione": 7,
                "stazione": "Hiroshima Station",
                "regione": "Chūgoku"
            },
            {
                "posizione": 8,
                "stazione": "Fukuoka Station",
                "regione": "Kyūshū"
            },
            {
                "posizione": 9,
                "stazione": "Sendai Station",
                "regione": "Tōhoku"
},
{
                "posizione": 10,
                "stazione": "Nagoya Station",
                "regione": "Tōkai"
}
        ]
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

const port = process.env.PORT || '3000';
app.set('port', port);
/**
* Listen on provided port, on all network interfaces.
*/
app.listen(port, () => {console.log('Example app listening on port 3000!');});