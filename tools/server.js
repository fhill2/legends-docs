const liveServer = require("live-server");
const Path = require("path");
util = require("./util.js");

liveServer.start();
liveServer.watcher.on("change", function(e) {
    let path = Path.parse(e);
    if (e.indexOf(`${Path.sep}docs${Path.sep}`) != -1) {
        if (path.ext == ".md" || path.ext == ".markdown") {
            util.buildMarkdownFile(path);
        }
    }
});
