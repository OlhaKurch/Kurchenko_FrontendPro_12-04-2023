const variant  = document.querySelector('.voting');

variant.addEventListener("click", function(event) {
    let link = event.target.parentElement.parentElement;
    let num = link.querySelector('.number').innerHTML
    num++
    link.querySelector('.number').innerHTML = num
    console.log(num)
});
