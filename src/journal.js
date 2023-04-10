export function Log() {
  this.entries = {};
  this.entryId = 0;
}

Log.prototype.assignEntryId = function() {
  this.entryId++;
  return this.entryId;
};

Log.prototype.addEntry = function(entry) {
  this.entries[this.assignEntryId()] = entry;
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