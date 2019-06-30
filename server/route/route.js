const router = require('express').Router();

var data = [];

/**
 * リクエストを受け付けてDBに登録
 * DBからデータを取得し返す
 */
router.post('/post', function (req, res) {
  console.log(req);
  data.push("hello");
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.send({data:data});
})

/**
 * DBからデータを取得し返す
 * data配列に基本的には溜まっているので無い分だけ取得
 */
router.get('/get', function (req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.send({data:data});
})




module.exports = router;