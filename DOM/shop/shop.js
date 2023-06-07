const category = document.querySelector('.category');
category.onclick = function(event) {
    let product = event.target.parentElement.querySelector('.products'); 
    product.classList.toggle('products--none')
    product.onclick = function(event) {
        let productAbout = event.target.parentElement.querySelector('.products__about');
        productAbout.classList.toggle('products__about--none')
        productAbout.onclick = function(event) {
            let buy = event.target
            if(buy.classList.contains('buy')) {
                alert('This product is yours');
                product.classList.add('products--none')
            }  
        }    
    }    
};
