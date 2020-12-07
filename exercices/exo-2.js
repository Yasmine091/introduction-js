export {part8};

function part1() {
    return true;
}

function part2(phrase) {
    return phrase;
}

function part3(a, b) {
    return a + " " + b;
}

function part4(a, b) {
    if (a > b) {
        return a + " est supérieur a " + b;
    }
    if (a < b) {
        return a + " est inférieur a " + b;
    }
    if (a == b) {
        return a + " est égale a " + b;
    }
}

function part5(num, phrase) {
    return num + " " + phrase;
}

function part6(nom, prenom, age) {
    return "Bonjour " + prenom + " " + nom + ", tu as " + age + " ans.";
}

function part7(genre, age) {
    if (genre == "femme" && age < 18) {
        return "Tu est une " + genre + " mineure";
    }
    if (genre == "femme" && age > 18) {
        return "Tu est une " + genre + " majeure";
    }
    if (genre == "homme" && age < 18) {
        return "Tu est un " + genre + " mineur";
    }
    if (genre == "homme" && age > 18) {
        return "Tu est un " + genre + " majeur";
    }
}

function part8(a, b, c) {
    if (!a) {
        var a =  9;
    }
    if (!b) {
        var b = 9;
    }
    if (!c) {
        var c = 9;
    }
    return a + b + c;
}