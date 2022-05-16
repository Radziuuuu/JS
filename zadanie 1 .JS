function load()
{
    let sumaButton = document.getElementById("sumaButton");
    sumaButton.addEventListener("click", oblicz)
}


function oblicz()
{ 

    //suma a+b
    let a;
    let b;

    a = document.getElementById("a").value;
    b = document.getElementById("b").value;

    let liczbaA = parseInt(a);
    let liczbaB = parseInt(b);

    let wynik = liczbaA + liczbaB;
    let roznica = liczbaA - liczbaB;
    let iloczyn = liczbaA * liczbaB;
    let iloraz = liczbaA / liczbaB;
    // return parseInt(int, num)

    //document.querySelector(klasa)
    

    let miejsceNaWyik = document.getElementById("odpowiedz");
    miejsceNaWyik .innerHTML =  "suma: " + wynik + " roznica: " + roznica + " iloczyn: " + iloczyn + "  iloraz: " + iloraz;
}
