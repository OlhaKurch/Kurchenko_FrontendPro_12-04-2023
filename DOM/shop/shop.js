const category = document.querySelector('.category');
let productToBuy;
category.onclick = function(event) {
    let product = event.target.parentElement.querySelector('.products');         
    product.classList.toggle('products--none')
    product.onclick = function(event) {
        let productAbout = event.target.parentElement.querySelector('.products__about');        
        productAbout.classList.toggle('products__about--none')
        productToBuy = event.target.innerHTML;
        let productInfo = document.getElementById('product');
        productInfo.value = productToBuy;
        productAbout.onclick = function(event) {
            let buy = event.target
            if(buy.classList.contains('buy')) {
                document.querySelector('.form').classList.toggle('formDisplay')
                document.querySelector('.main').classList.toggle('main--none')
                product.classList.add('products--none')                
             }  
        }    
    }    
};

let ValidationForm = () => {
    const errorBox = [];
    const nameInput = document.getElementById('name');
    const poshta = document.getElementById('np');
    const payCard = document.getElementById('card');
    const payCash = document.getElementById('cash');
    const amount = document.getElementById('amount');

    if(nameInput.value.trim() == '') {
        alert(`Введіть імя`);
        errorBox.push('error')
    }
    if(poshta.value.trim() == '') {
        alert(`Введіть відділення пошти`);
        errorBox.push('error')
    }
    if(!payCard.checked && !payCash.checked ) {
        alert(`Оберіть тип оплати`);
        errorBox.push('error')
    }
    if(payCard.checked && payCash.checked ) {
        alert(`Тип оплати може бути тільки один`);
        errorBox.push('error')
    }
    if(amount.value.trim() == '' || amount.value.trim() <= 0) {
        alert(`Введіть кількість товару`);
        errorBox.push('error')
    }
    if(errorBox.length) {
        return false;
    }
    return true;
}
