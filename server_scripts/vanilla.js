ServerEvents.recipes(event => {
  // nether star recipe 
  // ( A : wither Skeleton Skull, B : Soul Sand, C: diamond_sword, D: shield) 
  // AAA BBB CBD
  // remaining shield, diamond_sword)
  event.shaped(Item.of("minecraft:nether_star"), [
    "AAA",
    "BBB",
    "CBD"
  ], {
    A: "minecraft:wither_skeleton_skull",
    B: "minecraft:soul_sand",
    C: Item.of("minecraft:diamond_sword").ignoreNBT(),
    D: Item.of("minecraft:shield").ignoreNBT()
  }).damageIngredient(Item.of("minecraft:diamond_sword").ignoreNBT(), 157).damageIngredient(Item.of("minecraft:shield").ignoreNBT(), 34)
  // Wither_Skeleton_Skull recipe
  event.shaped(Item.of("minecraft:wither_skeleton_skull"), [
    "AAA",
    "ABA",
    "AAA"
  ], {
    A: "minecraft:coal",
    B: "minecraft:skeleton_skull"
  })
  // blaze Rod recipe
  event.shapeless(Item.of("minecraft:blaze_rod", 2), [
    "minecraft:magma_cream",
    "#minecraft:stick"
  ])
  //enchanted golden apple recipe
  event.shaped(Item.of("minecraft:enchanted_golden_apple"), [
    "AAA",
    "ABA",
    "AAA"
  ], {
    A: "minecraft:gold_block",
    B: "minecraft:golden_apple"
  })
  // creeper head to gunpowder recipe
  event.shapeless(Item.of("minecraft:gunpowder", 16), [
    "minecraft:creeper_head"
  ])
  // zombie head to rotten flesh recipe
  event.shapeless(Item.of("minecraft:rotten_flesh", 16), [
    "minecraft:zombie_head"
  ])
  // skeleton head to bone meal recipe
  event.shapeless(Item.of("minecraft:bone_meal", 16), [
    "minecraft:skeleton_skull"
  ])
  // saddle recipe
  event.shaped(Item.of("minecraft:saddle"), [
    "AAA",
    "B B",
    "C C"
  ], {
    A: "minecraft:leather",
    B: "minecraft:string",
    C: "minecraft:iron_ingot",
  })
  // bell recipe
  event.shaped(Item.of("minecraft:bell"), [
    "ABA",
    "A A",
  ], {
    A: "minecraft:stick",
    B: "minecraft:gold_ingot",
  })
  // trident recipe
  event.shaped(Item.of("minecraft:trident"), [
    " AA",
    " BA",
    "C  ",
  ], {
    A: "minecraft:prismarine_shard",
    B: "minecraft:prismarine_bricks",
    C: "minecraft:diamond",
  })
  // name tag recipe
  event.shaped(Item.of("minecraft:name_tag"), [
    "  A",
    " B ",
    "C  ",
  ], {
    A: "minecraft:iron_ingot",
    B: "minecraft:paper",
    C: "minecraft:ink_sac",
  })
  // chainmail recipe
  event.shaped(Item.of("minecraft:chainmail_boots"), [
    "A A",
    "A A",
  ], {
    A: "minecraft:chain",
  })
  event.shaped(Item.of("minecraft:chainmail_leggings"), [
    "AAA",
    "A A",
    "A A",
  ], {
    A: "minecraft:chain",
  })
  event.shaped(Item.of("minecraft:chainmail_chestplate"), [
    "A A",
    "AAA",
    "AAA",
  ], {
    A: "minecraft:chain",
  })
  event.shaped(Item.of("minecraft:chainmail_helmet"), [
    "AAA",
    "A A",
  ], {
    A: "minecraft:chain",
  })
  // glow stone recipe
  event.shaped(Item.of("minecraft:glowstone", 4), [
    "AAA",
    "ABA",
    "AAA",
  ], {
    A: "minecraft:glowstone_dust",
    B: "minecraft:glass",
  })
  // soul sand to soul soil recipe
  event.shaped(Item.of("minecraft:soul_soil", 4), [
    "AA ",
    "AA ",
  ], {
    A: "minecraft:soul_sand",
  })
  // soul soil to soul sand recipe
  event.shaped(Item.of("minecraft:soul_sand", 4), [
    "AA ",
    "AA ",
  ], {
    A: "minecraft:soul_soil",
  })
  // dirt to clay recipe and remaining water bucket
  event.shaped(Item.of("minecraft:clay", 8), [
    "AAA",
    "ABA",
    "AAA",
  ], {
    A: "#minecraft:dirt",
    B: "minecraft:water_bucket",
  }, event => {
    event.remove({output: "minecraft:water_bucket"})
  })
  // Allthemodium apple recipe
  event.remove({output: "allthemodium:allthemodium_apple"})
  event.shaped(Item.of("allthemodium:allthemodium_apple"), [
    "AAA",
    "ABA",
    "AAA",
  ], {
    A: "allthemodium:allthemodium_nugget",
    B: "minecraft:golden_apple",
  })
  // Allthemodium carrot recipe
  event.remove({output: "allthemodium:allthemodium_carrot"})
  event.shaped(Item.of("allthemodium:allthemodium_carrot"), [
    "AAA",
    "ABA",
    "AAA",
  ], {
    A: "allthemodium:allthemodium_nugget",
    B: "minecraft:golden_carrot",
  })
})