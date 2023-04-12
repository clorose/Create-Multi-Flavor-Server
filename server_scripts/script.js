// priority: 0
// GM 테스트 서버
console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// sophisticated stack upgrade disabled
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_2' })
	event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_2' })
	
	//angelring:energetic_angels_ring recipe
	event.remove({ output: 'angelring:energetic_angel_ring' })
	event.shaped(Item.of("angelring:energetic_angel_ring"), [
		"ABA",
		"CDC",
		"EBE"
	], {
		A: "minecraft:netherite_block",
		B: "minecraft:redstone_block",
		C: "minecraft:gold_block",
		D: "angelring:angel_ring",
		E: "minecraft:nether_star"
	})
	//angelring:leadstone_angels_ring recipe
	event.remove({ output: 'angelring:leadstone_angel_ring' })
	event.shaped(Item.of("angelring:leadstone_angel_ring"), [
		"ABA",
		"CDC",
		"EBE"
	], {
		A: "minecraft:netherite_block",
		B: "minecraft:diamond_block",
		C: "immersiveengineering:storage_lead",
		D: "angelring:energetic_angel_ring",
		E: "minecraft:nether_star"
	})
		//angelring:hardened_angels_ring recipe
		event.remove({ output: 'angelring:hardened_angel_ring' })
		// event.shaped(Item.of("angelring:hardened_angel_ring"), [
		// 	"ABA",
		// 	"CDC",
		// 	"EBE"
		//], {})
		//angelring:reinforced_angels_ring recipe
		event.remove({ output: 'angelring:reinforced_angel_ring' })
		// event.shaped(Item.of("angelring:reinforced_angel_ring"), [
		// 	"ABA",
		// 	"CDC",
		// 	"EBE"
		// ], {})
		//angelring:signalum_angels_ring recipe
		event.remove({ output: 'angelring:signalum_angel_ring' })
		// event.shaped(Item.of("angelring:signalum_angel_ring"), [
		// 	"ABA",
		// 	"CDC",
		// 	"EBE"
		// ], {})
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})