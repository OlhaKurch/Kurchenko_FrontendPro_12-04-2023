const input = document.querySelector('button');
let url = 'https://jsonplaceholder.typicode.com/posts/';
let urlComments;
let post;
let postTitle;

function cleanInput() {
      document.querySelector('input').value = '' 
      url = 'https://jsonplaceholder.typicode.com/posts/'    
}

function findComment() {
      new Promise ((resolve, reject) => {
            fetch(urlComments)
            .then(data => data.json())  
            .then(json => {
                  let commentsDoc = document.createElement('article')
                  document.querySelector('p').appendChild(commentsDoc)
                  let comments = json.map(info => {
                        return addComments (info.name, info.email, info.body);
                  }).join('');
                  commentsDoc.innerHTML = comments;
                  })            
            .catch(error => console.log(error))  
      })
}
function addComments(name, email, body) {
      return `
      <br>
      <h4> ${name} </h4>
      <a href="${email}" type="email"> ${email} </a>
      <p> ${body}</p>
      <br>
      `
}
function addPost() {
      let postNumberTitle = document.createElement('h2')
      document.querySelector('div').appendChild(postNumberTitle)
      postNumberTitle.innerHTML = postTitle
      let postNumber = document.createElement('p')
      document.querySelector('div').appendChild(postNumber)
      postNumber.innerHTML = post      
      let btn =  document.createElement('button')
      btn.classList.add('btn') 
      btn.innerHTML = 'add comment'   
      document.querySelector('div').appendChild(btn)
      const btnComments = document.querySelector('.btn');
      btnComments.addEventListener('click', function() {
            findComment()
            document.querySelector('.btn').remove()
      })
      cleanInput()
}
function findPost() {
      new Promise ((resolve, reject) => {
            fetch(url)
            .then(data => data.json())  
            .then(json => {
                  postTitle = json.title
                  post = json.body
                  console.log(json)
                  addPost()
                  })            
            .catch(error => console.log(error))  
      })
}

function CheckNum(num) {
      if(num < 1 || num > 100) {
            alert('You mast write a number 1-100');
            cleanInput()
      } else {
            url = url + num;
            urlComments = url +'/comments'
            findPost()            
      }
}
input.addEventListener('click', function() {
      if(document.querySelector('p')) {
            document.querySelector('p').remove();
      } 
      let num = document.querySelector('input').value;
      CheckNum(num); 
})

