const mysql = require('mysql');

const connection = mysql.createConnection({
  host :'localhost',
  user : 'kensuke',
  password : 'kensuke',
  database : 'bbs'
});

const connect = connection.connect((err)=>{
  if(err){
    console.error(`error connecting: ${err.stack}`);
    return;
  }
})

const db_get = (lastId) =>{

  return new Promise((resolve,reject)=>{

    connection.query(`SELECT * FROM bbs WHERE id > ${lastId}`,(err,results,fields)=>{
      
      if (err) throw err;

      resolve({results:results,fields:fields});
    
    })
  
  });
  
}
const db_post = (body) =>{

  let = dummy = {
    user: body.user,
    message: body.message,
    room: 1
  }
  
  return new Promise((resolve,reject)=>{

    connection.query('INSERT INTO bbs SET ?',dummy,(err,results,fields)=>{
      
      if (err) throw err;

      resolve();
    
    })
  
  });
  
}

module.exports = {
  db_get,
  db_post
}



