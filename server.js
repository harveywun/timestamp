var express = require('express');
var app = express();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var d;

app.get('/:date', function (req, res) {

    if(isNaN(req.params.date)){
        var parts = req.params.date.match(/^([A-Za-z]+)\s(\d\d),\s(\d{4})$/);
        d = new Date(parts[2] + " " + parts[1] + " " + parts[3]);
    } else {
        d = new Date(1000 * parseInt(req.params.date, 10));
    }
    
    res.send({unix: d.getTime()/1000, natural: monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()});

})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
