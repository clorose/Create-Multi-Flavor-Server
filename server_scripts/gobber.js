ServerEvents.recipes(event => {

  event.remove({ output: 'gobber2:gobber2_ingot' })
  // gobber2:gobber2_ingot
  event.shapeless(Item.of("gobber2:gobber2_ingot"), [
    "gobber2:gobber2_glob",
    "gobber2:gobber2_glob",
    "gobber2:gobber2_glob",
    "gobber2:gobber2_glob",
    "minecraft:netherite_ingot",
    "minecraft:netherite_ingot",
    "minecraft:netherite_ingot",
    "minecraft:netherite_ingot"
  ])
  // gobber2:gobber2_ingot_nether
  event.remove({ output: 'gobber2:gobber2_ingot_nether' })
  event.shapeless(Item.of("gobber2:gobber2_ingot_nether"), [
    "gobber2:gobber2_glob_nether",
    "gobber2:gobber2_glob_nether",
    "gobber2:gobber2_glob_nether",
    "gobber2:gobber2_glob_nether",
    "gobber2:gobber2_ingot",
    "gobber2:gobber2_ingot",
    "gobber2:gobber2_ingot",
    "gobber2:gobber2_ingot"
  ])
  // gobber2:gobber2_ingot_end
  event.remove({ output: 'gobber2:gobber2_ingot_end' })
  event.shapeless(Item.of("gobber2:gobber2_ingot_end"), [
    "gobber2:gobber2_glob_end",
    "gobber2:gobber2_glob_end",
    "gobber2:gobber2_glob_end",
    "gobber2:gobber2_glob_end",
    "gobber2:gobber2_ingot_nether",
    "gobber2:gobber2_ingot_nether",
    "gobber2:gobber2_ingot_nether",
    "gobber2:gobber2_ingot_nether"
  ])
  // gobber2:gobber2_hammer
  event.remove({ output: 'gobber2:gobber2_hammer' })
  event.shaped(Item.of("gobber2:gobber2_hammer"), [
    "AAA",
    "AAA",
    " B "
  ], {
    A: "gobber2:gobber2_ingot",
    B: "gobber2:gobber2_rod"
  })
  // gobber2:gobber2_hammer_nether
  event.remove({ output: 'gobber2:gobber2_hammer_nether' })
  event.shaped(Item.of("gobber2:gobber2_hammer_nether"), [
    "AAA",
    "AAA",
    " B "
  ], {
    A: "gobber2:gobber2_ingot_nether",
    B: "gobber2:gobber2_rod_nether"
  })
  // gobber2:gobber2_hammer_end
  event.remove({ output: 'gobber2:gobber2_hammer_end' })
  event.shaped(Item.of("gobber2:gobber2_hammer_end"), [
    "AAA",
    "AAA",
    " B "
  ], {
    A: "gobber2:gobber2_ingot_end",
    B: "gobber2:gobber2_rod_end"
  })
  // gobber2:gobber2_tree_axe
  event.remove({ output: 'gobber2:gobber2_tree_axe' })
  event.shaped(Item.of("gobber2:gobber2_tree_axe"), [
    "AAA",
    "AB ",
    " B "
  ], {
    A: "gobber2:gobber2_ingot",
    B: "gobber2:gobber2_rod"
  })
  // gobber2:gobber2_tree_axe_nether
  event.remove({ output: 'gobber2:gobber2_tree_axe_nether' })
  event.shaped(Item.of("gobber2:gobber2_tree_axe_nether"), [
    "AAA",
    "AB ",
    " B "
  ], {
    A: "gobber2:gobber2_ingot_nether",
    B: "gobber2:gobber2_rod_nether"
  })
  // gobber2:gobber2_tree_axe_end
  event.remove({ output: 'gobber2:gobber2_tree_axe_end' })
  event.shaped(Item.of("gobber2:gobber2_tree_axe_end"), [
    "AAA",
    "AB ",
    " B "
  ], {
    A: "gobber2:gobber2_ingot_end",
    B: "gobber2:gobber2_rod_end"
  })
    // ender dragon egg recipe(for gobber2)
    event.shaped(Item.of("minecraft:dragon_egg"), [
      "ABA",
      "BCB",
      "ABA"
    ], {
      A: "minecraft:nether_star",
      B: "minecraft:end_crystal",
      C: "minecraft:dragon_head"
    })
    
})