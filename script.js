class Hamburger {
    constructor(size, hamType){
        this.size = size;
        this.hamType = hamType;
        this.price = this.calcPrice();
        this.kKall = this.calckKall();
        this.topping = 'none';
    }
    calcPrice (){
        let fullPrice = 0;
        {
            if(this.size == 'small'){
                fullPrice += 50;
            }else if(this.size == 'big'){
                fullPrice += 100;
            }

            if(this.hamType == 'cheeze'){
                fullPrice += 10;
            }else if(this.hamType == 'salat'){
                fullPrice += 20;
            }else if(this.hamType == 'potato'){
                fullPrice += 15;
            }

            if(this.hamType == 'none'){
                fullPrice += 0;
            }else if(this.hamType == 'mayo'){
                fullPrice += 20;
            }else if(this.hamType == 'condiment'){
                fullPrice += 15;
            }
        }
        return this.price = fullPrice;
    }
    calckKall (){
        let fullkKall = 0;
        {
            if(this.size == 'small'){
                fullkKall += 20;
            }else if(this.size == 'big'){
                fullkKall += 40;
            }

            if(this.hamType == 'cheeze'){
                fullkKall += 20;
            }else if(this.hamType == 'salat'){
                fullkKall += 5;
            }else if(this.hamType == 'potato'){
                fullkKall += 10;
            }

            if(this.hamType == 'none' || this.hamType == 'condiment'){
                fullkKall += 0;
            }else if(this.hamType == 'mayo'){
                fullkKall += 5;
            }
        }
        return this.kKall = fullkKall;
    }
    changeHamType(newHamType){
        this.hamType = newHamType;
        this.calckKall()
        this.calcPrice()
        return this.hamType;
    }
    addTopping(newTopping){
        this.topping = newTopping;
        this.calckKall()
        this.calcPrice()
        return this.topping;
    }

}


const hamb1 = new Hamburger('small','cheeze');
console.log(hamb1);
console.log("Price: " + hamb1.calcPrice())
console.log("Calories: " + hamb1.calckKall())
console.log(hamb1.changeHamType('salat'))
console.log("Price: " + hamb1.calcPrice())
console.log(hamb1);
console.log(hamb1.addTopping('mayo'));
console.log(hamb1);
