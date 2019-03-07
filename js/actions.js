class MeleeWeapon {
  constructor(name, dmg, statReq, range, dmgType) {
    this.name = name + '. '
    this.dmg = 'Hit: ' + dmg + ' '
    this.statReq = statReq
   
    this.dmgType = dmgType + '.'
    this.type = 'Melee Weapon Attack;'
    this.target = 'one Target.'
    this.range = 'Reach ' + range + 'ft., one target. '
  }
}

class RangeWeapon {
  constructor(name, dmg, statReq, range, dmgType) {
    this.name = name + '. '
    this.dmg = 'Hit: ' + dmg + ' '
    this.statReq = statReq
    
    this.dmgType = dmgType + '.'
    this.type = 'Ranged Weapon Attack;'
    this.target = 'one Target.'
    this.range = 'Reach ' + range + 'ft., one target. '
  }
}


class Spell {
  constructor(name, recharge, effect) {
    this.name = name + '.'
    this.statReq = 'Spell'
    this.recharge = '(Recharge ' + recharge +')'
    this.effect = effect
  }
}



const thrash = new MeleeWeapon('Thrash', '1D8', 'STR', 5, 'Bludgeoning.')
const stump = new MeleeWeapon('Flesy Stump', '1D6', 'STR', 5, 'Bludgeoning')
const mace = new MeleeWeapon('Mace Hand', '2D6', 'STR', 5, 'Bludgeoning')
const maul = new MeleeWeapon('Tumorous Maul', '4D6', 'STR', 5, 'Bludgeoning')
const claw = new MeleeWeapon('Claws', '1D6', 'DEX', 5, 'Slashing')
const sytheClaw = new MeleeWeapon('Sythe Claws', '2D6', 'DEX', 5, 'Slashing')
const shearClaw = new MeleeWeapon('Shear Claws', '3D6', 'DEX', 5, 'Slashing')
const bite = new MeleeWeapon('Bite', '1D6', 'STR', 5, 'Piercing')
const axe = new MeleeWeapon('Axe Hand', '1D8', 'STR', 5, 'Slashing')
const greatAxe = new MeleeWeapon('Great Axe Hand', '2D8', 'STR', 5, 'Slashing')
const sword = new MeleeWeapon('Blade Hand', '1D8', 'DEX', 5, 'Piercing')
const greatSword = new MeleeWeapon('Great Sword Arm', '4D6', 'STR', 5, 'Slashing')
const spear = new MeleeWeapon('Bone Spear', '1D6', 'DEX', 10, 'Piercing')
const soulHand = new MeleeWeapon('Spirit Hand', '2D6', 'SOL', 5, 'Force. 1D12 chance to lose 1 soul until a long rest.')
const tentacle = new MeleeWeapon('Tentacle', '2D10', 'SOL', 10, ' Psychic. If the target is medium or smaller, it is grappled and must pass an Athletics(DC15) test or be stunned until the grapple ends.')
const gore = new MeleeWeapon('Gore', '1D8', 'STR', 5, 'Piercing')
const livingMouthHand = new MeleeWeapon('Living Mouth Hand', '2D8', 'DEX', 5, 'Slashing. + 1d4 Necrotic.')
const stinger = new MeleeWeapon('Stinger', '1D10', 'STR', 10, ' Piercing. Target must make a Constitution(DC12) saving throw or take 4D10 posion damage. On save take half damage.')

const spit = new RangeWeapon('Spit', '1D6', 'DEX', '15/30', 'Acid')
const handXbow = new RangeWeapon('Hand Crossbow', '1D6', 'DEX', '60/300', 'Piercing.')
const zarashCannon = new RangeWeapon('Zarash Cannon', '8D10', 'STR', '600/2000', 'Bludgeoning')

const wail = new Spell('Wail', '5-6', 'A focused wail rips through the air. Any creature within 30 feet that can hear must take a Constitution(DC12) save or take 2D8 Thunder Damage. Successful saves take half damage.')
const soulBlast = new Spell('Soul Blast', '5-6', "A focused blast of pure soul shoots from this creature hitting a target within 30 with a +8 to hit. Hit: 2d6 + 8 Force. The target must take a Soul(DC12) saving throw or they will lose 1 soul until a long rest.")


export const allActions = {
  thrash,
  stump,
  mace,
  maul,
  claw,
  sytheClaw,
  shearClaw,
  bite,
  axe,
  greatAxe,
  sword,
  greatSword,
  spear,
  soulHand,
  tentacle,
  gore,
  livingMouthHand,
  stinger,
  spit,
  zarashCannon,
  wail,
  soulBlast,
  handXbow

}
