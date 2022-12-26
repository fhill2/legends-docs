var hasbin = require("hasbin");
const { execSync } = require("child_process");
const Path = require("path");
const fs = require("fs");
const YAML = require("yaml");

// ensure all shell functions reference the git root of the project
// because process.cwd() and __dirname can change depending on:
// - running a server function manually
// - running as the server to convert the documents

// cwd when called from npm run dev -> node tools/server.js
// process.cwd() -> git root
// __dirname /tools/

const ROOT = (function() {
  return execSync("git rev-parse --show-toplevel").toString().trim();
})();

// https://github.com/tapio/live-server/issues/340
function buildExec(cmd) {
  execSync(
    cmd,
    {
      cwd: Path.join(ROOT, "docs"),
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
function generateWordCount() {
  // make build directory if it does not exist so word counts can be saved into folder
  let tmpdir = Path.join(ROOT, "build");
  if (!fs.existsSync(tmpdir)) {
    fs.mkdirSync(tmpdir);
  }

  // get the filenames to count
  filesToCount = YAML.parse(
    fs.readFileSync(Path.join(ROOT, "docs", ".gen_master.yml"), "utf-8")
  )["input-files"].filter(
    (item) =>
      !["appendix.md", "references.md", "meeting-agenda.md"].includes(item)
  );

  // count the words of every file included in the master generated report
  const wordCounts = {};
  let total = 0;
  filesToCount.forEach((filename) => {
    let cmd = `pandoc --lua-filter tools/filter-tables-images.lua --strip-comments -t plain docs/${filename} | wc -w`;
    wordCount = parseInt(execSync(cmd, { cwd: ROOT }).toString().trim());
    wordCounts[filename] = wordCount;
    total = total + wordCount;
  });
  wordCounts["total"] = total;

  console.log("========== Word Count Output ==========");
  console.log(wordCounts);

  // save the word count to a file in /build
  fs.writeFileSync(
    Path.join(ROOT, "build", "wordCounts.json"),
    JSON.stringify(wordCounts, null, 4),
    "utf-8"
  );
}

pandocCmd = "pandoc --verbose --defaults .gen_shared.yml";
function buildMarkdownFile(path) {
  // ensure external deps are available
  hasbin("pandoc", function(result) {
    if (!result) {
      console.log("pandoc not found on PATH - quitting..");
      process.exit();
    }
  });
  hasbin("prince", function(result) {
    if (!result) {
      console.log("prince not found on PATH - quitting..");
      process.exit();
    }
  });

  console.log(
    "========== Generating Word count for all markdown files =========="
  );

  // Generate Individual File - HTML
  console.log(
    `========== Converting ${path.base} --> ${path.name}.html ==========`
  );
  buildExec(`${pandocCmd} -o ${path.name}.html ${path.base}`);

  // Generate Individual File PDF
  console.log(
    `========== Converting ${path.name}.html --> ${path.name}.pdf ==========`
  );
  buildExec(`prince -o ${path.name}.pdf ${path.name}.html`);

  // as --include-before-body inputs an HTML file and not MD, ensure the header file exists as HTML
  console.log(`========== Generating Header for Report.html ==========`);
  buildExec(`${pandocCmd} -o header.html header.md`);

  // Generate master Report HTML
  console.log(
    `========== Generating Report.html. Converting report.html -> report.pdf ==========`
  );
  buildExec(`${pandocCmd} --defaults .gen_master.yml -o report.html`);

  // Generate master Report PDF
  console.log(`========= Converting report.html --> report.pdf =========`);
  buildExec(`prince -o report.pdf report.html`);


  generateWordCount(path);
}

module.exports = {
  generateWordCount,
  buildMarkdownFile,
};
