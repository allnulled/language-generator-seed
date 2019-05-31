const fs = require("fs");
const importFresh = require("import-fresh");
const language = importFresh(`${__dirname}/../src/language.js`);
const {expect, assert} = require("chai");

describe("Language tests", function() {

	fs.readdirSync(`${__dirname}/samples/input`).forEach(example => {
		it(example, function() {
			const contents = fs.readFileSync(`${__dirname}/samples/input/${example}`).toString();
			const contentsOutput = fs.readFileSync(`${__dirname}/samples/output/${example}`).toString();
			const output = language.parse(contents);
			expect(output).to.equal(contentsOutput);
		});
	});

});