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

function displayEntryDetails(event) {
  const entry = log.findEntry(event.target.id);
  entry.vowelsAndConsonants();
  document.querySelector(".title").innerText = entry.title;
  document.querySelector(".body").innerText = entry.body;
  document.querySelector(".word-count").innerText = entry.wordCount();
  document.querySelector(".vowels").innerText = entry.vowels;
  document.querySelector(".consonants").innerText = entry.consonants;
  document.querySelector("button.delete").setAttribute("id", entry.id);
  document.querySelector("div#entry-details").removeAttribute("class");
}

function handleDelete(event) {
  log.deleteEntry(event.target.id);
  document.querySelector("button.delete").removeAttribute("id");
  document.querySelector("div#entry-details").setAttribute("class", "hidden");
  listEntries(log);
}

function handleFormSubmission() {
  event.preventDefault();
  const inputtedTitle = document.querySelector("input#title").value;
  const inputtedBody = document.querySelector("textarea#body").value;
  let newEntry = new Entry(inputtedTitle, inputtedBody);
  log.addEntry(newEntry);
  listEntries(log);
  document.querySelector("input#title").value = null;
  document.querySelector("textarea#body").value = null;
}

document.querySelector("form").addEventListener("submit", handleFormSubmission);
document.querySelector("div#entries").addEventListener("click", displayEntryDetails);
document.querySelector("button.delete").addEventListener("click", handleDelete);



