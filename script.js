function celcius_zu_fahrenheit() {
    var celcius = document.getElementById("celcius").value
    var fahrenheit = celcius * 1.8 + 32

    var ergebnis = document.getElementById("ergebnis_fahrenheit")
    ergebnis.innerText = fahrenheit
}

function fahrenheit_zu_celcius() {
    var fahrenheit = document.getElementById("fahrenheit").value
    var celcius = (fahrenheit - 32) / 1.8

    var ergebnis = document.getElementById("ergebnis_celcius")
    ergebnis.innerText = celcius
}

function bmi() {
    var groesse = document.getElementById("groesse").value
    var gewicht = document.getElementById("gewicht").value

    var bmi = gewicht / (groesse * groesse)

    var ergebnis = document.getElementById("bmi")
    ergebnis.innerText = bmi
}

function geschwindigkeit() {
    var meter = document.getElementById("meter").value
    var sekunden = document.getElementById("sekunden").value

    var geschwindigkeit = meter / sekunden * 3.6

    var ergebnis = document.getElementById("geschwindigkeit")
    ergebnis.innerText = geschwindigkeit
}


