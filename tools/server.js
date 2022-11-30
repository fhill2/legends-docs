const liveServer = require("live-server");
const { execSync } = require("child_process");
const Path = require("path");
var hasbin = require("hasbin");

// cwd when called from npm run dev -> node tools/server.js
// process.cwd() -> git root
// __dirname /tools/

hasbin("pandoc", function (result) {
  if (!result) {
    console.log("pandoc not found on PATH - quitting..");
    process.exit();
  }
});

hasbin("weasyprint", function (result) {
  if (!result) {
    console.log("weasyprint not found on PATH - quitting..");
    process.exit();
  }
});

// https://github.com/tapio/live-server/issues/340
function buildExec(cmd) {
  execSync(
    cmd,
    {
      cwd: Path.join(process.cwd(), "docs"),
    },
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      if (stdout != "") console.log(stdout);
    }
  );
}

function build_markdown_file(path) {
  // Generate Individual File - HTML
  console.log(
    `========== Converting ${path.base} --> ${path.name}.html ==========`
  );
  buildExec(
    `pandoc --verbose --defaults .gen_shared.yml -o ${path.name}.html ${path.base}`
  );

  // Generate Individual File PDF
  console.log(
    `========== Converting ${path.name}.html --> ${path.name}.pdf ==========`
  );
  buildExec(`weasyprint ${path.name}.html ${path.name}.pdf`);

  console.log(`========== Generating Report.html ==========`);
  buildExec(
    `pandoc --defaults .gen_shared.yml --defaults .gen_master.yml -o report.html`
  );

  console.log(`========= Converting report.html --> report.pdf =========`);
  buildExec(`weasyprint report.html report.pdf`)

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
