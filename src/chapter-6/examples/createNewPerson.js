function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function () {
        console.log('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
}

// create a new person by calling this function
var salva = createNewPerson('Salva');
salva.name;
salva.greeting();

