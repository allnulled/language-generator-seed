const path = require("path");
const importFresh = require("import-fresh");
const exec = require("execute-command-sync");
const Timer = require("just-a-timer");

require("chokidar")
	.watch(path.resolve(`${__dirname}/../src/grammars/*.pegjs`))
	.on("change", function() {
		const timer = new Timer();
		exec("clear");
		try {
			console.log("[*] Compiling source code.");
			importFresh(`${__dirname}/build.js`);
			console.log("[*] Successfully compiled.");
		} catch (error) {
			console.log("[!] Error in build.", error);
			return;
		}
		importFresh(`${__dirname}/test.js`)
			.then(data => {
				console.log(`[*] Everything done in: ${timer.time() / 1000} seconds.`);
			})
			.catch(error => {
				console.log("[!] Error in test.", error);
			});
	});
