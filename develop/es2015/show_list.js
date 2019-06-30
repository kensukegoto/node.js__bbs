let saved = null;

const show_list = (selecor,data) => {

  let mydata = null;
  let ul = document.querySelector(selecor);

  for(let k in data) {

    if(data.hasOwnProperty(k)) {
      console.log(k,data[k]);
      mydata = data[k];
      let post = document.createElement('li');
      post.classList.add('post');
      post.innerHTML = `
          <dl>
            <dt>
              <p class="user">${mydata.user}</p>
              <time>${mydata.date}</time>
            </dt>
            <dd>
              <p class="message">${mydata.message}</p>
            </dd>
          </dl>
      `;

      ul.appendChild(post);
    }

  } // for

}

module.exports = {
  show_list
}