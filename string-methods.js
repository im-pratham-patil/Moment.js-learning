const string1 = "freeCodeCamp is the best place to learn."
const string2 = "frontend and backend development"

const log = console.log;

// charAt(index); -> returns the character at specified index.
    // log(string1.charAt(0));

// charCodeAt(index) -> returns the unicode no at specified index.
    // log(string1.charCodeAt(0));

// concat(string) -> joins two string and returns a new string.
    // log(string1.concat(string2));


//  endsWith(string) -> checks for a string ends with specified string or not.
    // log(string2.endsWith('development'));


// includes(str) -> checks whether given substring included in string 

    // log(string2.includes('end'));

// indexOf(substring) -> returns the first starting position of substring 

    // log(string2.indexOf('end'));

// lastIndexOf(substring) -> returns the last position of substring 
    // log(string2.lastIndexOf('end'))

// match(regex) -> matches against the regulat expression and gives an array of matched elemets
    // log(string2.match(/end/g));

// repeat(number) -> repeats the string with specified no's and returns it back
    // log(string2.repeat(2))

// replace(regex, 'replacement') -> replace the string with given replacement where the match is found
    // log(string2.replace(/end/g, 'END'))

// search('search item') -> 
    // log(string2.search('end'));

// slice(start, end);
    // log(string2.slice(0, 5));

// splite(delimiter);
    // log(string2.split(" "));

// startsWith('substr');
    // log(string2.startsWith('frontend')) // boolean is returned

// substr(start, length); substring(start, end);
    // log(string2.substr(13, 4));
    // log(string2.substring(13, 17))

// toLowerCase()
    // log((string2.toUpperCase()).toLowerCase());

// trim() => removes white spaces;
    // log(string2.trim());