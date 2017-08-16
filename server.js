var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var datum={
    'heading':'Article',
    'date':'August 2, 2017',
    'body':'This the body of the webpage'
};

function createTemplate(data)
{
    var heading=data.heading;
    var date=data.date;
    var body=data.body;
    var html=`
            <html>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              <head class="center">
                  <link href="/ui/style.css" rel="stylesheet" />
                  </style>
                  <title>${heading}</title>
                  </head>
              <body>
              <div class="center">
                ${date}
              </div>
              <hr/>
              <div class="center">
                ${body}
              </div>
              </body>
            </html>
            `;
    return html;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(datum));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter +1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submitname',function(req, res){
    var name=req.query.name;
    names.push(name);
   res.send(JSON.stringify(names)); 
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
