ServerEvents.recipes(event => {
  // Effortless Building's all bag remove
  event.remove({ output: 'effortlessbuilding:randomizer_bag' })
  event.remove({ output: 'effortlessbuilding:golden_randomizer_bag' })
  event.remove({ output: 'effortlessbuilding:diamond_randomizer_bag' })
  // Effortless Building's all bag recipe
})