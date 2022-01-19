const switching = document.getElementById("switch");
const body = document.body
const up = document.querySelector('.up')
const ul = document.querySelector('ul')
const addBtn = document.querySelector('.add-btn')
const image = document.getElementById('icon')
const subFooter = document.querySelector('.sub')
const footer = document.querySelector('footer')
const text = document.querySelector('.text')
const clear = document.getElementById('clear')
const compeleted = document.getElementById('completed')
const itemLeft = document.querySelector('.left')
const compBtn = document.getElementById('complete-btn')
const allBtn = document.getElementById('all')
const active = document.getElementById('active')
const add = document.getElementById('add')
let checkedItem
switching.addEventListener("click", e=>{
  if(e.target.src==="http://127.0.0.1:5500/1/images/icon-moon.svg"){
    body.classList.replace('light','dark')
    e.target.src="./images/icon-sun.svg"
    addBtn.classList.add('dark-ba')
    ul.classList.add('dark-ba')
    subFooter.classList.add('dark-ba')
    footer.classList.add('dark-ba')
    compBtn.classList.add('dark-ba')
    allBtn.classList.add('dark-ba')
    active.classList.add('dark-ba')
    clear.classList.add('dark-ba')
    compeleted.classList.add('dark-ba')
    add.classList.add('dark-ba')
  }
  else{
    e.target.src="./images/icon-moon.svg"
    body.classList.replace('light-ba','light')
    addBtn.classList.add('light-ba')
    ul.classList.add('light-ba')
    subFooter.classList.add('light-ba')
    footer.classList.add('light-ba')
  }  
})
text.addEventListener("keyup",e=>{
  if(e.keyCode===13){
    e.preventDefault()
    add.click()
  }
})
function addItem(){
 let txtValue = text.value
 if(txtValue===''){
    alert('you should write something')
  }
  else{
    let li = document.createElement('li')
    const span = document.createElement('SPAN')
    span.innerText = txtValue
    text.value=''
    const cross = document.createElement("IMG")
    cross.src="./images/icon-cross.svg"
    li.appendChild(span)
    li.appendChild(cross)
    ul.appendChild(li)
    let liCount= document.querySelectorAll('li').length
    //console.log(liCount);
    let temp = liCount
     console.log(temp);
    //console.log(liCount)
    itemLeft.innerText = `${liCount} items left`
    li.addEventListener('click', e=>{
      //   console.log(e.target);
      if(e.target===span){
        span.classList.add('before')
        checkedItem=span.classList.add('checked')
        console.log(temp)
        let index= temp-1
        console.log(index);
        itemLeft.innerText = `${index} items left`
        temp = temp-1
        console.log(temp);

      }
    })
    cross.addEventListener("click" , e=>{
      li.remove()
      let num =document.querySelectorAll('li').length
      itemLeft.innerText = `${num} items left`
    })
    clear.addEventListener('click',e=>{
      li.remove()
      itemLeft.innerText = `0 items left`
    })
    // function update(){
       
    // } 
    compeleted.addEventListener('click',e=>{
     const checkedItem = span.classList.contains('checked')
      if(checkedItem===false && document.querySelectorAll('.checked').length>0) {
        li.classList.add('hide')
      }
    })
    active.addEventListener('click',e=>{
      const checkedItem = span.classList.contains('checked')
      console.log(checkedItem);
      if(checkedItem===true && document.querySelectorAll('.checked').length>0 )
      li.classList.add('hide')
    })
    compBtn.addEventListener('click', e=>{
      const checkedItems = span.classList.contains('checked')
      if(checkedItems===false && document.querySelectorAll('.checked').length>0) {
        li.classList.add('hide')
      }
    })
    allBtn.addEventListener('click',e=>{
      console.log(li.classList.contains('hide'));
      if(li.classList.contains('hide')){
        li.classList.toggle('hide')
      }
    })
        
  }
}




