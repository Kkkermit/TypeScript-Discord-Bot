import { CommandBuilder } from "../../util/CommandBuilder";

export default new CommandBuilder({
	data: {
		name: "test",
		description: "Test!",
	},
	async run(client, interaction) {
		interaction.reply("Test!");
	},
});
