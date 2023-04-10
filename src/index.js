import './css/styles.css';
import { Entry } from './journal.js';
import { Log } from './journal.js';

const title = "Day 1";
const body = "The sea is rough today and I think I may puke.";
let entry = new Entry(title, body);

let log = new Log();
log.addEntry(entry);

document.getElementById("test-output").innerText = `${log.entries[1].title}: ${log.entries[1].body}, ${log.entries[1].wordCount()}`;