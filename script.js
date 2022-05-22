

  let inputbox = document.querySelector('.inputfield input')
  let addbtn = document.querySelector('.inputfield button')
  let todolist = document.querySelector('.todo-list')
  let clearall = document.querySelector('.footer button')

  inputbox.onkeyup = () => {
      let userdata = inputbox.value;
      if(userdata.trim() != 0 ){
          addbtn.classList.add('active')
      }else{
        addbtn.classList.remove('active')
      }
  }
  showtask();


  addbtn.onclick = () => {
    let userdata = inputbox.value; 
let getstorage = localStorage.getItem("todo task")
if(getstorage == null){
    listarr = []
}else{
    listarr = JSON.parse(getstorage)
}
listarr.push(userdata)
localStorage.setItem('todo task' , JSON.stringify(listarr))
showtask();

  }

  function showtask(){
      let getstorage = localStorage.getItem('todo task')
      if(getstorage == null){
          listarr = []
      }else{
          listarr = JSON.parse(getstorage)
      }
      const pending = document.querySelector('.pending');
      pending.innerText = listarr.length;
      if(listarr.length > 0){
          clearall.classList.add('active')
      }else{
          clearall.classList.remove('active')
      }
      let newLitag = ''
      listarr.forEach((element, index) => {
          newLitag +=` <li>${element} <span onclick='deletetask(${index})';> <i class="fa-solid fa-trash"></i></span></li>`
      });
      todolist.innerHTML = newLitag;
      inputbox.value = '';
  }

  function deletetask(index){
getstorage = localStorage.getItem("todo task")
listarr = JSON.parse(getstorage)
  listarr.splice(index , 1);
  localStorage.setItem('todo task' , JSON.stringify(listarr))
  showtask();
  }


  clearall.onclick = () => {
      listarr = [];
      localStorage.setItem("todo task" , JSON.stringify(listarr) )
      showtask();

  }


