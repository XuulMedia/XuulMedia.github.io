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



const app = new Vue({
  el: '#app',

  data: {
    firstRoll: false,
    soul: true,
    rolled: false,


    challengeRating: 3,
    speed: 30,
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




  },
  computed: {
    _str: function () { return dice(20) },
    _dex: function () { return dice(20) },
    _con: function () { return dice(20) },
    _int: function () { return dice(20) },
    _wis: function () { return dice(20) },
    _cha: function () { return dice(20) },
    _sol: function () { return dice(20) },

    strMod: function () { return calcAttributeMod(this.str) },
    dexMod: function () { return calcAttributeMod(this.dex) },
    conMod: function () { return calcAttributeMod(this.con) },
    intMod: function () { return calcAttributeMod(this.int) },
    wisMod: function () { return calcAttributeMod(this.wis) },
    chaMod: function () { return calcAttributeMod(this.cha) },
    solMod: function () { return calcAttributeMod(this.sol) },



    size: () => {
      let roll = dice(6);
      if (roll == 1) {
        return 'Small';
      } else if (roll == 6) {
        return 'Large';
      } else {
        return 'Medium';
      }
    },

    HP: function () {
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

    AC: function () {
      let baseAC
      baseAC = dice(10) + 9;
      if (this.size == 'Large') {
        baseAC -= 2
      } else if (this.size == 'Small') {
        baseAC += 2
      }
      return baseAC
    }





  },
  methods: {
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
      this.firstRoll = true
      if(this.overrideStr == false || this.str <= 0 || this.str == ""){
        this.str = dice(20)}
      if(this.overrideDex == false || this.dex <= 0 || this.dex == "" ) {
        this.dex = dice(20)}
      if(this.overrideCon == false || this.con <= 0 || this.con == "" ) {
        this.con = dice(20)}
      if(this.overrideInt == false || this.int <= 0 || this.int == "" ) {
        this.int = dice(20)}
      if(this.overrideWis == false || this.wis <= 0 || this.wis == "" ) {
        this.wis = dice(20)}
      if(this.overrideCha == false || this.cha <= 0 || this.cha == "" ) {
        this.cha = dice(20)}
      if(this.overrideSol == false || this.sol <= 0 || this.sol == "" ) {
        this.sol = dice(20)}
    },

    confirmTheRoll: function () {
      this.firstRoll = false
      this.rolled = !this.rolled
      this.overrideStr = false
      this.overrideDex = false
      this.overrideCon = false
      this.overrideInt = false
      this.overrideWis = false
      this.overrideCha = false
      this.overrideSol = false
    },






  },


}
)

