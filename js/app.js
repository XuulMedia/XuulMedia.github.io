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



const app = new Vue({
  el: '#app',

  data: {
    noFirstRoll: false,
    soul: true,
    rolled: false,

    numOfReapers: 0,
    reapers: [],

    speed: 30,
    speedType: '',


    challengeRating: 3,

    overrideStr: false,
    overrideDex: false,
    overrideCon: false,
    overrideInt: false,
    overrideWis: false,
    overrideCha: false,
    overrideSol: false,

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
      this.overrideStr = false
      this.overrideDex = false
      this.overrideCon = false
      this.overrideInt = false
      this.overrideWis = false
      this.overrideCha = false
      this.overrideSol = false

    },

    generateReaper: function () {
      this._head = this.selectPart(partCategorizer('Head'), this.rollForMultiLimb(3))
      this.head = this.multiPart(this._head)

      this._body = this.selectPart(partCategorizer('Body'))
      this.body = this._body[0].name + ' ' + this._body[0].type

      this._arms = this.selectPart(partCategorizer('Arm'), this.rollForMultiLimb(4))
      this.arms = this.multiPart(this._arms)

      this._legs = this.selectPart(partCategorizer('Legs'))
      this.legs = this._legs[0].name + ' ' + this._legs[0].type

      let creature = this.createReaperCard()
      this.reapers.push(creature)

      this.numOfReapers++
      this.noFirstRoll = false
      this.rolled = false


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

    multiPart: function (array) {
      let output
      if (array.length == 1) {
        output = array[0].name + ' ' + array[0].type
      } else if (array.length == 2) {
        output = array[0].type + 's(2): ' + array[0].name + ' & ' + array[1].name
      } else if (array.length == 3) {
        output = array[0].type + 's(3): ' + array[0].name + ', ' + array[1].name + ', & ' + array[2].name
      } else if (array.length == 4) {
        output = array[0].type + 's(4): ' + array[0].name + ', ' + array[1].name + ', ' + array[2].name + ', & ' + array[3].name
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
        HP: this.HP,
        AC: this.AC,

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

      }

      return monster



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
      console.log(num)
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

      console.log(selection)

      return selection
    },
  },
}
)

Vue.component('reaper-card', {
  template: `
  <div class="card">
          <h5 class="card-title"">{{Reaper-Name}}</h5>
          <h6 class="card-subtitle">{{size}} Demon, Chaotic Evil
          <hr />
          <div class="card-text"> 
            <p> Armor Class: {{AC}}</p>
            <p> Hit Points: {{HP}}</p>
            <p> Speed: {{speed}} {{speedType}}</p>
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
                <td>{{str}} ( {{strMod}} ) </td>
                <td>{{dex}} ( {{dexMod}} ) </td>
                <td>{{ion}} ( {{conMod}} ) </td>
                <td>{{int}} ( {{intMod}} ) </td>
                <td>{{wis}} ( {{wisMod}} ) </td>
                <td>{{cha}} ( {{chaMod}} ) </td>
                <td v-if='soul'>{{sol}} ( {{solMod}} ) </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div class="trait-action">
            <p>{{traits}}</p>
            <p>{{actions}}</p>
            <br>
            <p>{{parts}}</p>
          </div>
      </div>
  `,
  data: function () {

  }



})



// for the template use numOfReapers as a variable for the ID. The can just continue to add reapers that will have a different ID
// after that refactor the card to a textbox with a copy button on the card and just under the console.



// let allHeads = partCategorizer('Head')


// const selectPart = function (allPartArray, num) {
//   let selection = []
//   let selectionPool = []
//   allPartArray.forEach(indexNum => {
//     let testLevel
//     switch (indexNum.requirementType) {
//       case 'STR':
//         testLevel = app.str
//         break
//       case 'DEX':
//         testLevel = app.dex
//         break
//       case 'CON':
//         testLevel = app.con
//         break
//       case 'INT':
//         testLevel = app.int
//         break
//       case 'WIS':
//         testLevel = app.wis
//         break
//       case 'CHA':
//         testLevel = app.cha
//         break
//       case 'SOL':
//         testLevel = app.sol
//         break
//     }
//     if (testLevel = indexNum.requirementAmount) {
//       selectionPool.push(indexNum)
//     }
//   })

//   if(num) {
//       switch(num){
//         case 1:
//           selection = [selectionPool[dice(selectionPool.length - 1)]]
//           break
//         case 2:
//           selection = [selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)]]
//           break
//         case 3:
//           selection = [selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)]]
//           break
//         case 4:
//           selection = [selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)], selectionPool[dice(selectionPool.length - 1)]]
//           break
//         default:
//           selection = [selectionPool[dice(selectionPool.length - 1)]]
//           break
//       }
//     } else {
//       selection = [selectionPool[dice(selectionPool.length - 1)]]
//     }


//     return selection
//   };


//   console.log(allHeads[1].name + allHeads[1].type)
// let chosenHead = selectPart(allHeads)
// console.log(chosenHead[0].name)