module.exports = new Promise((resolve, reject) => {
	const fs = require("fs");
	const path = require("path");
	const testDir = `${__dirname}/../test`;
	const importFresh = require("import-fresh");
	const Mocha = importFresh("mocha");
	const mocha = new Mocha();
	fs.readdirSync(testDir)
		.filter(file => file.substr(-8) === ".test.js")
		.forEach(file => {
			const filepath = path.join(testDir, file);
			delete require.cache[filepath];
			mocha.addFile(filepath);
		});
	console.log("[*] Running tests...");
	mocha.run(failures => {
		if (failures) {
			reject(failures);
		} else {
			resolve(failures);
		}
	});
});
