const text = document.getElementsByTagName('p');
const div = document.getElementsByTagName('div');
text[0].addEventListener('mouseover', function(){
    div[0].classList.remove('ghost')
})
text[0].addEventListener('mouseout', function(){
    div[0].classList.add('ghost')
})