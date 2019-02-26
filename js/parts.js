import {allTraits as T} from '/js/traits.js'
import {allActions as A} from '/js/actions.js'


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Part {
  constructor(type, name, requirementType, requirementAmount, trait, action) {
    this.type = capitalize(type)
    this.name = capitalize(name);
    this.requirementType = requirementType
    this.requirementAmount = requirementAmount
    this.traits = trait
    this.actions = action
    this.rarity = function () {
      let level
      let stat = this.requirementAmount
      switch (stat) {
        case (1):
        case (2):
          level = 1
          break
        case (3):
        case (4):
          level = 2
           break
        case (5):
        case (6) :
          level = 3
           break
        case (7):
        case (8):
          level = 4
           break
        case (9):
        case (10):
          level = 5
           break
        case (11):
        case (12):
          level = 6
           break
        case (13):
        case (14):
          level = 7
           break
        case (15):
        case (16):
          level = 8
           break
        case (17):
        case (18):
          level = 9
           break
        case (19):
          level = 10
           break
        case (20):
          level = 11
           break
        default:
          level = 100
      }
      return level
    }
  }
}

export const allParts ={
demonHead       : new Part('Head','Demon', 'STR', 1, [], [A.bite]),
stumpHead       : new Part('Head','Stump', 'WIS', 2, [T.blind,T.breathless], [A.blind, A.breathless]),
hemlinHead      : new Part('Head', 'Hemlin', 'WIS', 4 , [T.synapse], [null]),
koroHead        : new Part('Head', 'Korodian', 'STR', 4 , [T.thickBones], [A.gore]),
vinmarHead      : new Part('Head', 'Vinmar', 'DEX', 4 , [T.agile, T.darkVision], [null]),
skullHead       : new Part('Head', 'Skull', 'CON', 8 , [T.fragile], [null]),
hornedHead      : new Part('Head', 'Horned', 'CON', 8 , [T.barbed], [A.gore]),
tentacleHead    : new Part('Head', 'Tentacle', 'SOL', 10 , [T.petrifyingGaze], [A.tentacle]),
handsomeHead    : new Part('Head', 'Handsome' , 'CHA', 14 , [T.demonicCharm,T.charmingVoice], [null]),
humanHead       : new Part('Head', 'Human', 'CHA', 10 , [T.charmingVoice], [null]),
brainHead       : new Part('Head', 'Brain', 'INT', 12 , [T.soulVoice], [null]),
soulHead        : new Part('Head', 'Translucent', 'SOL', 14 , [T.soulCommand], [A.soulHead]),
eyeHead         : new Part('Head', 'Large Eye', 'DEX', 12 , [T.trueSight], [null]),
solarHead       : new Part('Head', 'Glowing', 'SOL', 14 , [T.glowing], [null]),
snakeHead       : new Part('Head', 'Snake', 'DEX', 10 , [T.regen], [A.spit]),

humanBody       : new Part('Body', 'Human', 'CON', 1 , [null], [null]),
KoroBody        : new Part('Body', 'Korodian', 'CON', 1 , [T.thickBones], [null]),
hemlinBody      : new Part('Body', 'Hemlin', 'CON', 1 , [T.weak], [null]),
vinmarBody      : new Part('Body', 'Vinmar', 'CON', 1 , [T.agile], [null]),
frailBody       : new Part('Body', 'Frail', 'CON', 1 , [T.frail], [null]),
spikeBody       : new Part('Body', 'Spiked', 'CON', 5 , [T.barbed], [A.boneJavelin]),
flameBody       : new Part('Body', 'Flaming', 'WIS', 10 , [T.flaming], [null]),
iceBody         : new Part('Body', 'Frozen', 'WIS', 10 , [T.phasic], [null]),
staticBody      : new Part('Body', 'Static', 'WIS', 10 , [T.static], [null]),
stoneBody       : new Part('Body', 'Stonebound', 'WIS', 10 , [T.stone], [null]),
solarBody       : new Part('Body', 'Solar', 'WIS', 12 , [T.glowing], [null]),
voidBody        : new Part('Body', 'Voidic', 'SOL', 12 , [T.darkness], [null]),
screamingBody   : new Part('Body', 'Screaming', 'CHA', 12 , [T.sound], [A.wail]),
denseBody       : new Part('Body', 'Gravitron', 'WIS', 12 , [T.burden], [null]),
lightBody       : new Part('Body', 'Feather Aura', 'SOL', 12 , [T.feather], [null]),
insectWings     : new Part('Body', 'Insect Wings', 'CON', 6 , [T.weakFlight], [null]),
birdWings       : new Part('Body', 'Avian Wings', 'CON', 8 , [T.flight], [null]),
gargoyleWings   : new Part('Body', 'Gargoyle Wings', 'CON', 12 , [T.mightyFlight], [null]),
soulWings       : new Part('Body', 'Void Wings', 'SOL', 14 , [T.psychicFlight], [null]),
monsterousBody  : new Part('Body', 'Monstrous', 'STR', 12 , [T.magicalResistance], [null]),
leanBody        : new Part('Body', 'Lean', 'DEX', 12 , [T.ambusher], [null]),
chainedBody     : new Part('Body', 'Chained', 'CON', 8 , [T.agressive], [null]),
invertedBody    : new Part('Body', 'Inverted', 'WIS', 12 , [T.bloodFrenzy], [null]),
rottenBody      : new Part('Body', 'Rotting', 'CON', 7 , [T.stench], [null]),
athleticBody    : new Part('Body', 'Athletic', 'DEX', 12 , [T.vigor], [null]),
healthyBody     : new Part('Body', 'Strong', 'STR', 12 , [T.healthyConstitution], [null]),
robustBody      : new Part('Body', 'Robust', 'CON', 14 , [T.robust], [null]),
primeBody       : new Part('Body', 'Prime', 'CON', 20, [T.topForm], [null]),
armoredBody     : new Part('Body', 'Armored', 'CON', 14 , [T.armored], [null]),
bulwarkBody     : new Part('Body', 'Bulwark', 'CON', 16 , [T.bulwark], [null]),
kommonBody      : new Part('Body', 'Kommon', 'CON', 18 , [T.kommonBlood], [null]),

demonArm        : new Part('Arm', 'Demon', 'CON', 1 , [T.armable], [null]),
koroArm         : new Part('Arm', 'Korodian', 'STR', 4 , [T.armable, T.vigor], [null]),
hemlinArm       : new Part('Arm', 'Hemlin', 'WIS', 4 , [T.armable, T.weak], [null]),
stumpArm        : new Part('Arm', 'Fleshy Stump', 'CON', 2 , [null], [A.stump]),
maceArm         : new Part('Arm', 'Bone Stump Mace', 'STR', 8 , [null], [A.mace]),
MaulArm         : new Part('Arm', 'Tumerous Maul', 'STR', 13 , [null], [A.maul]),
clawArm         : new Part('Arm', 'Claws', 'DEX', 6 , [T.claw], [A.claw]),
sytheArm        : new Part('Arm', 'Sythe Claw', 'DEX', 10 , [null], [A.sytheClaw]),
shearArm        : new Part('Arm', 'Shearing Claw', 'DEX', 15 , [null], [A.shearClaw]),
mouthArm        : new Part('Arm', 'Mouth Hand', 'CON', 6 , [T.armable], [A.bite]),
rottenMouthArm  : new Part('Arm', 'Rotten Mouth Hand', 'CON', 7 , [null], [A.livingMouthHand]),
axeArm          : new Part('Arm', 'Axe Hand', 'STR', 6 , [null], [A.axe]),
greatAxeArm     : new Part('Arm', 'Great Axe', 'STR', 10 , [null], [A.greatAxe]),
swordArm        : new Part('Arm', 'Sword', 'DEX', 6 , [null], [A.sword]),
greatSwordArm   : new Part('Arm', 'Great Sword', 'STR', 14 , [null], [A.greatSword]),
spearArm        : new Part('Arm', 'Bone Spear', 'DEX', 10 , [null], [A.spear]),
soulArm         : new Part('Arm', 'Voidic', 'SOL', 8 , [null], [A.soulHand]),
tentacleArm     : new Part('Arm', 'Tentacle', 'SOL', 10 , [null], [A.tentacleArm]),
zarashArm       : new Part('Arm', 'Zarash Cannon', 'STR', 20 , [null], [A.zarashCannon]),
boneArm         : new Part('Arm', 'Bone', 'STR', 4 , [T.fragile, T.armable], [A.claw]),
unstableArm     : new Part('Arm', 'Unstable', 'STR', 9 , [T.explosiveEnd, T.armable], [null]),
ompithArm       : new Part('Arm', 'Ompith Claw', 'STR', 7 , [T.pincer], [A.claw]),
crossbowArm     : new Part('Arm', 'Human', 'DEX', 20000 , [T.armable], [A.handXbow]),


noLegs          : new Part('Legs', 'No', 'DEX', 1 , [T.immobile], [null]),
muscularLegs    : new Part('Legs', 'Muscular', 'DEX', 6 , [T.fast], [null]),
fourLegs        : new Part('Legs', 'Four', 'DEX', 12 , [T.veryFast], [null]),
kommonLegs      : new Part('Legs', 'Kommondrog', 'DEX', 18 , [T.temporallyFast], [null]),
goatLegs        : new Part('Legs', 'Saytr', 'STR', 12 , [T.pounce], [A.claw]),
spiderLegs      : new Part('Legs', 'Spider', 'DEX', 10 , [T.spiderClimb], [null]),
tentacleLegs    : new Part('Legs', 'Tentacle', 'SOL', 10 , [T.slow], [A.tentacle]),
oneLegs         : new Part('Legs', 'Single', 'DEX', 2 , [T.unsteady], [null]),
thousandLegs    : new Part('Legs', 'Thousand', 'WIS', 9 , [T.steady], [null]),
wormLegs        : new Part('Legs', 'Worm', 'INT', 7 , [T.steadfast], [null]),
unstableLegs    : new Part('Legs', 'Unstable', 'CON', 12 , [T.unstable], [null]),
birdLegs        : new Part('Legs', 'Avian Claw', 'DEX', 5 , [null], [A.swoopingStrikes]),
clawLegs        : new Part('Legs', 'Clawed', 'DEX', 6 , [T.pinnedStrike], [A.claw]),
phasicLegs      : new Part('Legs', 'Voidic', 'SOL', 7 , [T.phasic], [null]),
ompithLegs      : new Part('Legs', 'Ompith', 'CHA', 6 , [T.spiderClimb, T.fast], [A.stinger]),
armLegs         : new Part('Legs', 'Arm', 'STR', 8 , [T.armable], [null]),
vinmarLegs      : new Part('Legs', 'Vinmar', 'DEX', 8 , [T.elusive], [null]),
koroLegs        : new Part('Legs', 'Korodian', 'STR', 6 , [T.charge], [null]),
demonLegs       : new Part('Legs', 'Demonic', 'STR', 1 , [null], [null]),





}


// const partCategorizer = function(partType){
//   let arr = []
//   let keys = Object.keys(allParts)
//   for (let index = 0; index < keys.length; index++) {
//     const element = keys[index];
//     console.log(allParts[element].type)
//     if (allParts[element].type == partType){
//       arr.push(allParts[element])
//     }
//   }
//   return arr
// }
// let allHeads = partCategorizer('Head')


export default allParts
