Language = sentences:Sentence*
{
	return utils.getPrescripts() + (sentences ? sentences.join("") : "");
}