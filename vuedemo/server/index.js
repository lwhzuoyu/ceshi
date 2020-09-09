const express = require('express');
const bodyParser=require('body-parser');
const Mock = require('mockjs');
var app = express();
const Random = require('mockjs').Random;
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); 
    if (req.method == 'OPTIONS') {
      res.send(200);
    } else {
      next();
    }
});
app.get('/data', function (req, res) {
    // res.json(Mock.mock({
    //     "status": 200,
    //     'name': '@name'
    // }));
    var data=[];
    for(var i=0;i<10;i++){
        var o=Mock.mock({
            'id|+1': 1,
            'name': '@name',
            "number":Random.natural(1,9),
            'img':Random.image(Random.natural(1,9)*10+'x'+Random.natural(1,9)*10)
        })
        data.push(o)
    }
    res.send(data)
    // res.send(
    //     Mock.mock({
    //         "status": 200,
    //         'name': '@name',
    //         'img':Random.image('200x100')
    //     })
    // );
})


app.listen(8070, function () {
    console.log('成功')
})


