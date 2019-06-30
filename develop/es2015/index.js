const { get,post } = require('./ajax');
const { show_list } = require('./show_list');

function onload () {

  // ゲット
  get().then( response => {
    show_list('.posts',response);
  });


  const form = document.forms.main__form;
  form.addEventListener('submit',(e)=>{
    // ポスト
    post(e)
    .then(response => {
      // ポストに成功
      console.log('きたこれ！');
      console.log(response)
    });
  },false)





  // post_event(form);

}

window.addEventListener('load',onload,false);


