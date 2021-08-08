const compareSet = (mainHand, offHand, head, armor, shoes) => {
  let avaHammerTank = [
    "2H_ICECRYSTAL_UNDEAD",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_AVALON",
    "SHOES_LEATHER_SET2",
  ];
  let oneHandFrost = [
    "MAIN_FROSTSTAFF",
    "OFF_JESTERCANE_HELL",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let oneHandFrost2 = [
    "MAIN_FROSTSTAFF",
    "OFF_SHIELD_HELL",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let cursedSkull = [
    "2H_SKULLORB_HELL",
    "HEAD_LEATHER_SET3",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_ROYAL",
  ];
  let cursedSkull2 = [
    "2H_SKULLORB_HELL",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET2",
    "SHOES_LEATHER_SET2",
  ];
  let greatAxe1 = [
    "2H_AXE",
    "HEAD_CLOTH_SET1",
    "ARMOR_PLATE_SET1",
    "SHOES_LEATHER_SET2",
  ];
  let greatAxe2 = [
    "2H_AXE",
    "HEAD_CLOTH_SET1",
    "ARMOR_LEATHER_HELL",
    "SHOES_LEATHER_SET2",
  ];
  let greatAxe3 = [
    "2H_AXE",
    "HEAD_CLOTH_SET1",
    "ARMOR_LEATHER_UNDEAD",
    "SHOES_LEATHER_SET2",
  ];
  let bridledFury = [
    "2H_DAGGER_KATAR_AVALON",
    "HEAD_LEATHER_MORGANA",
    "ARMOR_LEATHER_HELL",
    "SHOES_LEATHER_SET2",
  ];
  let bridledFury2 = [
    "2H_DAGGER_KATAR_AVALON",
    "HEAD_LEATHER_ROYAL",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_ROYAL",
  ];
  let shadowCaller = [
    "MAIN_CURSEDSTAFF_AVALON",
    "OFF_SPIKEDSHIELD_MORGANA",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let shadowCaller2 = [
    "MAIN_CURSEDSTAFF_AVALON",
    "OFF_SPIKEDSHIELD_MORGANA",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let grailSeeker = [
    "2H_QUARTERSTAFF_AVALON",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_SET2",
    "SHOES_LEATHER_SET2",
  ];
  let grailSeeker2 = [
    "2H_QUARTERSTAFF_AVALON",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_HELL",
    "SHOES_LEATHER_SET2",
  ];
  let soulscythe2 = [
    "2H_TWINSCYTHE_HELL",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_HELL",
    "SHOES_LEATHER_SET2",
  ];
  let soulScythe = [
    "2H_TWINSCYTHE_HELL",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_SET2",
    "SHOES_LEATHER_SET2",
  ];
  let groveKeeper = [
    "2H_RAM_KEEPER",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_SET3",
    "SHOES_LEATHER_SET2",
  ];
  let groveKeeper2 = [
    "2H_RAM_KEEPER",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_KEEPER",
    "SHOES_LEATHER_SET2",
  ];
  let morningstar = [
    "2H_FLAIL",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_KEEPER",
    "SHOES_LEATHER_SET2",
  ];
  let morningstar2 = [
    "2H_FLAIL",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_HELL",
    "SHOES_LEATHER_SET2",
  ];
  let camlaan = [
    "2H_MACE_MORGANA",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_KEEPER",
    "SHOES_LEATHER_SET2",
  ];
  let camlaan2 = [
    "2H_MACE_MORGANA",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_HELL",
    "SHOES_LEATHER_SET2",
  ];
  let rampant = [
    "2H_NATURESTAFF_KEEPER",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let rampant2 = [
    "2H_NATURESTAFF_KEEPER",
    "HEAD_LEATHER_SET1",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let wild = [
    "2H_WILDSTAFF",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let wild2 = [
    "2H_WILDSTAFF",
    "HEAD_LEATHER_SET1",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let greatHoly = [
    "2H_HOLYSTAFF",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let greatHoly2 = [
    "2H_HOLYSTAFF",
    "HEAD_LEATHER_SET1",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let fallen = [
    "2H_HOLYSTAFF_HELL",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let fallen2 = [
    "2H_HOLYSTAFF_HELL",
    "HEAD_LEATHER_SET1",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let icicle = [
    "2H_ICEGAUNTLETS_HELL",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let icicle2 = [
    "2H_ICEGAUNTLETS_HELL",
    "HEAD_PLATE_KEEPER",
    "ARMOR_PLATE_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let damnation = [
    "2H_CURSEDSTAFF_MORGANA",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET1",
    "SHOES_CLOTH_SET1",
  ];
  let damnation2 = [
    "2H_CURSEDSTAFF_MORGANA",
    "HEAD_LEATHER_ROYAL",
    "ARMOR_CLOTH_SET1",
    "SHOES_CLOTH_ROYAL",
  ];
  let arcane1 = [
    "MAIN_ARCANESTAFF",
    "OFF_HORN_KEEPER",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let arcane2 = [
    "MAIN_ARCANESTAFF",
    "OFF_HORN_KEEPER",
    "HEAD_LEATHER_SET1",
    "ARMOR_PLATE_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let arcane3 = [
    "MAIN_ARCANESTAFF",
    "OFF_SHIELD_HELL",
    "HEAD_PLATER_KEEPER",
    "ARMOR_PLATE_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let locus = [
    "2H_ENIGMATICORB_MORGANA",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_KEEPER",
    "SHOES_CLOTH_SET1",
  ];
  let locu2 = [
    "2H_ENIGMATICORB_MORGANA",
    "HEAD_LEATHER_SET1",
    "ARMOR_PLATE_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let locus3 = [
    "2H_ENIGMATICORB_MORGANA",
    "HEAD_LEATHER_SET3",
    "ARMOR_PLATE_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let enigma = [
    "2H_ENIGMATICSTAFF",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_KEEPER",
    "SHOES_CLOTH_SET1",
  ];
  let enigma2 = [
    "2H_ENIGMATICSTAFF",
    "HEAD_LEATHER_SET1",
    "ARMOR_PLATE_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let enigma3 = [
    "2H_ENIGMATICSTAFF",
    "HEAD_LEATHER_SET3",
    "ARMOR_PLATE_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let occult = [
    "2H_ARCANESTAFF_HELL",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_KEEPER",
    "SHOES_CLOTH_SET1",
  ];
  let occult2 = [
    "2H_ARCANESTAFF_HELL",
    "HEAD_LEATHER_SET1",
    "ARMOR_PLATE_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let occult3 = [
    "2H_ARCANESTAFF_HELL",
    "HEAD_LEATHER_SET3",
    "ARMOR_PLATE_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let dual = [
    "2H_DUALSWORD",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_SET1",
    "SHOES_CLOTH_SET1",
  ];
  let dual2 = [
    "2H_DUALSWORD",
    "HEAD_PLATE_SET2",
    "ARMOR_LEATHER_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let spiritHunter = [
    "2H_HARPOON_HELL",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let spiritHunter2 = [
    "2H_HARPOON_HELL",
    "HEAD_LEATHER_ROYAL",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_ROYAL",
  ];
  let clarent = [
    "MAIN_SCIMITAR_MORGANA",
    "OFF_SPIKEDSHIELD_MORGANA",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_SET1",
    "SHOES_LEATHER_SET2",
  ];
  let clarent2 = [
    "MAIN_SCIMITAR_MORGANA",
    "OFF_SPIKEDSHIELD_MORGANA",
    "HEAD_LEATHER_MORGANA",
    "ARMOR_LEATHER_HELL",
    "SHOES_LEATHER_SET2",
  ];
  let clarent3 = [
    "MAIN_SCIMITAR_MORGANA",
    "OFF_SPIKEDSHIELD_MORGANA",
    "HEAD_LEATHER_MORGANA",
    "ARMOR_LEATHER_KEEPER",
    "SHOES_LEATHER_SET2",
  ];
  let gala = [
    "2H_DUALSCIMITAR_UNDEAD",
    "HEAD_LEATHER_MORGANA",
    "ARMOR_LEATHER_HELL",
    "SHOES_CLOTH_ROYAL",
  ];
  let gala2 = [
    "2H_DUALSCIMITAR_UNDEAD",
    "HEAD_LEATHER_ROYAL",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET3",
  ];
  let dayBreaker = [
    "MAIN_SPEAR_LANCE_AVALON",
    "OFF_SPIKEDSHIELD_MORGANA",
    "HEAD_PLATE_SET1",
    "ARMOR_LEATHER_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let dayBreaker2 = [
    "MAIN_SPEAR_LANCE_AVALON",
    "OFF_SPIKEDSHIELD_MORGANA",
    "HEAD_PLATE_SET1",
    "ARMOR_PLATE_SET1",
    "SHOES_CLOTH_SET1",
  ];
  let dayBreaker3 = [
    "MAIN_SPEAR_LANCE_AVALON",
    "OFF_HORN_KEEPER",
    "HEAD_LEATHER_SET1",
    "ARMOR_PLATE_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let realmBreaker = [
    "2H_AXE_AVALON",
    "HEAD_CLOTH_SET1",
    "ARMOR_LEATHER_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let realmBreaker2 = [
    "2H_AXE_AVALON",
    "HEAD_CLOTH_SET1",
    "ARMOR_PLATE_SET1",
    "SHOES_CLOTH_SET1",
  ];
  let halberd = [
    "2H_HALBERD",
    "HEAD_PLATE_SET2",
    "ARMOR_PLATE_SET1",
    "SHOES_CLOTH_SET1",
  ];
  let halberd2 = [
    "2H_HALBERD",
    "HEAD_CLOTH_SET1",
    "ARMOR_LEATHER_HELL",
    "SHOES_CLOTH_SET1",
  ];
  let halberd3 = [
    "2H_HALBERD",
    "HEAD_CLOTH_SET1",
    "ARMOR_LEATHER_KEEPER",
    "SHOES_CLOTH_SET1",
  ];
  let dawnsong = [
    "2H_FIRE_RINGPAIR_AVALON",
    "HEAD_LEATHER_ROYAL",
    "ARMOR_CLOTH_SET1",
    "SHOES_CLOTH_ROYAL",
  ];
  let dawnsong2 = [
    "2H_FIRE_RINGPAIR_AVALON",
    "HEAD_LEATHER_SET3",
    "ARMOR_CLOTH_SET1",
    "SHOES_CLOTH_SET1",
  ];
  let shaper = [
    "2H_CROSSBOW_CANNON_AVALON",
    "HEAD_LEATHER_ROYAL",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_ROYAL",
  ];
  let shaper2 = [
    "2H_CROSSBOW_CANNON_AVALON",
    "HEAD_LEATHER_SET3",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let mistpiercer = [
    "2H_BOW_AVALON",
    "HEAD_LEATHER_ROYAL",
    "ARMOR_CLOTH_SET1",
    "SHOES_CLOTH_ROYAL",
  ];
  let mistpiercer2 = [
    "2H_BOW_AVALON",
    "HEAD_LEATHER_SET3",
    "ARMOR_CLOTH_SET1",
    "SHOES_CLOTH_SET1",
  ];
  let perma = [
    "2H_ICECRYSTAL_UNDEAD",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET1",
    "SHOES_CLOTH_SET1",
  ];
  let perma2 = [
    "2H_ICECRYSTAL_UNDEAD",
    "HEAD_CLOTH_ROYAL",
    "ARMOR_CLOTH_SET1",
    "SHOES_CLOTH_ROYAL",
  ];
  let brimstone = [
    "2H_FIRESTAFF_HELL",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET1",
    "SHOES_CLOTH_SET1",
  ];
  let brimstone2 = [
    "2H_FIRESTAFF_HELL",
    "HEAD_LEATHER_ROYAL",
    "ARMOR_CLOTH_SET1",
    "SHOES_CLOTH_ROYAL",
  ];
  let siegebow = [
    "2H_CROSSBOWLARGE_MORGANA",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_SET1",
  ];
  let siegebow2 = [
    "2H_CROSSBOWLARGE_MORGANA",
    "HEAD_PLATE_SET2",
    "ARMOR_CLOTH_SET2",
    "SHOES_CLOTH_ROYAL",
  ];
  let weapon = mainHand.Type.toString();
  if (offHand == null) {
    if (weapon.includes(avaHammerTank[0])) {
      if (sets(mainHand, offHand, head, armor, shoes, avaHammerTank) == false)
        return true;
    } else if (weapon.includes(siegebow[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, siegebow) == false) |
        (sets(mainHand, offHand, head, armor, shoes, siegebow2) == false)
      )
        return true;
    } else if (weapon.includes(brimstone[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, brimstone) == false) |
        (sets(mainHand, offHand, head, armor, shoes, brimstone2) == false)
      )
        return true;
    } else if (weapon.includes(perma[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, perma) == false) |
        (sets(mainHand, offHand, head, armor, shoes, perma2) == false)
      )
        return true;
    } else if (weapon.includes(mistpiercer[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, mistpiercer) == false) |
        (sets(mainHand, offHand, head, armor, shoes, mistpiercer2) == false)
      )
        return true;
    } else if (weapon.includes(shaper[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, shaper) == false) |
        (sets(mainHand, offHand, head, armor, shoes, shaper2) == false)
      )
        return true;
    } else if (weapon.includes(dawnsong[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, dawnsong2) == false) |
        (sets(mainHand, offHand, head, armor, shoes, dawnsong2) == false)
      )
        return true;
    } else if (weapon.includes(halberd[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, halberd) == false) |
        (sets(mainHand, offHand, head, armor, shoes, halberd2) == false) |
        (sets(mainHand, offHand, head, armor, shoes, halberd3) == false)
      )
        return true;
    } else if (weapon.includes(realmBreaker[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, realmBreaker) == false) |
        (sets(mainHand, offHand, head, armor, shoes, realmBreaker2) == false)
      )
        return true;
    } else if (weapon.includes(gala[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, gala) == false) |
        (sets(mainHand, offHand, head, armor, shoes, gala2) == false)
      )
        return true;
    } else if (weapon.includes(spiritHunter[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, spiritHunter) == false) |
        (sets(mainHand, offHand, head, armor, shoes, spiritHunter2) == false)
      )
        return true;
    } else if (weapon.includes(dual[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, dual) == false) |
        (sets(mainHand, offHand, head, armor, shoes, dual2) == false)
      )
        return true;
    } else if (weapon.includes(occult[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, occult) == false) |
        (sets(mainHand, offHand, head, armor, shoes, occult2) == false) |
        (sets(mainHand, offHand, head, armor, shoes, occult3) == false)
      )
        return true;
    } else if (weapon.includes(enigma[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, enigma) == false) |
        (sets(mainHand, offHand, head, armor, shoes, enigma2) == false) |
        (sets(mainHand, offHand, head, armor, shoes, enigma3) == false)
      )
        return true;
    } else if (weapon.includes(locus[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, locus) == false) |
        (sets(mainHand, offHand, head, armor, shoes, locu2) == false) |
        (sets(mainHand, offHand, head, armor, shoes, locus3) == false)
      )
        return true;
    } else if (weapon.includes(damnation[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, damnation) == false) |
        (sets(mainHand, offHand, head, armor, shoes, damnation2) == false)
      )
        return true;
    } else if (weapon.includes(icicle[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, icicle) == false) |
        (sets(mainHand, offHand, head, armor, shoes, icicle2) == false)
      )
        return true;
    } else if (weapon.includes(fallen[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, fallen) == false) |
        (sets(mainHand, offHand, head, armor, shoes, fallen2) == false)
      )
        return true;
    } else if (weapon.includes(greatHoly[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, greatHoly) == false) |
        (sets(mainHand, offHand, head, armor, shoes, greatHoly2) == false)
      )
        return true;
    } else if (weapon.includes(wild[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, wild) == false) |
        (sets(mainHand, offHand, head, armor, shoes, wild2) == false)
      )
        return true;
    } else if (weapon.includes(rampant[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, rampant) == false) |
        (sets(mainHand, offHand, head, armor, shoes, rampant2) == false)
      )
        return true;
    } else if (weapon.includes(camlaan[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, camlaan) == false) |
        (sets(mainHand, offHand, head, armor, shoes, camlaan2) == false)
      )
        return true;
    } else if (weapon.includes(morningstar[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, morningstar) == false) |
        (sets(mainHand, offHand, head, armor, shoes, morningstar2) == false)
      )
        return true;
    } else if (weapon.includes(groveKeeper[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, groveKeeper) == false) |
        (sets(mainHand, offHand, head, armor, shoes, groveKeeper2) == false)
      )
        return true;
    } else if (weapon.includes(soulScythe[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, soulScythe) == false) |
        (sets(mainHand, offHand, head, armor, shoes, soulscythe2) == false)
      )
        return true;
    } else if (weapon.includes(grailSeeker[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, grailSeeker) == false) |
        (sets(mainHand, offHand, head, armor, shoes, grailSeeker2) == false)
      )
        return true;
    } else if (weapon.includes(bridledFury[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, bridledFury) == false) |
        (sets(mainHand, offHand, head, armor, shoes, bridledFury2) == false)
      )
        return true;
    } else if (weapon.includes(greatAxe1[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, greatAxe1) == false) |
        (sets(mainHand, offHand, head, armor, shoes, greatAxe2) == false) |
        (sets(mainHand, offHand, head, armor, shoes, greatAxe3) == false)
      )
        return true;
    } else if (weapon.includes(cursedSkull[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, cursedSkull) == false) |
        (sets(mainHand, offHand, head, armor, shoes, cursedSkull2) == false)
      )
        return true;
    } else {
      return true;
    }
  } else {
    if (weapon.includes(oneHandFrost[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, oneHandFrost) == false) |
        (sets(mainHand, offHand, head, armor, shoes, oneHandFrost2) == false)
      )
        return true;
    } else if (weapon.includes(clarent[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, clarent) == false) |
        (sets(mainHand, offHand, head, armor, shoes, clarent2) == false) |
        (sets(mainHand, offHand, head, armor, shoes, clarent3) == false)
      )
        return true;
    } else if (weapon.includes(shadowCaller[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, shadowCaller) == false) |
        (sets(mainHand, offHand, head, armor, shoes, shadowCaller2) == false)
      )
        return true;
    } else if (weapon.includes(arcane1[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, arcane1) == false) |
        (sets(mainHand, offHand, head, armor, shoes, arcane2) == false) |
        (sets(mainHand, offHand, head, armor, shoes, arcane3) == false)
      )
        return true;
    } else if (weapon.includes(dayBreaker[0])) {
      if (
        (sets(mainHand, offHand, head, armor, shoes, dayBreaker) == false) |
        (sets(mainHand, offHand, head, armor, shoes, dayBreaker2) == false) |
        (sets(mainHand, offHand, head, armor, shoes, dayBreaker3) == false)
      )
        return true;
    } else {
      return true;
    }
  }
};
const sets = (mainHand, offHand, head, armor, shoes, array) => {
  if (offHand == null) {
    if (
      !mainHand.Type.toString().includes(array[0]) &&
      !head.Type.toString().includes(array[1]) &&
      !armor.Type.toString().includes(array[2]) &&
      !shoes.Type.toString().includes(array[3])
    )
      return false;
  } else {
    if (
      !mainHand.Type.toString().includes(array[0]) &&
      !offHand.Type.toString().includes(array[1]) &&
      !head.Type.toString().includes(array[2]) &&
      !armor.Type.toString().includes(array[3]) &&
      !shoes.Type.toString().includes(array[4])
    )
      return false;
  }
};
const dateMaker = (date) => {
  let timeFix = date.toLocaleTimeString();
  let dateFix = date.toLocaleDateString();
  let final = dateFix + " " + timeFix;
  return final;
};
function cutSentence(string, limit) {
  if (typeof limit !== "number")
    return console.error(new Error("Limit supposed to be number idiot!"));
  return string.slice(0, limit + 1);
}
const billboard = async (id, param) => {
  var sortSelection = { points: 1 };
  let existable = await param
    .find()
    .sort(sortSelection)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
    });
};
const nicknameMaker = (message, userID) => {
  let isPersonHasNickname = message.guild.members.cache.get(userID).nickname;
  if (isPersonHasNickname) {
    return isPersonHasNickname;
  } else {
    let username = message.guild.members.cache.get(userID).user.username;
    return username;
  }
};
const getDate = () => {
  const dateee = new Date();

  switch (dateee.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  switch (dateee.getDate()) {
    case 2:
      date = "2nd";
      break;

    case 1:
      date = "1st";
      break;
    case 3:
      date = "3rd";
      break;
    case 11:
      date = "11st";
      break;
    case 12:
      date = "12nd";
      break;
    case 13:
      date = "13rd";
      break;
    case 21:
      date = "21st";
      break;
    case 22:
      date = "22nd";
      break;
    case 23:
      date = "23rd";
      break;
    case 31:
      date = "31st";
      break;
    default:
      date = `${dateee.getDate()}th`;
  }
  return `📅 ${day}, ${dateee.toUTCString().split(/ +/g)[2]} ${date}`;
};
function countdown(date) {}

module.exports = {
  nicknameMaker,
  billboard,
  compareSet,
  sets,
  dateMaker,
  getDate,
  cutSentence,
};
