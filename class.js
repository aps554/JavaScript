class Model{
    constructor(Mno,Mname){
        this.Mno = Mno;
        this.Mname = Mname;
    }
    show(){
        console.log(`Model number ${this.Mno} \nModel name ${this.Mname}`)
    }
}

const obj1 = new Model(256,"Dzire");
obj1.show();