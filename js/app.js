import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.6/dist/vue.esm.browser.js'
import allParts from '/js/parts.js'


const dice = function (sides) {
  const randomNumber = Math.floor(Math.random() * sides) + 1;
  return randomNumber
}
const calcAttributeMod = function (val) {
  let score = Math.floor((val - 10) / 2);
  return score;
}

const partCategorizer = function (partType) {
  let arr = []
  let keys = Object.keys(allParts)
  for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    if (allParts[element].type == partType) {
      arr.push(allParts[element])
    }
  }
  return arr
}

const thrash = `Thrash. Melee Weapon Attack; +2 to hit, Reach 5ft., one target. Hit: 1D6 +1. Bludgeoning.`;

const app = new Vue({
  el: '#app',

  data: {
    noFirstRoll: false,
    soul: true,
    rolled: false,
    devloperMode: false,

    numOfReapers: 0,
    reapers: [],

    speed: 30,
    speedType: '',

    numOfHeads: 0,
    numOfArms: 0,


    challengeRating: 3,

    overrideStr: false,
    overrideDex: false,
    overrideCon: false,
    overrideInt: false,
    overrideWis: false,
    overrideCha: false,
    overrideSol: false,

    name: 'Reaper',

    str: { set: function () { return this._str } },
    dex: { set: function () { return this._dex } },
    con: { set: function () { return this._con } },
    int: { set: function () { return this._int } },
    wis: { set: function () { return this._wis } },
    cha: { set: function () { return this._cha } },
    sol: { set: function () { return this._sol } },

    size: 'Medium',
    HP: 10,
    AC: 10,

    head: '',
    body: '',
    arms: '',
    legs: '',

    headTraits: '',
    bodyTraits: '',
    armsTraits: '',
    legsTraits: '',


    traits: '',
    actions: '',

  },
  computed: {
    strMod: function () { return calcAttributeMod(this.str) },
    dexMod: function () { return calcAttributeMod(this.dex) },
    conMod: function () { return calcAttributeMod(this.con) },
    intMod: function () { return calcAttributeMod(this.int) },
    wisMod: function () { return calcAttributeMod(this.wis) },
    chaMod: function () { return calcAttributeMod(this.cha) },
    solMod: function () { return calcAttributeMod(this.sol) },


  },

  methods: {
    _str: function () { if (this.firstRoll == true) { return dice(20) } else { return 10 } },
    _dex: function () { if (this.firstRoll == true) { return dice(20) } else { return 10 } },
    _con: function () { if (this.firstRoll == true) { return dice(20) } else { return 10 } },
    _int: function () { if (this.firstRoll == true) { return dice(20) } else { return 10 } },
    _wis: function () { if (this.firstRoll == true) { return dice(20) } else { return 10 } },
    _cha: function () { if (this.firstRoll == true) { return dice(20) } else { return 10 } },
    _sol: function () { if (this.firstRoll == true) { return dice(20) } else { return 10 } },

    _strMod: function () { return calcAttributeMod(this.str) },
    _dexMod: function () { return calcAttributeMod(this.dex) },
    _conMod: function () { return calcAttributeMod(this.con) },
    _intMod: function () { return calcAttributeMod(this.int) },
    _wisMod: function () { return calcAttributeMod(this.wis) },
    _chaMod: function () { return calcAttributeMod(this.cha) },
    _solMod: function () { return calcAttributeMod(this.sol) },

    toggleSoul: function () {
      soul = !soul
    },
    soulDelete: function () {
      if (this.soul == false) {
        delete app.sul
        delete app.solMod
      }
    },
    rollTheDice: function () {
      this.noFirstRoll = true
      if (this.overrideStr == false || this.str <= 0 || this.str == "") {
        this.str = dice(20)
      }
      if (this.overrideDex == false || this.dex <= 0 || this.dex == "") {
        this.dex = dice(20)
      }
      if (this.overrideCon == false || this.con <= 0 || this.con == "") {
        this.con = dice(20)
      }
      if (this.overrideInt == false || this.int <= 0 || this.int == "") {
        this.int = dice(20)
      }
      if (this.overrideWis == false || this.wis <= 0 || this.wis == "") {
        this.wis = dice(20)
      }
      if (this.overrideCha == false || this.cha <= 0 || this.cha == "") {
        this.cha = dice(20)
      }
      if (this.overrideSol == false || this.sol <= 0 || this.sol == "") {
        this.sol = dice(20)
      }


      this.size = this.calcSize()
      this.HP = this.calcHP()
      this.AC = this.calcAC()


    },

    calcSize: () => {
      let roll = dice(6);
      if (roll == 1) {
        return 'Small';
      } else if (roll == 6) {
        return 'Large';
      } else {
        return 'Medium';
      }
    },

    calcHP: function () {
      let rolled
      if (this.size == 'Small') {
        rolled = 6
      } else if (this.size == 'Medium') {
        rolled = 8
      } else if (this.size == 'Large') {
        rolled = 12
      }

      let conBonus = 5
      if (this.conMod <= 1) {
        conBonus = dice(rolled)
      } else {
        for (let i = 0; i < this.conMod; i++) {

        }
      }

      if (this.challengeRating - 2 <= 1) {
        if (this.size == 'Small') {
          conBonus = 6;
        } else if (this.size == 'Medium') {
          conBonus = 8;
        } else if (this.size == 'Large') {
          conBonus = 12;
        }

      } else if (this.challengeRating - 2 > 1) {
        if (this.size == 'Small') {
          conBonus *= this.challengeRating - 1;
        } else if (this.size == 'Medium') {
          conBonus *= this.challengeRating;
        } else if (this.size == 'Large') {
          conBonus *= this.challengeRating;
        }
      }

      return conBonus
    },

    calcAC: function () {
      let baseAC
      baseAC = dice(10) + 9;
      if (this.size == 'Large') {
        baseAC -= 2
      } else if (this.size == 'Small') {
        baseAC += 2
      }
      return baseAC
    },

    confirmTheRoll: function () {
      this.noFirstRoll = false
      this.rolled = !this.rolled
     

    },


    multiPart: function (array, typ) {
      let type
      switch (typ) {
        case 'Heads': type = this.numOfHeads
          break
        case 'Arms': type = this.numOfArms
          break
      }

      let output
      if (array.length == 1) {
        output = array[0].name + ' ' + array[0].type
        type = 1
      } else if (array.length == 2) {
        output = array[0].type + 's(2): ' + array[0].name + ' & ' + array[1].name
        type = 2
      } else if (array.length == 3) {
        output = array[0].type + 's(3): ' + array[0].name + ', ' + array[1].name + ', & ' + array[2].name
        type = 3
      } else if (array.length == 4) {
        output = array[0].type + 's(4): ' + array[0].name + ', ' + array[1].name + ', ' + array[2].name + ', & ' + array[3].name
        type = 4
      }

      return output
    },

    selectPart: function (allPartArray, num) {
      let selection = []
      let selectionPool = []
      allPartArray.forEach(indexNum => {
        let reaperSkill
        switch (indexNum.requirementType) {
          case 'STR':
            reaperSkill = app.str
            break
          case 'DEX':
            reaperSkill = app.dex
            break
          case 'CON':
            reaperSkill = app.con
            break
          case 'INT':
            reaperSkill = app.int
            break
          case 'WIS':
            reaperSkill = app.wis
            break
          case 'CHA':
            reaperSkill = app.cha
            break
          case 'SOL':
            reaperSkill = app.sol
            break
        }
        if (reaperSkill >= indexNum.requirementAmount) {
          selectionPool.push(indexNum)
        }
      })

      if (num == 4) {
        selection = [selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)]]
      }
      else if (num == 2) {
        selection = [selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)]]
      } else if (num == 3) {
        selection = [selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)]]
      } else {
        selection = [selectionPool[dice(selectionPool.length - 1)]]
      }



      return selection
    },

    multiPartTraits: function (array) {
      let output
      if (array.length == 1) {
        output = [array[0].traits]
      } else if (array.length == 2) {
        output = [array[0].traits, array[1].traits]
      } else if (array.length == 3) {
        output = [array[0].traits, array[1].traits, array[2].traits]
      } else if (array.length == 4) {
        output = [array[0].traits, array[1].traits, array[2].traits, array[3].traits]
      }

      return output
    },

    rollForMultiLimb: function (max) {
      let limbs
      let chance = dice(12)

      if (max == 4) {
        switch (chance) {
          case 1: limbs = 1
          case 2: limbs = 1
            break
          case 3: limbs = 2
          case 4: limbs = 2
          case 5: limbs = 2
          case 6: limbs = 2
          case 7: limbs = 2
          case 8: limbs = 2
          case 9: limbs = 2
            break
          case 10: limbs = 3
          case 11: limbs = 3
            break
          case 12: limbs = 4
        }
      } else if
        (max == 3) {
        switch (chance) {
          case 1: limbs = 1
          case 2: limbs = 1
          case 3: limbs = 1
          case 4: limbs = 1
          case 5: limbs = 1
          case 6: limbs = 1
          case 7: limbs = 1
          case 8: limbs = 1
            break
          case 9: limbs = 2
          case 10: limbs = 2
          case 11: limbs = 2
            break
          case 12: limbs = 3
        }
      }


      return limbs
    },

    traitCollector: function () {
      let allTraits = []

      this.legsTraits.forEach(element => {
        allTraits.push(element)
      });

      this.bodyTraits.forEach(element => {
        allTraits.push(element)
      });

      this.armsTraits.forEach(element => {
        allTraits.push(element)
      });

      this.headTraits.forEach(element => {
        allTraits.push(element)
      });

      allTraits = allTraits.flat()


      allTraits = allTraits.filter(function (trait, index) {
        return trait != null && allTraits.indexOf(trait) >= index && Array.isArray(trait) == false
      })






      return allTraits
    },

    multiPartActions: function (array) {
      let output
      if (array.length == 1) {
        output = [array[0].actions]
      } else if (array.length == 2) {
        output = [array[0].actions, array[1].actions]
      } else if (array.length == 3) {
        output = [array[0].actions, array[1].actions, array[2].actions]
      } else if (array.length == 4) {
        output = [array[0].actions, array[1].actions, array[2].actions, array[3].actions]
      }
      output = output.flat()

      return output
    },

    actionCollector: function () {
      let allActions = []

      this.legsActions.forEach(element => {
        allActions.push(element)
      });

      this.bodyActions.forEach(element => {
        allActions.push(element)
      });

      this.armsActions.forEach(element => {
        allActions.push(element)
      });

      this.headActions.forEach(element => {
        allActions.push(element)
      });

      allActions = allActions.flat()



      allActions = allActions.filter(function (trait, index) {
        return trait != null && allActions.indexOf(trait) >= index && Array.isArray(trait) == false
      })

      return allActions
    },

    selectReaperName: function () {
      let chosenName
      let allParts = [this._head, this._body, this._legs, this._arms]

      allParts = allParts.flat()

      let rarityArray = []

      allParts.forEach(element => {
        let rare = element.rarity()
        rarityArray.push(rare)
      });


      chosenName = allParts[this.indexOfMax(rarityArray)].name + ' ' + allParts[this.indexOfMax(rarityArray)].type

      return chosenName
    },

    toHit: function (stat) {
      let hit
      switch (stat) {
        case 'STR':
          hit = app.strMod
          break
        case 'DEX':
          hit = app.dexMod
          break
        case 'CON':
          hit = app.conMod
          break
        case 'INT':
          hit = app.intMod
          break
        case 'WIS':
          hit = app.wisMod
          break
        case 'CHA':
          hit = app.chaMod
          break
        case 'SOL':
          hit = app.solMod
          break
      }
      if (hit > 0) {
        hit = '+' + hit
      }
      return hit
    },

    actionWriter: function () {
      let output = []
      if (this.allActions.length <= 0) {
        output.push(thrash)
      }

      this.allActions.forEach(element => {
        let ability
        if (element.statReq != 'Spell') {
          ability = element.name + ' ' + element.type + ' ' + this.toHit(element.statReq) + ' to hit, ' + element.range + element.dmg + element.dmgType
        } else if (element.statReq == 'Spell') {
          ability = element.name + element.recharge + element.effect
        }
        output.push(ability)
      });
      return output
    },

    indexOfMax: function (arr) {
      if (arr.length === 0) {
        return -1;
      }

      let max = arr[0];
      let maxIndex = 0;

      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
        }
      }

      return maxIndex;
    },

    traitApplier: function () {

      this._rawTraits.forEach(ele => {
        let element = ele.split(":", 1)
        console.log('element' + element)

        if (element == "Frail") {
          this.HP -= 5
        } else if (element == "Vigor") {
          this.HP += 5
        } else if (element == "HealthyConstitution") {
          this.HP += 10
        } else if (element == "Robust") {
          this.HP += 15
        } else if (element == "TopForm") {
          this.HP *= 2
        } else if (element == "Tough") {
          this.AC += 1
        } else if (element == "VoidicResistance") {
          this.AC += 2
        } else if (element == "Armored") {
          this.AC += 3
        } else if (element == "Bulwark") {
          this.AC += 5
        } else if (element == "Weak Flight") {
          this.AC -= 2
          this.speedType = 'Flying'
        } else if (element == "Flight") {
          this.speedType = 'Flying'
        } else if (element == "Fast") {
          this.speed += 10
        } else if (element == "VeryFast") {
          this.speed += 20
        } else if (element == "TemporallyFast") {
          this.speed += 40
        } else if (element == "Immobile") {
          this.speed = 0
        } else if (element == 'Psychic Flight') {
          this.speedType = '| 30ft Flying'
        } else if (element == 'Agile') {
          this.AC += 2
        } else if (element == 'Slow') {
          this.speed -= 10
        }
        return this._rawTraits
      });


    },

    generateReaper: function () {
      this._head = this.selectPart(partCategorizer('Head'), this.rollForMultiLimb(3, 'Heads'))
      this.head = this.multiPart(this._head)
      this.headTraits = this.multiPartTraits(this._head)
      this.headActions = this.multiPartActions(this._head)

      this._body = this.selectPart(partCategorizer('Body'))
      this.body = this._body[0].name + ' ' + this._body[0].type
      this.bodyTraits = this._body[0].traits
      this.bodyActions = this._body[0].actions

      this._arms = this.selectPart(partCategorizer('Arm'), this.rollForMultiLimb(4, 'Arms'))
      this.arms = this.multiPart(this._arms)
      this.armsTraits = this.multiPartTraits(this._arms)
      this.armsActions = this.multiPartActions(this._arms)

      this._legs = this.selectPart(partCategorizer('Legs'))
      this.legs = this._legs[0].name + ' ' + this._legs[0].type
      this.legsTraits = this._legs[0].traits
      this.legsActions = this._legs[0].actions

      this._name = this.selectReaperName()
      this.name = this._name
      this.challengeRating = this.challengeRating,


      this._rawTraits = this.traitCollector()
      this.traitApplier()
      this.traits = this._rawTraits

      this.allActions = this.actionCollector()
      this._actions = this.actionWriter()
      console.log(this.actions + 'actions')
      this.actions = this._actions

      let creature = this.createReaperCard()
      this.reapers[this.numOfReapers] = creature

      this.numOfReapers++
      this.noFirstRoll = false
      this.rolled = false


    },

    createReaperCard: function () {
      let monster =
        this.monster = {
          str: this.str,
          dex: this.dex,
          con: this.con,
          int: this.int,
          wis: this.wis,
          cha: this.cha,
          sol: this.sol,
          size: this.size,

          name: this.name,
          CR: this.challengeRating,

          strMod: this.strMod,
          dexMod: this.dexMod,
          conMod: this.conMod,
          intMod: this.intMod,
          wisMod: this.wisMod,
          chaMod: this.chaMod,
          solMod: this.solMod,


          head: this.head,
          body: this.body,
          arms: this.arms,
          legs: this.legs,

          traits: this.traits,
          actions: this.actions,

          speed: this.speed,
          speedType: this.speedType,

          HP: this.HP,
          AC: this.AC,
        }
      return monster
    },

    reset: function () {
      this.noFirstRoll = false
      this.rolled = false
      this.overrideStr = false
      this.overrideDex = false
      this.overrideCon = false
      this.overrideInt = false
      this.overrideWis = false
      this.overrideCha = false
      this.overrideSol = false


      this.head = null
      this.body = null
      this.arms = null
      this.legs = null

      this.str = null
      this.dex = null
      this.con = null
      this.int = null
      this.wis = null
      this.cha = null
      this.sol = null

      this.strMod = null
      this.dexMod = null
      this.conMod = null
      this.intMod = null
      this.wisMod = null
      this.chaMod = null
      this.solMod = null
    },


  },
}
)

Vue.component('reaper-card', {
  template: `
  <div class="card">
          <h5 class="card-title"">{{index.Reaper-Name}}</h5>
          <h6 class="card-subtitle">{{index.size}} Demon, Chaotic Evil</h6>
          <hr />
          <div class="card-text"> 
            <p> Armor Class: {{index.AC}}</p>
            <p> Hit Points: {{index.HP}}</p>
            <p> Speed: {{index.speed}} {{speedType}}</p>
          </div>
          <hr />
          <table>
            <thead>
              <tr>
              <th>STR</th>
              <th>DEX</th>
              <th>CON</th>
              <th>INT</th>
              <th>WIS</th>
              <th>CHA</th>
              <th v-if='soul'>SOL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{index.str}} ( {{index.strMod}} ) </td>
                <td>{{index.dex}} ( {{index.dexMod}} ) </td>
                <td>{{index.ion}} ( {{index.conMod}} ) </td>
                <td>{{index.int}} ( {{index.intMod}} ) </td>
                <td>{{index.wis}} ( {{index.wisMod}} ) </td>
                <td>{{index.cha}} ( {{index.chaMod}} ) </td>
                <td v-if='soul'>{{index.sol}} ( {{index.solMod}} ) </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div class="trait-action">
            <p>{{index.traits}}</p>
            <p>{{index.actions}}</p>
            <br>
            <p>{{index.parts}}</p>
          </div>
      </div>
  `,
  data: function () {

  }
}
)
