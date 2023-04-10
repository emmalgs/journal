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

