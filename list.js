const {
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
  Client,
} = require("discord.js");
const { cutSentence } = require("./util");
const recentlyRan = [];
const AvArow = new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setCustomId("avabuilds")
    .setPlaceholder("Search ava builds")
    .addOptions([
      {
        label: "Realmbreaker",
        description: "Melee dps, reduces mobs health percentage",
        value: "ava-realmbreaker",
        emoji: "<:realmbreaker:861440819689291796>",
      },
      {
        label: "Weeping Repeater",
        description: "Ranged dps, big magic dmg burst on the E",
        value: "ava-weeping",
        emoji: "<:weeping:861440820531560448>",
      },
      {
        label: "Light Crossbow",
        description: "Ranged dps, big dps if know the combo",
        value: "ava-lightcrossbow",
        emoji: "<:lightcrossbow:861440820287504404>",
      },
      {
        label: "Permafrost",
        description: "Ranged magic dps, big magic dmg burst on the E",
        value: "ava-permafrost",
        emoji: "<:permafrost:861440819747356672>",
      },
      {
        label: "Frost staves",
        description: "Ranged magic dps.",
        value: "ava-frost",
        emoji: "<:greatfrost:861440817746411532>",
      },
      {
        label: "Blazing Staff",
        description: "Ranged magic dps, big dps if have big brain",
        value: "ava-blazing",
        emoji: "<:blazingstaff:861440820040564746>",
      },
      {
        label: "Ironroot",
        description: "Support dps, link mobs together",
        value: "ava-ironroot",
        emoji: "<:ironroot:861440822700146688>",
      },
      {
        label: "Cursed Staff",
        description: "Curse support, reduces mobs resistance",
        value: "ava-shadowcaller",
        emoji: "<:shadowcaller:861440816568336404>",
      },
      {
        label: "Arcane",
        description: "Arcane support, timefreeze the mob",
        value: "ava-arcane",
        emoji: "<:arcane:861440815284355073>",
      },
      {
        label: "Party Healer",
        description: "Holy healer, heal the party",
        value: "ava-partyhealer",
        emoji: "<:fallenstaff:861440819805421579>",
      },
      {
        label: "Main Healer",
        description: "Holy healer, heal the party",
        value: "ava-mainhealer",
        emoji: "<:holystaff:861440820250935338>",
      },
      {
        label: "Blackmonk",
        description: "Quarterstaff support, kick mobs and reduce dmg",
        value: "ava-bms",
        emoji: "<:bms:861440820124581928>",
      },
      {
        label: "Second Tank/Off Tank",
        description: "Second tank, taunt and pull mobs",
        value: "ava-secondtank",
        emoji: "<:incubus:861440822489776159>",
      },
      {
        label: "Main Tank",
        description: "Person who leads the Ava",
        value: "ava-maintank",
        emoji: "<:hammer:861440821735718932>",
      },
    ])
);
const faq = {
  commonlyUsedAcronyms: `• WWP = Whitewall Pass\n• CNA = CN Avalonian Company\n• R3 = Redtree Enclave\n• AR = Arthur's Rest\n• ML = Martlock\n• CL = Caerleon\n• FF = Fame Farm\n• Ava = Avalonian Raid\n• RL = Raid Leader\n• ZvZ = Zerg vs Zerg\n• CTA = Call to Arms`,
  whatIsCaravan:
    "Travelling en masse from point A to point B in a safe manner — transporting gears/items you want to sell and/or individual necessities. E.g WWP->ML->WWP",
  howToJoinCaravan:
    "Keep a look out on #ping / #events /in-game alliance or guild chat.",
  caravanGears:
    "Wear approved ZvZ gear during caravan unless told otherwise by the caravan organizer. To see approved gears press L and select the 2nd tab to see the guild loadouts in-game.",
  howToGetIntoR3OrWwp:
    "You can join an official caravan to R3 or a guild/CNA caravan to WWP to be safe. If you are feeling brave you can try to head over alone from the realmgate Windgrass Portal South. Another alternative is to look for roads to the destination you want to go, since it is relatively safer than travelling alone from the realmgate. You might be able to find a road that was already scouted in <#871082360895049728>.",
  whichIsBetterR3OrWwp:
    "Most guild activities are done with WWP as the starting/massing point. We do Avalonian dungeon and ZVZ from WWP. We have more slot for popping solo/Group dungeons in WWP than in R3 and WWP is relatively safer on certain timers. We can do more Avalonian dungeons in WWP than in R3.",
  whatIsAvalonianRaidDungeon:
    "It's a large dungeon instance that is usually done with 20 people with a party composition that has been constantly modified through balance changes for the upmost efficiency.",
  howToJoinAva: `You can have several options:\n• Wait for a raid leader to post on the <#872047767655157800>  and/or <#872047767655157800> channel, \n• Keep an eye on the in-game guild chat to see if anyone popped an ava (e.g. LongLiveLuai: popped 8.2 ava, x up core roles)\n• Keep an eye on the in-game alliance chat or discord server at the #ava-ping channel`,
  whatIsZvz:
    "A zerg is a large mass of player (20+), so a ZvZ is a clash/fight between two or more zergs. A zerg has to act as a unit, which is why we adhere to the ZvZ builds that the alliance has created, which can be found in <#807319001234407504> in the alliance's main discord server. The other way to check zvz build is to press L on your keyboard in game and press the second tab and find zvz build there.",
  approvedScout: {
    author: [
      "Approved Scout",
      "https://render.albiononline.com/v1/item/T6_MAIN_ROCKMACE_KEEPER.png",
    ],

    color: "ORANGE",
    description: `**Approved Scout** is a title given to trusted and tested scout, in order to be an **approved scout**, you must **follow the steps** explained below: \n\n**1.** Wear build that can buy time for the party to port out from the dungeon once the **divers/gankers** came in. (build example will show below) \n**2.** You must report the situation **regularly** to the party member. \n**3.** Turn on **mastery volume and combat log**, so you can hear gankers steps and whenever they pick stuff. \n**4.** After you have followed all the steps, contact one of the officers and send **a screenshot of your scout build**. \n**5.** The officer will add you into the **ARCH approved scout List** \n\n**Note:** \n**1.** If let's say your party got doved by divers. You **are not** responsible to regear / compensate the deaths, but they have the right **to not invite you** again in the future. \n**2.** If gankers came in, and you died when you are trying to hold them, it's **mandatory** to regear and come back to the dungeon asap. \n**3.** Not completing the task **means no PAYMENT** \n\n click this link below to see Singapore's approved scout list: \nhttps://arch.gay/scouts/g/singapore`,
    image: "https://i.imgur.com/eCq54NK.jpg",
  },
  howToSetHome: {
    string:
      "There is a board in the left side of the market place (your PoV, not the merchant's). Click the board and click set home. Make sure to set your home after each caravan just to be sure you did not reset your home. (as for the image will be shown below)",
    attachment: ["https://i.imgur.com/dyfHjqu.png"],
  },
  howToMakeMoney:
    "• Avalonian Dungeon\n• Flipping \n• Refining \n• Crafting \n• Labourers \n• Kill People \n• HCE \n• Use credit card lul",
  whatIsCTA:
    "It is a call to mass up for objectives, e.g. defending/attacking castles, defending WWP from enemies, securing Old White (mammoth world boss), etc. They are mandatory to attend if you are online. If you can't make it because of real life situations, don't worry about it, real life has to be your #1 priority.",
  howToGetFastFame:
    "Again, it depends on what resources you currently have. If you have the skills, you can do 5v5 or 10v10 lethal hellgates and keep winning to fame farm. You can also join high level HCEs or avas to fame farm. Asides from those, solo/group dungeons are your alternatives.",
  whatIsHideout:
    "**Hideouts** are structures that guilds may place in the Outlands to serve as bases of operation. They can provide various useful functions including a standard bank, guild bank, and home respawn point, and can be upgraded to also provide access to various useful NPCs and a large number of customizable building spaces. \n\nHideouts are subject to attack by whichever guild owns the local territory, so hideout owners must be prepared for both politics and war. A guild must invest a large number of resources and organization to building and maintaining a hideout, or even multiple hideouts, but having one is crucial for spending any extended period of time in the Outlands. \n\nHideouts were introduced in Albion Online with the Queen Update in January 2020.",
  whatIsWwpDefense:
    "It is defending WWP from enemy guild or when ava is getting dived. When WWP defense is called, it is mandatory for everyone in WWP to stop what they are doing and join the defense. Usually a message will be issued in #❗❗ping or in-game chat.",
};
const avalist = {
  "ava-realmbreaker": {
    pic: "https://i.imgur.com/iU9Lh1c.jpg",
    string: `Don't use your E during the arcane. \nYou may use roast pork for more survivability, but beef stew is preferrable \nFor bosses change to Q1 and W1 \n\nWhen fighting the **Knight Captain** Boss, you sholdn't use your E except when it's channeling for explosion or reflect \n\nOther melee DPS builds viable in ava: **Spirit hunter, Bearpaws** \nKeep in Note that melee dps is for experienced raiders of maximum of 2 per raid \nThe second Melee dps can use druid robe instead of specter jacket `,
    name: "Realmbreaker",
    icon: "https://i.imgur.com/pGPQtCf.png",
  },
  "ava-weeping": {
    pic: "https://i.imgur.com/oH0BPwv.jpg",
    string: `This build is designed for **AOE damage** so your focus is to drop your damage on as many mobs as you possible. \nUse Druid robe to gain damage stacks, you need to keep on eye on your Q stacks, and maximize your _Well Prepared_ passive skill \n\nYou can switch to dodging shoes **Royal Shoes, Assassin Shoes**, etc if you are not comfortable with dodging the mobs or bosses skill \n\nPlease eat **Beef stew** for higher damage as you don't depend on cast speed`,
    name: "Weeping Repeater",
    icon: "https://i.imgur.com/CwCxNhV.png",
  },
  "ava-lightcrossbow": {
    pic: "https://i.imgur.com/LRfKUZX.jpg",
    string: `This build is designed for **AOE damage** so your focus is to drop your damage on as many mobs as you possible. \nUse Druid robe to gain damage stacks, you need to keep on eye on your Q stacks, and maximize your _Well Prepared_ passive skill \n\nYou can switch to dodging shoes **Royal Shoes, Assassin Shoes**, etc if you are not comfortable with dodging the mobs or bosses skill \n\nPlease eat **Beef stew** for higher damage as you don't depend on cast speed \n\n**It's mandatory** to use **Cryptcandle** as the offhand of this build to boost the damage`,
    name: "Light Crossbow",
    icon: "https://i.imgur.com/HeYMK8E.png",
  },
  "ava-mainhealer": {
    pic: "https://i.imgur.com/xDKltW9.jpg",
    string:
      "Your role as **Main Healer** is to keep the **Raid Leader (Main Tank)** alive. This means main responsibility is to heal the Raid Leader, **not the party**. \nYou will also be responsible to use **Holy Blessing (W)** on Raid Leader. This role should be played at high spec and by experienced raiders. \n\n**Note:** use **Holy Blessing** on mobs, **Holy Beam** on bosses and **Reawaken** for Dancing Queen(Archmage Boss)",
    name: "Main Healer",
    icon: "https://i.imgur.com/oP8x7o3.png",
  },
  "ava-partyhealer": {
    pic: "https://i.imgur.com/MZxbFVw.jpg",
    string:
      "Your role as **Party Healer** is to keep all dps and supports alive. You may be designated to heal Off Tank in addition to the party. \nYou are **not allowed** to heal **Main Tank** at all, because it will cause healing sickness. \nParty Healer is also responsible to use Reawaken on bosses so lvl 85 mastery is expected. \n\n**Note:** Royal robe with Druid cowl is preferred for heals \n\nOne party healer might also be designated to heal the specter jacket \n\nPlease eat **Pork omelette** for cooldown and cast speed",
    name: "Party Healer",
    icon: "https://i.imgur.com/ce3OT8s.png",
  },
  "ava-permafrost": {
    pic: "https://i.imgur.com/wIJUVEX.jpg",
    string:
      "**Permafrost** is high magic burst weapon, and its focus mainly on **AOE damage**, thus your focus should be to drop your damage on as many mobs as possible. \nThis build focuses on **2 burst combo:** \n1. Use your E ability to activate morgana cape and Q spam with Royal Cowl active. \n2. Use Scholar robe to continue Q spam. \n\n**Note:** \n1. Perma E **must not be used** before the **Raid Leader stun**, because it will fuck up the cc \n2. **Dont use** Scholar robe when the Morgana cape is proc \n\nPlease eat **Pork omelette** for cooldowns and cast speed",
    name: "Permafrost prism",
    icon: "https://i.imgur.com/S8Mk6S6.png",
  },
  "ava-frost": {
    pic: "https://i.imgur.com/uQMhVvx.jpg",
    string:
      "**Frost Staves** is high magic burst weapon, and its focus mainly on **AOE damage**, thus your focus should be to drop your damage on as many mobs as possible. \nThis build focuses on **2 burst combo:** \n1. Use your E ability to activate morgana cape and Q spam with Royal Cowl active. \n2. Use Scholar robe to continue Q spam. \n\n**Note:** \n1. Exception for **Hoarfrost Staff** dont ever ever try to touch your E keyboard when killing mobs \n2. **Dont use** Scholar robe when the Morgana cape is proc \n\nPlease eat **Pork omelette** for cooldowns and cast speed",
    name: "Frost Staves",
    icon: "https://i.imgur.com/a1iCHcW.png",
  },
  "ava-blazing": {
    pic: "https://i.imgur.com/mwp5Jd1.jpg",
    string:
      "**Blazing** is high burst fire DPS \nYou will become **highest DPS** if you play correctly and you will need **2 Separate** build \n\n**Note:** \n1. **Time your E** on final boss so as not to get reflected and die \n2. The spell **changes** during bosses \n\nPlease eat **Beef stew** for more damage",
    name: "Blazing Staff",
    icon: "https://i.imgur.com/jqNg3Ai.png",
  },
  "ava-ironroot": {
    pic: "https://i.imgur.com/XC6pTTG.jpg",
    name: "Ironroot Support",
    icon: "https://i.imgur.com/K82Lc9m.png",
    string:
      "Your role as a **Ironroot** is to link mobs together. \nYou should always linked by using E then use **Royal jacket** and **Assassin hood** to reset cooldowns, you will generate so much aggro - use **Shoes of Tenacity** to get rid of the aggro. \nThis role should be played by **Experienced players** because mobs clearing speed is depending on how good is the **ironroot** in linking mobs \n\n**Note:** \n1. Swap weapons for bosses is **mandatory** as you can't link the boss to any mob ",
  },
  "ava-arcane": {
    pic: "https://i.imgur.com/dx5E354.jpg",
    name: "Arcane",
    icon: "https://i.imgur.com/uUm8ip7.png",
    string:
      "Your role as **Great Arcane** is to use E when called for by **Raid leader**. \nOnce you use your E - use **Royal jacket** and **Assassin hood** to reset cooldowns and get ready for the **next arcane call**. \nIf second arcane has **Judicator armor** it can be used if rotation is missed or any other case mobs may cast spells. \nYou will be designated as first or second arcane by Raid Leader based on **gear and/or experience**. \n\nFor final boss Arcane is responsible to **use Enigmatic staff** to shield the party member chosen by beam or if swords spawn on party. \n\n**Note:** \n1. Any debuffs **won't work** during the Timefreeze (Great Arcane's E) \n2. Always bring **Occult staff** for Lizard boss and **Enigmatic staff** \n3. First arcane always on **Cleanse** and second arcane on **Frazzle** \n\nPlease eat **Pork Omelette** for cooldowns",
  },
  "ava-shadowcaller": {
    pic: "https://i.imgur.com/schEIU9.jpg",
    name: "Cursed Staff Support",
    icon: "https://i.imgur.com/hGFf2KE.png",
    string:
      "**Cursed Support** job is to debuff mobs to increase their damage received. \nUse all the debuffs (Stalker hood, W, and E) after the **second arcane** or in between **first and second arcane** \n\n**HP Cut:** \n1. **Final boss HP cut** \nHP cut is something that is very important to do at final boss. \nSo basically, you are preventing the **Last boss** from healing himself to Max HP, instruction: \na. **Demonic staff** E should be used at about **50% channel**. \nb. **Hood of Tenacity** sholuld be used at about **80% channel** \n\n2. **High Priestess HP Cut** \nyou will  hp cut when 2nd tank air compresses all the shadows out and takes them out and they vanish. \n\n**Note:** \n1. **Hood of Tenacity** is self area cast so you should proc it near the boss \n2. **Cursed support players** are expected to be able to **bait the swords** at final boss. \n3. If you are using **Shadowcaller** always pop E on the **Plate armor** user \n\nPlease eat **Pork omelette** for cooldowns",
  },
  "ava-bms": {
    pic: "https://i.imgur.com/ohQhKwW.jpg",
    name: "Blackmonk (BMS)",
    icon: "https://i.imgur.com/XLf6QF2.png",
    string:
      "Your job as **Blackmonk** is to **fix the pulls** and **reduce damage dealt by mobs**. \nAlso during the Spearmen jump, you need to go **TOWARDS** the person on which spearman about to jump, and then **use ENFEEBLE first** then either **Q** or **W** to cancel the jump \n\n**Dancing Queen (Archmage)** \nOn dancing queen blackmonk is doing the reduce damage for the laser, **instruction:** \n1. **Main tank's** blades (for opening). \n2. **Blackmonk** blades. \n3. **Blackmonk** enfeeble \n4. **Second tank** enfeeble \n5. Back to **Blackmonk** blades and repeat. \n\n**Note:** \n1. Please bring **Knight and Guardian Helmet** \n2. Pop your knight helmet on dancing queen when you're using enfeeble \n\nPlease eat **Pork omelette** for cooldowns",
  },
  "ava-secondtank": {
    pic: "https://i.imgur.com/YuFJ30S.jpg",
    name: "Second Tank | Off Tank",
    icon: "https://i.imgur.com/OAovFtV.png",
    string:
      "Your main job as **Second tank** is to **Taunt** the mobs and use **Sacred ground** to silence the mobs. \n **Listen** to the **Raid Leader's call** when to drop silence and Taunt any mob that **may walk out of the silence.** \nOff Tank is also **responsible to Taunt any mobs that may switch agro** (drones, warrior, knight, archer). \nYou will use **Blackmonk Staff** for some bosses for **damage reduction** or to **slow auto attack speed** with **forceful swing**. \n\n**PS:** Second tank can use any plate armor nowadays since they only expected to taunt the mobs \n\nPlease eat **Pork omelette** for cooldowns",
  },
  "ava-maintank": {
    pic: "https://i.imgur.com/qEPy5BE.jpg",
    name: "Main Tank | Raid Leader",
    icon: "https://i.imgur.com/cyejSwC.png",
    string:
      "This build is **exclusively** for **Raid Leaders**. \nYou will play **1 handed Hammer + Leering Cane** for mob pulls with all armor on **Authority passive (more cc duration)** and swap to **Blackmonk Stave** for bosses \n\nPlease eat **River Sturgeon fish** for more CC duration",
  },
};
const row = new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setCustomId("dps")
    .setPlaceholder("ZvZ DPS builds")
    .addOptions([
      {
        label: "Glacial Staff",
        description: "Deadly DOT, unreflectable damage",
        value: "zvz-glacial",
        emoji: "<:glacialstaff:876062215382376478>",
      },
      {
        label: "Dual Swords",
        description: "Melee dps build, good for clumps",
        value: "zvz-dualswords",
        emoji: "<:dualswords:860679052309299210>",
      },
      {
        label: "Permafrost Prism",
        description: "Ranged magic dps build, good for escaping",
        value: "zvz-permafrost",
        emoji: "<:perma:860679051617107968>",
      },
      {
        label: "Halberd",
        description: "Melee dps build, spread the healing sickness",
        value: "zvz-halberd",
        emoji: "<:halberd:860679050468917258>",
      },
      {
        label: "Energy Shaper",
        description: "Ranged dps build, same party lazer doesnt stack",
        value: "zvz-energyshaper",
        emoji: "<:shaper:860679052142182400>",
      },
      {
        label: "Mistpiercer",
        description: "Ranged magic dps build, straight line narrow aoe",
        value: "zvz-mistpiercer",
        emoji: "<:avabow:860679049973465098>",
      },
      {
        label: "Clarent Blade",
        description: "Melee dps build, huge round AoE",
        value: "zvz-clarent",
        emoji: "<:clarent:860679051445796895>",
      },
      {
        label: "Realmbreaker",
        description: "Melee dps build, clap enemy and reduce their hp %",
        value: "zvz-realmbreaker",
        emoji: "<:realmbreaker:860679051667701810>",
      },
      {
        label: "Daybreaker",
        description: "Melee dps build, straight AoE purge",
        value: "zvz-daybreaker",
        emoji: "<:daybreaker:860679051353915482>",
      },
      {
        label: "Galatine Pair",
        description: "Melee dps build, this build CLAPS PPL",
        value: "zvz-galatine",
        emoji: "<:galatine:860679051038556160>",
      },
      {
        label: "Brimstone",
        description: "Ranged magic build, medium size circle AoE BIG DPS",
        value: "zvz-brimstone",
        emoji: "<:brimstone:860679049901637633>",
      },
      {
        label: "Siegebow",
        description: "Ranged dps build, huge AoE weapon",
        value: "zvz-siegebow",
        emoji: "<:siegebow:860679051786453052>",
      },
      {
        label: "Spirithunter",
        description: "Melee dps build, reduce enemy's resistance",
        value: "zvz-spirithunter",
        emoji: "<:spirithunter:860679050363142155>",
      },
      {
        label: "Shadowcaller",
        description: "Ranged magic support dps, shed enemies",
        value: "zvz-shadowcaller",
        emoji: "<:shadowcaller:860813033105915945>",
      },
      {
        label: "Dawnsong",
        description: "Ranged magic dps, big fire AoE",
        value: "zvz-dawnsong",
        emoji: "<:dawnsong:860679051295326208>",
      },
      {
        label: "Bridled Fury",
        description: "Melee magic dps, hit and run CLAP",
        value: "zvz-bridled",
        emoji: "<:bridledfury:860687946868981820>",
      },
      {
        label: "Cursed Skull",
        description: "Ranged magic dps, huge circle true damage AoE",
        value: "zvz-cursedskull",
        emoji: "<:cursedskull:860687944960835624>",
      },
      {
        label: "Damnation",
        description: "Ranged magic semi support dps, HUGE AoE shred",
        value: "zvz-damnation",
        emoji: "<:damnation:860687946905812992>",
      },
      {
        label: "Greataxe",
        description: "Harcore melee dps, uninterruptable high dps spin",
        value: "zvz-greataxe",
        emoji: "<:greataxe:860687945119563786>",
      },
      {
        label: "Infernal Scythe",
        description: "Axe version of bloodletter",
        value: "zvz-infernalscythe",
        emoji: "<:infernalscythe:874101898779693086>",
      },
    ])
);
const tankRow = new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setCustomId("tanks")
    .setPlaceholder("ZvZ TANK builds")
    .addOptions([
      {
        label: "Camlaann",
        description: "Melee tank build, good for initiating clump",
        value: "zvz-camlann",
        emoji: "<:camlann:860681322879385621>",
      },
      {
        label: "Grailseeker",
        description: "Melee tank build, hold enemy engages",
        value: "zvz-grailseeker",
        emoji: "<:grailseeker:860691643971665921>",
      },
      {
        label: "Soulscythe",
        description: "Melee tank build, good for initiating engage",
        value: "zvz-soulscythe",
        emoji: "<:soulscythe:860691644211134484>",
      },
      {
        label: "Grovekeeper",
        description: "Melee tank build, big aoe stun",
        value: "zvz-grovekeeper",
        emoji: "<:grovekeeper:860691643593523200>",
      },
      {
        label: "Morningstar",
        description: "Melee tank build, roots enemy in long duration",
        value: "zvz-morningstar",
        emoji: "<:morningstar:860691643250638928>",
      },
    ])
);
const healRow = new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setCustomId("heals")
    .setPlaceholder("ZvZ Heal and Supports builds")
    .addOptions([
      {
        label: "Fallen Staff",
        description: "Casual holy healer, big pp circle + cleanse heal",
        value: "zvz-fallen",
        emoji: "<:Fallen:860679051308171266>",
      },
      {
        label: "Wild Staff",
        description: "Nature healer, big AOE circle heal",
        value: "zvz-wildstaff",
        emoji: "<:wildstaff:860693853652910100>",
      },
      {
        label: "Great Holy",
        description: "Holy Healer, increase allies resistance",
        value: "zvz-greatholy",
        emoji: "<:greatholy:860693852611411999>",
      },
      {
        label: "Rampant",
        description: "Nature Healer, straight narrow line AOE heals",
        value: "zvz-rampant",
        emoji: "<:rampant:860693853849518100>",
      },
      {
        label: "Malevolent Locus",
        description: "Arcane support, used to cleanse allies",
        value: "zvz-locus",
        emoji: "<:locus:860822902547283969>",
      },
      {
        label: "One Handed Arcane",
        description: "Arcane support, silences and purges enemies in AOE",
        value: "zvz-arcane",
        emoji: "<:onehandarcane:860822902134538250>",
      },
      {
        label: "Occult Staff",
        description: "Arcane support, increase allies movement speed",
        value: "zvz-occult",
        emoji: "<:occult:860823088475013131>",
      },
      {
        label: "Enigmatic Staff",
        description: "Arcane support, gives AOE shield to allies",
        value: "zvz-enigmatic",
        emoji: "<:enigmatic:860822901184004146>",
      },
    ])
);
const zvzlist = {
  dps: {
    "zvz-glacial": {
      label: "Siegebow",
      pic: "https://render.albiononline.com/v1/item/T8_2H_GLACIALSTAFF@1.png?quality=2",
      icon: "https://i.imgur.com/NdNMTcj.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101093",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/875870823276249088",
    },
    "zvz-siegebow": {
      label: "Siegebow",
      pic: "https://render.albiononline.com/v1/item/T6_2H_CROSSBOWLARGE_MORGANA@1.png?quality=2",
      icon: "https://i.imgur.com/s5kBpr1.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101093",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/807658296416665621",
    },
    "zvz-permafrost": {
      label: "Permafrost",
      pic: "https://render.albiononline.com/v1/item/T6_2H_ICECRYSTAL_UNDEAD@1.png?quality=2",
      icon: "https://i.imgur.com/VY91AFv.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101097",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/807675958097477672",
    },
    "zvz-mistpiercer": {
      label: "Mistpiercer",
      pic: "https://render.albiononline.com/v1/item/T6_2H_BOW_AVALON@2.png?quality=2",
      icon: "https://i.imgur.com/MMIyALt.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101099",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/807679039275139102",
    },
    "zvz-energyshaper": {
      label: "Energy Shaper",
      pic: "https://render.albiononline.com/v1/item/T6_2H_CROSSBOW_CANNON_AVALON@2.png?quality=2",
      icon: "https://i.imgur.com/qDdKBSB.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101101",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/807700941457063986",
    },
    "zvz-brimstone": {
      label: "Brimstone",
      pic: "https://render.albiononline.com/v1/item/T6_2H_FIRESTAFF_HELL@2.png?quality=2",
      icon: "https://i.imgur.com/1k8FJlp.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101179",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/807675595797823488",
    },
    "zvz-dawnsong": {
      label: "Dawnsong",
      pic: "https://render.albiononline.com/v1/item/T6_2H_FIRE_RINGPAIR_AVALON@1.png?quality=2",
      icon: "https://i.imgur.com/61o9SVr.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101102",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/807701098026106930",
    },
    "zvz-halberd": {
      label: "Halberd",
      pic: "https://render.albiononline.com/v1/item/T6_2H_HALBERD@1.png?quality=2",
      icon: "https://i.imgur.com/Z66GRfX.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101103",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/807781638494486548",
    },
    "zvz-realmbreaker": {
      label: "Realmbreaker",
      pic: "https://render.albiononline.com/v1/item/T7_2H_AXE_AVALON@2.png?quality=2",
      icon: "https://i.imgur.com/oOUnwKo.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101106",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/807781876571308042",
    },
    "zvz-daybreaker": {
      label: "Daybreaker",
      pic: "https://render.albiononline.com/v1/item/T7_MAIN_SPEAR_LANCE_AVALON@2.png?quality=2",
      icon: "https://i.imgur.com/KAag4qz.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101108",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/807782187550244884",
    },
    "zvz-galatine": {
      label: "Galatine Pair",
      pic: "https://render.albiononline.com/v1/item/T6_2H_DUALSCIMITAR_UNDEAD@2.png?quality=2",
      icon: "https://i.imgur.com/cU4Y1Og.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101109",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/807786585302368266",
    },
    "zvz-clarent": {
      label: "Clarent Blade",
      pic: "https://render.albiononline.com/v1/item/T6_MAIN_SCIMITAR_MORGANA@2.png?quality=2",
      icon: "https://i.imgur.com/p8ElKkd.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101112",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/808048332256968714",
    },
    "zvz-spirithunter": {
      label: "Spirithunter",
      pic: "https://render.albiononline.com/v1/item/T8_2H_HARPOON_HELL@2.png?quality=2",
      icon: "https://i.imgur.com/rxFjtVy.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101113",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/808051545865715722",
    },
    "zvz-dualswords": {
      label: "Dualswords",
      pic: "https://render.albiononline.com/v1/item/T6_2H_DUALSWORD@2.png?quality=2",
      icon: "https://i.imgur.com/9jDIX7D.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101116",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/808053999471034368",
    },
    "zvz-bridled": {
      label: "Bridled Fury",
      pic: "https://render.albiononline.com/v1/item/T6_2H_DAGGER_KATAR_AVALON@2.png?quality=2",
      icon: "https://i.imgur.com/ylc2jgp.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101147",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/816410289292967947",
    },
    "zvz-greataxe": {
      label: "Greataxe",
      pic: "https://render.albiononline.com/v1/item/T6_2H_AXE@2.png?quality=2",
      icon: "https://i.imgur.com/jD5hSJ0.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101150",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/843587604413808680",
    },
    "zvz-damnation": {
      label: "Damnation Staff",
      pic: "https://render.albiononline.com/v1/item/T6_2H_CURSEDSTAFF_MORGANA@2.png?quality=2",
      icon: "https://i.imgur.com/SoSgWnJ.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101125",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/808440044594659389",
    },
    "zvz-shadowcaller": {
      label: "Shadowcaller",
      pic: "https://render.albiononline.com/v1/item/T7_MAIN_CURSEDSTAFF_AVALON@2.png?quality=2",
      icon: "https://i.imgur.com/LUAPvmA.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101138",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/815692980673445888",
    },
    "zvz-cursedskull": {
      label: "Cursed Skull",
      pic: "https://render.albiononline.com/v1/item/T6_2H_SKULLORB_HELL@2.png?quality=2",
      icon: "https://i.imgur.com/jePPweD.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101152",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/843590654676303942",
    },
    "zvz-infernalscythe": {
      label: "Infernal Scythe",
      pic: "https://render.albiononline.com/v1/item/T6_2H_SCYTHE_HELL@2.png?quality=2",
      icon: "https://i.imgur.com/XqHkV5v.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/104418",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/871107864045957150",
    },
  },
  heals: {
    "zvz-occult": {
      label: "Occult",
      pic: "https://render.albiononline.com/v1/item/T6_2H_ARCANESTAFF_HELL@2.png?quality=2",
      icon: "https://i.imgur.com/iqEZaeO.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101117",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/808320638447124500",
    },
    "zvz-enigmatic": {
      label: "Enigmatic",
      pic: "https://render.albiononline.com/v1/item/T6_2H_ENIGMATICSTAFF@2.png?quality=2",
      icon: "https://i.imgur.com/4Ixgf2O.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101120",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/808324352961544223",
    },
    "zvz-locus": {
      label: "Malevolent Locus",
      pic: "https://render.albiononline.com/v1/item/T6_2H_ENIGMATICORB_MORGANA@1.png?quality=2",
      icon: "https://i.imgur.com/BV3fNwg.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101121",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/808337336198889472",
    },
    "zvz-arcane": {
      label: "One handed Arcane Staff",
      pic: "https://render.albiononline.com/v1/item/T6_MAIN_ARCANESTAFF@1.png?quality=2",
      icon: "https://i.imgur.com/RDJRDw5.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101124",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/808382611004719134",
    },
    "zvz-fallen": {
      label: "Fallen Staff",
      pic: "https://render.albiononline.com/v1/item/T6_2H_HOLYSTAFF_HELL@1.png?quality=2",
      icon: "https://i.imgur.com/voOcedm.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101129",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/809525705406808115",
    },
    "zvz-greatholy": {
      label: "Greatholy Staff",
      pic: "https://render.albiononline.com/v1/item/T7_2H_HOLYSTAFF@1.png?quality=2",
      icon: "https://i.imgur.com/qA4VqIr.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101132",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/809525850487259156",
    },
    "zvz-wildstaff": {
      label: "Wildstaff",
      pic: "https://render.albiononline.com/v1/item/T6_2H_WILDSTAFF@1.png?quality=2",
      icon: "https://i.imgur.com/7c1HlRw.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101133",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/809526032712335370",
    },
    "zvz-rampant": {
      label: "Rampant Staff",
      pic: "https://render.albiononline.com/v1/item/T6_2H_NATURESTAFF_KEEPER@1.png?quality=2",
      icon: "https://i.imgur.com/laJJaSW.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101135",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/809526200036622386",
    },
  },
  tanks: {
    "zvz-grailseeker": {
      label: "Grailseeker",
      pic: "https://render.albiononline.com/v1/item/T7_2H_QUARTERSTAFF_AVALON@1.png?quality=2",
      icon: "https://i.imgur.com/p3e1S9u.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101137",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/810357183257509898",
    },
    "zvz-soulscythe": {
      label: "Soulscythe",
      pic: "https://render.albiononline.com/v1/item/T6_2H_TWINSCYTHE_HELL@1.png?quality=2",
      icon: "https://i.imgur.com/zbIHNd4.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101140",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/810356814134509589",
    },
    "zvz-grovekeeper": {
      label: "Grovekeeper / Pog log",
      pic: "https://render.albiononline.com/v1/item/T6_2H_RAM_KEEPER@1.png?quality=2",
      icon: "https://i.imgur.com/C0t25qT.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101146",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/810356518288490496",
    },
    "zvz-morningstar": {
      label: "Morningstar",
      pic: "https://render.albiononline.com/v1/item/T6_2H_FLAIL@2.png?quality=2",
      icon: "https://i.imgur.com/S9JfLza.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101151",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/810356339485835296",
    },
    "zvz-camlann": {
      label: "Camlannn",
      pic: "https://render.albiononline.com/v1/item/T6_2H_MACE_MORGANA@2.png?quality=2",
      icon: "https://i.imgur.com/Pwlqi2E.jpg",
      link: "https://albiononline.com/en/characterbuilder/solo-builds/view/101156",
      reference:
        "https://discord.com/channels/200746010102726657/807319001234407504/810356123470921749",
    },
  },
};
const negativeResponses = [
  "You are so stupid, when you heard 90% of all crimes occur around the home, you went out.",
  "I guess you prove that even god makes mistakes sometimes.",
  "Who can argue with you",
  "Your house is so nasty, I tripped over a rat, and a cockroach stole my wallet.",
  "I’d explain it to you, but I don’t have any crayons with me.",
  "Don't like my sarcasm, well I don't like your stupid.",
  "You’re as useless as a screen door on a submarine.",
  "Some things are just not worth saying",
  "If laughter is the best medicine, your face must be curing the world.",
  "You're so ugly, you scared the crap out of the toilet.",
  "No I'm not insulting you, I'm describing you.",
  "It's better to let someone think you are an Idiot than to open your mouth and prove it.",
  "If I had a face like yours, I'd sue my parents.",
  "Your birth certificate is an apology letter from the condom factory.",
  "I guess you prove that even god makes mistakes sometimes.",
  "The only way you'll ever get laid is if you crawl up a chicken's butt and wait.",
  "You're so fake, Barbie is jealous.",
  "I’m jealous of people that don’t know you!",
  "My psychiatrist told me I was crazy and I said I want a second opinion. He said okay, you're ugly too.",
  "You're so ugly, when your mom dropped you off at school she got a fine for littering.",
  "If I wanted to kill myself I'd climb your ego and jump to your IQ.",
  "You must have been born on a highway because that's where most accidents happen.",
  "Brains aren't everything. In your case they're nothing.",
  "I don't know what makes you so stupid, but it really works.",
  "Your family tree must be a cactus because everybody on it is a prick.",
  "I can explain it to you, but I can’t understand it for you.",
  "Roses are red violets are blue, God made me pretty, what happened to you?",
  "Behind every fat woman there is a beautiful woman. No seriously, your in the way.",
  "Calling you an idiot would be an insult to all the stupid people.",
  "You, sir, are an oxygen thief!",
  "Some babies were dropped on their heads but you were clearly thrown at a wall.",
  "Why don't you go play in traffic.",
  "Please shut your mouth when you’re talking to me.",
  "I'd slap you, but that would be animal abuse.",
  "They say opposites attract. I hope you meet someone who is good-looking, intelligent, and cultured.",
  "Stop trying to be a smart ass, you're just an ass.",
  "The last time I saw something like you, I flushed it.",
  "'m busy now. Can I ignore you some other time?",
  "You have Diarrhea of the mouth; constipation of the ideas.",
  "If ugly were a crime, you'd get a life sentence.",
  "Your mind is on vacation but your mouth is working overtime.",
  "I can lose weight, but you’ll always be ugly.",
  "Why don't you slip into something more comfortable... like a coma.",
  "Shock me, say something intelligent.",
  "If your gonna be two faced, honey at least make one of them pretty.",
  "Keep rolling your eyes, perhaps you'll find a brain back there.",
  "You are not as bad as people say, you are much, much worse.",
  "Don't like my sarcasm, well I don't like your stupid.",
  "I don't know what your problem is, but I'll bet it's hard to pronounce.",
  "You get ten times more girls than me? ten times zero is zero...",
  "There is no vaccine against stupidity.",
  "You're the reason the gene pool needs a lifeguard.",
  "Sure, I've seen people like you before - but I had to pay an admission.",
  "How old are you? - Wait I shouldn't ask, you can't count that high.",
  "Have you been shopping lately? They're selling lives, you should go get one.",
  "You're like Monday mornings, nobody likes you.",
  "Of course I talk like an idiot, how else would you understand me?",
  "All day I thought of you... I was at the zoo.",
  "To make you laugh on Saturday, I need to you joke on Wednesday.",
  "You're so fat, you could sell shade.",
  "I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",
  "Don't you need a license to be that ugly?",
  "My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face.",
  "Your house is so dirty you have to wipe your feet before you go outside.",
  "If you really spoke your mind, you'd be speechless.",
  "Stupidity is not a crime so you are free to go.",
  "You are so old, when you were a kid rainbows were black and white.",
  "If I told you that I have a piece of dirt in my eye, would you move?",
  "You so dumb, you think Cheerios are doughnut seeds.",
  "So, a thought crossed your mind? Must have been a long and lonely journey.",
  "You are so old, your birth-certificate expired.",
  "Every time I'm next to you, I get a fierce desire to be alone.",
  "You're so dumb that you got hit by a parked car.",
  "Keep talking, someday you'll say something intelligent!",
  "You're so fat, you leave footprints in concrete.",
  "How did you get here? Did someone leave your cage open?",
  "Pardon me, but you've obviously mistaken me for someone who gives a damn.",
  "Wipe your mouth, there's still a tiny bit of bullshit around your lips.",
  "Don't you have a terribly empty feeling - in your skull?",
  "As an outsider, what do you think of the human race?",
  "Just because you have one doesn't mean you have to act like one.",
  "We can always tell when you are lying. Your lips move.",
  "Are you always this stupid or is today a special occasion?",
  "Have you considered suing your brains for non-support?",
];
const positiveResponses = [
  "I’m jealous of all the people that haven’t met you!",
  "You’re getting better every day",
  "Good on you!",
  "That’s the way",
  "You conserve toilet paper by using both sides.",
  "You’re on the right track now",
  "Keep working, you’re getting better",
];
const errorSelectMenus = new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setPlaceholder("Search docs")
    .setCustomId("document")
    .addOptions([
      {
        label: "ZvZ Definition",
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        description: `${cutSentence(faq.whatIsZvz, 50)}...`,
        value: "whatIsZvz",
      },
      {
        label: "Caravan Definition",
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        description: `${cutSentence(faq.whatIsCaravan, 50)}...`,
        value: "whatIsCaravan",
      },
      {
        label: "Approved Scout",
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        description: "Approved scout is a title given to someone that...",
        value: "approvedScout",
      },
      {
        label: "How to join Caravan?",
        description: `${cutSentence(faq.howToJoinCaravan, 50)}...`,
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        value: "howToJoinCaravan",
      },
      {
        label: "Caravan gears",
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        description: `${cutSentence(faq.caravanGears, 50)}...`,
        value: "caravanGears",
      },
      {
        label: "How do I get into R3 or WWP?",
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        description: `${cutSentence(faq.howToGetIntoR3OrWwp, 50)}...`,
        value: "howToGetIntoR3OrWwp",
      },
      {
        label: "Avalonian Dungeon",
        description: `${cutSentence(faq.whatIsAvalonianRaidDungeon, 50)}...`,
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        value: "whatIsAvalonianRaidDungeon",
      },
      {
        label: "How do I join Avalonian Dungeon raid?",
        description: `${cutSentence(faq.howToJoinAva, 50)}...`,
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        value: "howToJoinAva",
      },
      {
        label: "How to set home?",
        description: `${cutSentence(faq.howToSetHome.string, 50)}`,
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        value: "howToSetHome",
      },
      {
        label: "Ways of money making.",
        description: `${cutSentence(faq.howToMakeMoney, 50)}`,
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        value: "howToMakeMoney",
      },
      {
        label: "CTA Definition",
        description: `${cutSentence(faq.whatIsCTA, 50)}`,
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        value: "whatIsCTA",
      },
      {
        label: "How to get fast fame",
        description: `${cutSentence(faq.howToGetFastFame, 50)}`,
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        value: "howToGetFastFame",
      },
      {
        label: "WWP Defense explanation",
        description: `${cutSentence(faq.whatIsWwpDefense, 50)}`,
        emoji: "<:singaporeDiscordEmoji:873354185645625414>",
        value: "whatIsWwpDefense",
      },
    ])
);
module.exports = {
  recentlyRan,
  AvArow,
  avalist,
  row,
  tankRow,
  healRow,
  zvzlist,
  negativeResponses,
  positiveResponses,
  faq,
  errorSelectMenus,
};
