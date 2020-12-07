/* Template pour mes fonctions
function part1()  {
    let part = document.querySelector("#Partie-1");
    for (let i = 0; i <= 10; i++) {
        let li = document.createElement("li");
        li.innerHTML = i;
        document.body.appendChild(li);
        console.log(i);
    }
} 
export {part1};*/

function part1()  {
    let part = document.querySelector("#Partie-1");
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

function part2()  {
    let b = Math.floor(Math.random() * 100);
    for (let a = 0; a <= 20; a++) {
        let res = a * b;
        console.log(a + " * " + b + " = " + res);
    }
}

function part3()  {
    let b = Math.floor(Math.random() * 100);
    for (let a = 100; a >= 10; a--) {
        let res = a * b;
        console.log(res);
    }
}

function part4()  {
    let i = 1;
    while (i <= 10) {
        console.log(i);
        let res = (i / 2);
        i = i + res;
    }
}

function part5()  {
    for(let i = 1; i <= 15; i++) {
        console.log(i + " - On y arrive presque...");
    }
}

function part6()  {
    for(let i = 20; i >= 0; i--) {
        console.log(i + " - C'est presque bon...");
    }
}

function part7()  {
    for(let i = 1; i <= 100; i += 15) {
        console.log(i + " - On tient le bon bout...");
    }
}

function part8()  {
    for(let i = 200; i >= 0; i -= 12) {
        console.log(i + " - Enfin ! ! !");
    }
}

export {part8};