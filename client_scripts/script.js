// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide('effortlessbuilding:randomizer_bag')
	event.hide('effortlessbuilding:golden_randomizer_bag')
	event.hide('effortlessbuilding:diamond_randomizer_bag')
})