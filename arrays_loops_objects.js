//Collections

//Arrays - ordered collection where element has an index
//Arrays - same as lists in Python


//Objects - unordered collection where each element has a key value pair
//Objects - same as Dicts in Python


//Array is []
var sports = ['football', 'tennis', 'rugby'];
console.log(sports);

var numberOfElements = sports.length;
console.log('number of elements:', numberOfElements);

// find elementsat a given index
var firstSport = sports[0];
console.log('first sport:',firstSport);

sports.push('curling')
console.log('updated sports:', sports);

// remove from end of array
sports.pop();
console.log('after remove:', sports);

// add to start of array
sports.unshift('golf');
console.log('updated sports:', sports);



// remove from start of array
sports.shift();
console.log('after remove:', sports);

//remove from middle of array
var removedSport =sports.splice(1,1);
console.log('removed sport:',removedSport);
console.log('sport after splice:',sports);

//insert into middle of array
var removedSport =sports.splice(1,0,'basketball');
console.log('removed sport:',removedSport);
console.log('sport after splice:',sports);



//LOOPS

for (var currentSport of sports){
    var upperCasedSports = currentSport.toUpperCase();
    console.log(upperCasedSports);
};

// long form for loop

// for(initial counter ; true/false condition ; increment counter)

for (var i = 0 ; i <sports.length ; i++){
    var currentSport = sports[i];
    var upperCasedSports = currentSport.toUpperCase();
    console.log(upperCasedSports);
};





// Objects

var movie = {
    title: "It's a Wonderful life",
    year: 1946,
    language: 'Spanish'
};
console.log(movie);
console.log('Movie name:',movie.title);


movie.cast =['James Stewart', 'Donna Reid']
console.log(movie);


movie.language ='English'
console.log(movie);

movie['subtitle-language'] = 'French';
console.log(movie);



//for loop in an object  'in' used for keys
for(var key in movie){
    var value = movie[key];
    console.log(`The ${key} is ${value}`);
};

var keys = Object.keys(movie);
console.log(keys);


