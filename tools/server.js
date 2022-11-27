const liveServer = require("live-server");
const { execSync } = require("child_process");
const Path = require("path");

// https://github.com/tapio/live-server/issues/340
function build_markdown_file(path) {
  console.log(`Converting ${path.base} --> ${path.name}.html`);
  let cmd = `cd docs/ && pandoc --verbose --defaults _codebraid_preview.yml -o ${path.name}.html ${path.base}`;

  execSync(cmd, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    if (stdout != "") console.log(stdout);
  });
}

liveServer.start();
liveServer.watcher.on("change", function (e) {
  let path = Path.parse(e);
  if (e.indexOf(`${Path.sep}docs${Path.sep}`) != -1) {
    if (path.ext == ".md" || path.ext == ".markdown") {
      build_markdown_file(path);
    }
  }
});
