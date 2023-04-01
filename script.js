class Hamburger {
    constructor(size, hamType , topping = 'none'){
        this.size = size;
        this.hamType = hamType;
        this.price = 0;
        this.kKall = 0;
        this.topping = topping;
    }
    calcPrice (){
        let fullPrice = 0;
        let sizePrice = (this.size == 'small') ? 50 : (this.size == 'big') ? 100 : 0;
        let typePrice = (this.hamType == 'cheeze') ? 10 : (this.hamType == 'salat') ? 20 : (this.hamType == 'salat') ? 15 : 0;
        let toppingPrice = (this.topping == 'mayo') ? 20 : (this.topping == 'condiment') ? 15 : (this.topping == 'none') ? 0 : 0;
        fullPrice = sizePrice + typePrice + toppingPrice;
        return this.price = fullPrice;
    }
    calckKall (){
        let fullkKall = 0;
        let sizekKall = (this.size == 'small') ? 20 : (this.size == 'big') ? 40 : 0;
        let typekKall = (this.hamType == 'cheeze') ? 20 : (this.hamType == 'salat') ? 5 : (this.hamType == 'potato') ? 10 : 0;
        let toppingkKall = (this.topping == 'mayo') ? 5 : (this.topping == 'condiment' || this.topping == 'none') ? 0 : 0;
        fullkKall = sizekKall + typekKall + toppingkKall;
        return this.kKall = fullkKall;
    }
    changeHamType(newHamType){
        this.hamType = newHamType;
    }
    addTopping(newTopping){
        this.topping = newTopping;
    }
}

const hamb1 = new Hamburger('small','cheeze');
console.log(hamb1);
console.log("Price: " + hamb1.calcPrice());
console.log("Calories: " + hamb1.calckKall());
console.log('change hamberger type' , hamb1.changeHamType('salat'));
console.log("Price: " + hamb1.calcPrice());
console.log(hamb1);
console.log('add mayo to hamberger' , hamb1.addTopping('mayo'));
console.log(hamb1);
console.log("New price: " + hamb1.calcPrice());
console.log("New Calories: " + hamb1.calckKall());
console.log(hamb1);