var name = 'Michael'; // 'var' is function specific

function sayHello(){
    var name ='John'
    console.log(`Hello ${name}`);
};

sayHello();
console.log(name);



const instructors = ['Jarrod', 'John', 'Sean', 'Stan']

for (const instructor of instructors){
    console.log(instructor);
}

function isNameInList(name){
    let isNameFound = false;
    for (const instructor of instructors){
        if (instructor === name){
            isNameFound = true;
        }
    }
    return isNameFound;
}

console.log(isNameInList('John'));

// 'let' & 'const' are block scoped
// 'const' cannot be reassigned