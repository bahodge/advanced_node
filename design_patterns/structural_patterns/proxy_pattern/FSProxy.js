class FSProxy {
  constructor(fsSubject) {
    this.fs = fsSubject;
  }

  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error("Can only read markdown files"));
    }
    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.error(error);
        return callback(error);
      }
      return callback(null, contents);
    });
  }

  // should do all the other methods ...
}

module.exports = FSProxy;
