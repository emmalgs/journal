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
}