import './css/styles.css';
import { Entry } from './journal.js';
import { Log } from './journal.js';

let log = new Log();
const title = "Day 1";
const body = "The sea is rough today and I think I may puke.";
let entry = new Entry(title, body);
entry.vowelsAndConsonants();
log.addEntry(entry);

function listEntries(logEntriesToDisplay) {
  let entriesDiv = document.querySelector("div#entries");
  entriesDiv.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(logEntriesToDisplay.entries).forEach(function(key) {
    const entry = logEntriesToDisplay.findEntry(key);
    const li = document.createElement("li");
    li.innerText = `${entry.title}: ${entry.getTeaser()}`;
    li.setAttribute("id", entry.id);
    ul.append(li);
  });
  entriesDiv.append(ul);
}

listEntries(log);

