function load()
{
    document.getElementById("sumaButton");
    sumaButton.addEventListener("click", suma)

    document.getElementById("roznicaButton");
    roznicaButton.addEventListener("click", roznica);

    document.getElementById("iloczynButton");
    iloczynButton.addEventListener("click", iloczyn);

    document.getElementById("ilorazButton");
    ilorazButton.addEventListener("click", iloraz);

    // document.getElementById("potegaButton");
    // potegaButton.addEventListener("click", wynik_potegi);
}


function suma()
{ 

    //suma a+b
    let a;
    let b;

    a = document.getElementById("a").value;
    b = document.getElementById("b").value;

    let liczbaA = parseInt(a);
    let liczbaB = parseInt(b);

    let suma = liczbaA + liczbaB;

    // return parseInt(int, num)

    //document.querySelector(klasa)
    

    let miejsceNaWyik = document.getElementById("odpowiedz");
    miejsceNaWyik .innerHTML =  "suma: " + suma;
}



function roznica()
{ 

    //suma a+b
    let a;
    let b;

    a = document.getElementById("a").value;
    b = document.getElementById("b").value;

    let liczbaA = parseInt(a);
    let liczbaB = parseInt(b);

    let roznica = liczbaA - liczbaB;

    // return parseInt(int, num)

    //document.querySelector(klasa)
    

    let miejsceNaWyik = document.getElementById("odpowiedz");
    miejsceNaWyik .innerHTML =  "roznica: " + roznica;
}

function iloczyn()
{ 

    //suma a+b
    let a;
    let b;

    a = document.getElementById("a").value;
    b = document.getElementById("b").value;

    let liczbaA = parseInt(a);
    let liczbaB = parseInt(b);

    let iloczyn = liczbaA * liczbaB;

    // return parseInt(int, num)

    //document.querySelector(klasa)
    

    let miejsceNaWyik =  document.getElementById("odpowiedz");
    miejsceNaWyik.innerHTML =  "iloczyn: " + iloczyn;
}


function iloraz()
{ 

    //suma a+b
    let a;
    let b;

    a = document.getElementById("a").value;
    b = document.getElementById("b").value;

    let liczbaA = parseInt(a);
    let liczbaB = parseInt(b);

    let iloraz = liczbaA / liczbaB;

    // return parseInt(int, num)

    //document.querySelector(klasa)
    

    let miejsceNaWyik =  document.getElementById("odpowiedz");
    miejsceNaWyik.innerHTML =  "iloraz: " + iloraz;
}

    // function potega()
    //     {
    //         let i = 0;
    //         let a;
    //         let b;

    //         a = document.getElementById("a").value;
    //         b = document.getElementById("b").value;

    //         let liczbaA = parseInt(a);
    //         let liczbaB = parseInt(b);

    //         // Math.pow(a, b);

    //         for (i = 0; i < b - 1; i++)
    //         {
    //             a = a * temp;

    //         }

    // <--------------------------------------------------------Potegowanie----------------------------------------------------------->

    // function potega ()
    // {

    //     let a;
    //     let b;

    //     a = document.getElementById("a").value;
    //     b = document.getElementById("b").value;

    //     let liczbaA = parseInt(a);
    //     let liczbaB = parseInt(b);

    //     let potega = console.log( Math.pow(a  ,  b) );

    //     let miejsceNaWyik =  document.getElementById("odpowiedz");
    //     miejsceNaWyik.innerHTML =  "potega: " + potega;
        
    // }