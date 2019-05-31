const fs = require("fs");
const pegjs = require("pegjs");
const importFresh = require("import-fresh");

const contents = fs
	.readdirSync(`${__dirname}/../src/grammars`)
	.reduce((result, file) => {
		result += fs.readFileSync(`${__dirname}/../src/grammars/${file}`).toString() + "\n\n";
		return result;
	}, "");

fs.writeFileSync(`${__dirname}/../src/language.pegjs`, contents, "utf8");

const parserSource = pegjs.generate(contents, {
	allowedStartRules: ["Language"],
	format: "commonjs",
	output: "source"
	//trace: true
});

fs.writeFileSync(`${__dirname}/../src/language.js`, parserSource, "utf8");
