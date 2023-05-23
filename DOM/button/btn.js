const button  = document.querySelector('.buttons');
button.addEventListener("click", function(event) {
    let link = event.target;
    if(link.getAttribute('href').includes('https://' || 'http://')){
        return console.log(link.getAttribute('href'));
    } else {
        link.setAttribute('href', `http://${link.getAttribute('href')}`);
        return console.log(link.getAttribute('href'));
    }
});
