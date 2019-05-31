const utils = {};
utils.definedPrescripts = {};
utils.prescripts = {};
utils.getPrescripts = () => {
	return Object.keys(utils.prescripts).map(name => {
		return utils.prescripts[name];
	}).join("\n");
};
utils.setPrescript = (name, contents) => {
	if(!(name in utils.prescripts)) {
		utils.prescripts[name] = contents;
	}
};
utils.definePrescript = (name, contents) => {
	if(!(name in utils.prescripts)) {
		utils.definedPrescripts[name] = contents;
	}
};
utils.addPrescript = (name) => {
	if(!(name in utils.prescripts)) {
		utils.prescripts[name] = utils.definedPrescripts[name];
	}
}
