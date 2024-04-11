export function bizBuz(n){

    let eredmeny = ""
    if(n<=0){
        eredmeny = "nincs ilyen sorozat";
    }else{
        for (let index = 1; index <= n; index++){
            if (index===n){
                eredmeny += seged(index);
            }else{
                eredmeny += seged(index) + ", ";
            }
        }
    }

    /*
    Ha n%2===0 akk fűzzük hozzá az eredményhez, h BIZ.
    kell egy ciklus
    */
    seged(n);
}

export function seged(n){
    //ezekkel térjen vissza: n, BIZ, BUZ, BIZBUZ
    let eredmeny = ""
    if((n%2===0)&&(n%3===0)){
        eredmeny = "BIZBUZ";
    }else if(n%2===0){
        eredmeny = "BIZ";
    }else if(n%3===0){
        eredmeny= "BUZ";
    }else{
        eredmeny = n
    }
    return eredmeny
}