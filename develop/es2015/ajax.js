
const server = 'http://localhost:3000';

const get = ()=> {
  return fetch(
    `${server}/get`, 
    {
      mode: 'cors'
    })
    .then( response => {
      return response.json();
    });
}

const post = (e) => {

    const form = e.target;
    
    const body = new FormData(form);

    return fetch(
      `${server}/post`,
      {
      method: 'POST',
      body: body
    })
    .then(response => {
      return response.json();
    })

}


module.exports = {
  get,
  post
}