export function Log() {
  this.entries = {};
  this.entryId = 0;
}

Log.prototype.assignEntryId = function() {
  this.entryId++;
  return this.entryId;
};

Log.prototype.addEntry = function(entry) {
  entry.id = this.assignEntryId();
  this.entries[entry.id] = entry;
};

Log.prototype.findEntry = function(id) {
  if (this.entries[id] !== undefined) {
    return this.entries[id];
  }
  return false;
};

Log.prototype.deleteEntry = function(id) {
  if (this.entries[id] === undefined) {
    return false;
  }
  delete this.entries[id];
  return true;
};

export function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.wordCount = function() {
    let words = 0;
    const textArray = this.body.split(" ");
    textArray.forEach(function(word) {
      if (!Number(word)) {
        words++;
      }
    });
    return words;
  };
}

Entry.prototype.vowelsAndConsonants = function() {
  const vowelRegex = /[aeiou]/gi;
  const consonantRegex = /[^aeiou\s]/gi;
  const vowelCount = this.body.match(vowelRegex);
  const consonantCount = this.body.match(consonantRegex);
  this.vowels = vowelCount.length;
  this.consonants = consonantCount.length;
};

Entry.prototype.getTeaser = function() {
  const sentenceRegex = /[.]/g;
  const index = this.body.search(sentenceRegex);
  const teaser = this.body.slice(0, index);
  const textArray = teaser.split(" ");
  if (textArray.length > 8) {
    const shortTeaser = textArray.slice(0, 8);
    return shortTeaser.join(' ') + '...';
  } else {
    return teaser + '...';
  }
};

