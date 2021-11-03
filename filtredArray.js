function unique(arr){ //funkcja zwracajaca tylko elementy unikatowe z tablicy
    if(!Array.isArray(arr)){
        throw Error('Nieprawidłowy parametr!');
    }
    return arr.filter((val, i) => arr.indexOf(val) === i);
}

const altUniqueElements = function(array){ //funkcja zwracajaca elementy unikatowe z obiektow iterowalnych, takich jak tablica, string, obiekt
    return [...new Set(array)]; //konstrukotr SET musi byc przekonwertowany do tablicy poniewaz domyslnie zwraca nowy obiekt zlozony z elementow unikatowych
}

const altUniqueElementsFromArray = function(array){ //funckja jest jeszcze lepsza poniewaz spelnia nasze zalozenie aby zwracac unikatowe elementy tylko z tablic
    if(!Array.isArray(array)){
        throw Error('Nieprawidlowy parametr!');
    }
    return [...new Set(array)]; //zastosowanie natywnej logiki jezyka przyspiesza jego prace i jest bardziej efektywne, rowniez bardziej odporne na bledy, niz tworzenie swojego algorytmu
}

const array1 = [2,3,4,4,2,1,5,1,5];
const number = 5;
const string = 'abcabcd';

console.log(unique(array1));
// console.log(unique(string));
console.log(altUniqueElements(array1));
console.log(altUniqueElements(string));

console.log(altUniqueElementsFromArray(array1));
console.log(altUniqueElementsFromArray(string));

