export class Hamburger {
    static SIZE_SMALL = {
        price: 50,
        calories: 20,
    }
    static SIZE_BIG = {
        price: 100,
        calories: 40,
    }
    static STUFFING_CHEESE = {
        price: 10,
        calories: 20,
    }
    static STUFFING_SALAD = {
        price: 20,
        calories: 5,
    }
    static STUFFING_POTATO = {
        price: 15,
        calories: 10,
    }
    static TOPPING_MAYO = {
        price: 20,
        calories: 5,
    }
    static TOPPING_SAUCE = {
        price: 15,
        calories: 0,
    }
    priceTopping = 0;
    caloriesTopping = 0;
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }
    addTopping(topping) {
        this.priceTopping += topping.price;
        this.caloriesTopping += topping.calories;
    }
    calculate (){
        this.caloriesSumm = 0;
        this.caloriesSumm += this.size.calories;
        this.caloriesSumm += this.stuffing.calories;
        this.caloriesSumm += this.caloriesTopping;
        return this.caloriesSumm
    }
    calculatePrice (){
        this.priceSumm = 0;
        this.priceSumm += this.size.price;
        this.priceSumm += this.stuffing.price;
        this.priceSumm += this.priceTopping;
        return this.priceSumm
    }

}


