/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale
del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo).*/

// 1. Prendere l'elemento nel DOM
// 2. Chiedere numero di chilometri da percorrere e l'età
// 3. Calcolare il prezzo base del biglietto
// 4. Calcolare il prezzo scontato per minorenni e over 65
// 5. Stampare il prezzo finale nel DOM

const targetElement = document.getElementById('target')


const tripDistance = parseInt(prompt('Quanti chilometri devi percorrere?', 100).trim())

const userAge = parseInt(prompt('Quanti anni hai?', 18).trim())


const basePrice = tripDistance * 0.21
console.log(basePrice)

