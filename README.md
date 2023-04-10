# Secret Journal

#### By _**Emma Gerigscott**_

#### _A place to hide your inner thoughts...online_

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* npm
* webpack

## Description

A project to practice structuring with Node.js. This webpage let's you put in a title for your journal entry, your journal entry, and then lists all your journal entries. When you click on your journal entry you can view details like word count, vowels, and consonants, and you can also delete your secrets if you so choose.

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the root directory in your terminal and run ```$ npm install```_
* _Add any additional dependencies by running in the root directory ```$ npm install [package-name]```_
  - _include ```--save-dev``` flag if its a development dependency_
  - _list the package version if you want, for example: ```$ npm install webpack@4.46.0 --save-dev```_
  - _include ```--save-exact``` to save the exact version, for example ```$ npm install webpack@4.46.0 --save-dev --save-exact```_
* _After all packages are installed, to start the project's server, in the root directory in your terminal run ```$ npm run start```_


## Known Bugs

* _You cannot actually save any of your journal entries_

## License

Copyright (c) 2023 Emma Gerigscott

## TDD

Describe: Entry();

Test: "It should create an instance of an empty object with keys for title and body";  
Code: 
let entry = new Entry();  
entry;  
Expected Output: { 'title': '', 'body': '' };

Test: "It should create an instance of an Entry object with a title and body content when passed";  
Code:  
const title = "Day 1"  
const body = "The sea is rough today and I think I may puke."  
let entry = new Entry(title, body);  
entry;  
Expected Output : { 'title': 'Day 1', 'body': 'The sea is rough today and I think I may puke.' };

Test: "It should create an instance of an Entry object with a title and body content when passed and run the wordCount method";  
Code:  
const title = "Day 1"  
const body = "The sea is rough today and I think I may puke."  
let entry = new Entry(title, body);  
entry;  
Expected Output : { 'title': 'Day 1', 'body': 'The sea is rough today and I think I may puke.' wordCount: 11 };

Describe: Entry.prototype.vowelsAndConsonants() 

Test: "It should create keys vowels and consonants that count the number of vowels and consonants in the body of the entry"  
Code: 
const title = "Day 1"  
const body = "The sea is rough today and I think I may puke."  
let entry = new Entry(title, body);  
entry.vowelsAndConsonants();
Expected Output: { 'title': 'Day 1', 'body': 'The sea is rough today and I think I may puke.' wordCount: 11, vowels: 15, consonants: 21 };

Describe: Entry.prototype.getTeaser();

Test: "It should return the first sentence when called on an instance of entry"  
Code: 
const title = "Day 1"  
const body = "The sea is rough today and I think I may puke."  
let entry = new Entry(title, body);  
entry.getTeaser();
Expected Output: "The sea is rough today and I think I may puke.";

Test: "It should return the first 8 words if the sentence is longer than 8 when called on an instance of entry"  
Code: 
const title = "Day 1"  
const body = "The sea is rough today and I think I may puke."  
let entry = new Entry(title, body);  
entry.getTeaser();
Expected Output: "The sea is rough today and I think...";


Describe: Log();

Test: "It will add each instance of an entry object to an instance of the Log object, with an id number for each entry."  
Code:  
const title = "Day 1"  
const body = "The sea is rough today and I think I may puke."  
let entry = new Entry(title, body);  
let log = new Log();  
log.addEntry(entry);  
log;  
Expected Output: { entries: 1: { 'title': 'Day 1', 'body': 'The sea is rough today and I think I may puke.' }, entryId = 1 };

