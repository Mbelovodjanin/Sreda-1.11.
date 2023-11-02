var person = {
    ime: "Martin",
    prezime: "Potkonjak",
    hairColor: "Black",
    eyeColor: "Blue",
    age: 27,
    siblibngs: ["sister1", "sister2", "brother1"],
    speakName: function(){
        return person.ime;
    },
    changeName: function(novoIme){
        person.ime = novoIme;
    }
}


console.log(person.speakName())

person.changeName("Jovan");
console.log(person.speakName())
console.log(person.ime)

person.ime = "Milan";
console.log(person.speakName())


console.log(person instanceof Object)


var author = {
    name: "Tolkin1",
    surname: "Tolkin2"
}

var book = {
    name: "LOTR",
    author,
}
console.log(book.author.surname)





function generateObject (ime, prezime, godiste, boja){
    var macka = {};
    macka.name = ime;
    macka.surname = prezime;
    macka.color = boja;
    macka.age = godiste;
    return macka;
}
var macka = generateObject("Silvester", "Stalone", 1999, "azzuro");


var macka2 = generateObject("Garfild", "Stalone", 1998, "azzuro");

console.log(macka, macka2)

macka2.noviProperti = "novi properti"
console.log(macka2)

var niz = [macka, macka2];

var filtrirano = niz.filter(function(e,i,niz){
    return e.age === 1999;
})