import { bizBuz } from "./bizbuz.js";

export function tesztBizBuz(){

    const tesztLista = [
        {
            n: 0,
            vart: "nincs ilyen sorozat"
        },
        {
            n: -1,
            vart: "nincs ilyen sorozat"
        },
        {
            n: 1,
            vart: "1"
        },
        {
            n: 2,
            vart: "1, BIZ"
        },
        {
            n: 3,
            vart: "1, BIZ, BUZ"
        },
        {
            n: 10,
            vart: "1, BIZ, BUZ, BIZ, 5, BIZBUZ, 7, BIZ, BUZ, BIZ"
        }
    ]

    /* 
    for (let i=0; i<tesztLista.length; i++){
        let teszeEset = tesztLista...
    }
    */
    tesztLista.forEach((tesztEset, index) => {
        let fvEredmeny = bizBuz(tesztEset.n);
        console.assert(tesztEset.vart === fvEredmeny,"%o",`n: ${n} vart: ${vart} kapott: ${fvEredmeny}`,`HIBA! a ${index}. tesztesetnél`)
    })
}



export function tesztBizBuz(){

    const tesztLista = [
        {
            n: 1,
            vart: 122,
        },
        {
            n: 2,
            vart: "BIZ"
        },
        {
            n: 3,
            vart: "BUZ"
        },
        {
            n: 6,
            vart: "BIZBUZ"
        }
    ]

    /* 
    for (let i=0; i<tesztLista.length; i++){
        let teszeEset = tesztLista...
    }
    */
    tesztLista.forEach((tesztEset, index) => {
        let fvEredmeny = bizBuz(tesztEset.n);
        console.assert(tesztEset.vart === fvEredmeny,"%o",`n: ${n} vart: ${vart} kapott: ${fvEredmeny}`,`HIBA! a ${index}. tesztesetnél`)
    })
}