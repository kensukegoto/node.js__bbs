const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
 
// クロスオリジンリクエストを許可（API化するため）
app.use(cors());
// postデータを扱いやすくする
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',require('./router'));
app.listen(3000)