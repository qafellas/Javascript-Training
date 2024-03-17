// Method Overloading: If we want to create two functions with the same name/signature,
// we have to use different number or types of parameters.
class Bank {

    calculateAPR(balance, percent, baseOffer){
        console.log(`Apr rate is ${(balance*percent+baseOffer)/100}`)
    }

    calculateAPR(balance, percent){ 
        console.log(`Apr rate is ${(balance*percent)/1000}`)
    }

}

let b = new Bank()
b.calculateAPR(2000, 10, 15000)