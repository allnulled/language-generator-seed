Language = sentences:Sentence*
{
	return utils.getPrescripts() + sentences.join("");
}