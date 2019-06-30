const router = require('express').Router();
const { db_get , db_post} = require('./db');

let lastId = 0;
let saved = {};

/**
 * リクエストを受け付けてDBに登録
 * DBからデータを取得し返す
 */
router.get('/post', function (req, res) {

  db_post().then(()=>{

    db_get(lastId).then((data)=>{
      const results = data.results;
      for(let i = 0,l = results.length;i<l;i++){
        if(lastId >= results[i].id) continue;
        lastId = results[i].id;
        saved[lastId] = results[i];
      }
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.send(saved);
    })

  })

})

/**
 * DBからデータを取得し返す
 * data配列に基本的には溜まっているので無い分だけ取得
 */
router.get('/get', function (req, res) {

  db_get(lastId).then((data)=>{
    const results = data.results;
    for(let i = 0,l = results.length;i<l;i++){
      if(lastId >= results[i].id) continue;
      lastId = results[i].id;
      saved[lastId] = results[i];
    }
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.send(saved);
  })

})


module.exports = router;