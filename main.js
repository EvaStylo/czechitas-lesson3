// tady je místo pro náš program

let nadpis = document.querySelector('h1')

//nadpis.innerHTML = 'Muj zmeneny obsah'
/** 
let vstupUzivatel = prompt('Zadej novy nadpis')

nadpis.innerHTML = vstupUzivatel

let vysledek = document.querySelector('.vysledekZavodu')

const start = 15
const delka = Number(prompt('Zadej delku zavodu:')) // Vzdy string
const konec = (start + delka) % 24
 
vysledek.innerHTML = konec

*/
let osoba = document.querySelector('.ockovani')

let jmeno = prompt('Zadej jmeno')
let vek = Number(prompt('Zadej věk'))

const vystup = (jmeno + ', věk: ' +vek)

osoba.innerHTML = vystup
