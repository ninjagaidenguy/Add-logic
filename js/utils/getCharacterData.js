// import localforage from 'localforage';

const getValue = (selector) => {
  const element = document.querySelector(selector);
  return element ? element.value : null;
};

export const saveCharacterData = () => {
  const characterData = {
    basicInfo: {
      name: getValue('[name="characterName"]'),
      player: getValue('[name="player"]'),
      alignment: document.querySelector('[name="alignment"]').value,
      currentXP: getValue('[name="xpCurrent"]'),
      netLevel: getValue('[name="xpNextLevel"]'),
      xpSpeed: document.querySelector('[name="xpSpeed"]').value,
      mergedClasses: getValue('[name="classes"]'),
      race: document.querySelector('[name="race"]').value,
      campaign: getValue('[name="campaign"]'),
      deity: getValue('[name="deity"]'),
      level: getValue('[name="level"]'),
      size: document.querySelector('[name="Size"]').value,
      age: getValue('[name="age"]'),
      gender: document.querySelector('[name="Gender"]').value,
      height: getValue('[name="height"]'),
      weight: getValue('[name="weight"]'),
      eyes: getValue('[name="eyes"]'),
      hair: getValue('[name="hair"]'),
    },
    abilitiesScores: {
      str: {
        total: getValue('[name="strTotal"]'),
        mod: getValue('[name="strMod"]'),
        base: getValue('[name="strBase"]'),
        cost: getValue('[name="strCost"]'),
        racial: getValue('[name="strRBonus"]'),
        bonus: getValue('[name="strRBonusManual"]'),
        levels: getValue('[name="strLvls"]'),
        class: getValue('[name="strClass"]'),
        misc: getValue('[name="strMisc"]'),
        gear: getValue('[name="strGear"]'),
        mythic: getValue('[name="strMythic"]'),
      },
      dex: {
        total: getValue('[name="dexTotal"]'),
        mod: getValue('[name="dexMod"]'),
        base: getValue('[name="dexBase"]'),
        cost: getValue('[name="dexCost"]'),
        racial: getValue('[name="dexRBonus"]'),
        bonus: getValue('[name="dexRBonusManual"]'),
        levels: getValue('[name="dexLvls"]'),
        class: getValue('[name="dexClass"]'),
        misc: getValue('[name="dexMisc"]'),
        gear: getValue('[name="dexGear"]'),
        mythic: getValue('[name="dexMythic"]'),
      },
      con: {
        total: getValue('[name="conTotal"]'),
        mod: getValue('[name="conMod"]'),
        base: getValue('[name="conBase"]'),
        cost: getValue('[name="conCost"]'),
        racial: getValue('[name="conRBonus"]'),
        bonus: getValue('[name="conRBonusManual"]'),
        levels: getValue('[name="conLvls"]'),
        class: getValue('[name="conClass"]'),
        misc: getValue('[name="conMisc"]'),
        gear: getValue('[name="conGear"]'),
        mythic: getValue('[name="conMythic"]'),
      },
      int: {
        total: getValue('[name="intTotal"]'),
        mod: getValue('[name="intMod"]'),
        base: getValue('[name="intBase"]'),
        cost: getValue('[name="intCost"]'),
        racial: getValue('[name="intRBonus"]'),
        bonus: getValue('[name="intRBonusManual"]'),
        levels: getValue('[name="intLvls"]'),
        class: getValue('[name="intClass"]'),
        misc: getValue('[name="intMisc"]'),
        gear: getValue('[name="intGear"]'),
        mythic: getValue('[name="intMythic"]'),
      },
      wis: {
        total: getValue('[name="wisTotal"]'),
        mod: getValue('[name="wisMod"]'),
        base: getValue('[name="wisBase"]'),
        cost: getValue('[name="wisCost"]'),
        racial: getValue('[name="wisRBonus"]'),
        bonus: getValue('[name="wisRBonusManual"]'),
        levels: getValue('[name="wisLvls"]'),
        class: getValue('[name="wisClass"]'),
        misc: getValue('[name="wisMisc"]'),
        gear: getValue('[name="wisGear"]'),
        mythic: getValue('[name="wisMythic"]'),
      },
      cha: {
        total: getValue('[name="chaTotal"]'),
        mod: getValue('[name="chaMod"]'),
        base: getValue('[name="chaBase"]'),
        cost: getValue('[name="chaCost"]'),
        racial: getValue('[name="chaRBonus"]'),
        bonus: getValue('[name="chaRBonusManual"]'),
        levels: getValue('[name="chaLvls"]'),
        class: getValue('[name="chaClass"]'),
        misc: getValue('[name="chaMisc"]'),
        gear: getValue('[name="chaGear"]'),
        mythic: getValue('[name="chaMythic"]'),
      },
    },
    hitPoints: {
      total: getValue('[name="hpMax"]'),
      curntHP: getValue('[name="hpCurrent"]'),
      nonLethal: getValue('[name="nonlethal"]'),
      hitDice: getValue('[name="hd"]'),
      damageReduction: getValue('[name="dr"]'),
    },
    armorClass: {
      AC: {
        total: getValue('[name="hpMax"]'),
        armor: getValue('[name="acArmor"]'),
        sheild: getValue('[name="acShield"]'),
        dex: getValue('[name="acDex"]'),
        size: getValue('[name="acSize"]'),
        dodge: getValue('[name="acDodge"]'),
        natural: getValue('[name="acNatural"]'),
        deflection: getValue('[name="acDeflect"]'),
        misc: getValue('[name="acMisc"]'),
        temp: getValue('[name="acTemp"]'),
      },
      touch: {
        total: getValue('[name="tTouch"]'),
        dex: getValue('[name="tDex"]'),
        size: getValue('[name="tSize"]'),
        dodge: getValue('[name="tDodge"]'),
        deflection: getValue('[name="tDeflect"]'),
        misc: getValue('[name="tMisc"]'),
        temp: getValue('[name="tTemp"]'),
      },
      flatFooted: {
        total: getValue('[name="ffMax"]'),
        armor: getValue('[name="ffArmor"]'),
        sheild: getValue('[name="ffShield"]'),
        size: getValue('[name="ffSize"]'),
        natural: getValue('[name="ffNatural"]'),
        deflection: getValue('[name="ffDeflect"]'),
        misc: getValue('[name="ffMisc"]'),
        temp: getValue('[name="ffTemp"]'),
      },
    },
    saveThrows: {
      fortitude: {
        total: getValue('[name="fort"]'),
        base: getValue('[name="fortBase"]'),
        ability: getValue('[name="fortMod"]'),
        mod: document.querySelector('[name="fortModAbility"]').value,
        magic: getValue('[name="fortMagic"]'),
        temp: getValue('[name="fortTemp"]'),
      },
      reflex: {
        total: getValue('[name="ref"]'),
        base: getValue('[name="refBase"]'),
        ability: getValue('[name="refMod"]'),
        mod: document.querySelector('[name="refModAbility"]').value,
        magic: getValue('[name="refMagic"]'),
        temp: getValue('[name="refTemp"]'),
      },
      will: {
        total: getValue('[name="will"]'),
        base: getValue('[name="willBase"]'),
        ability: getValue('[name="willMod"]'),
        mod: document.querySelector('[name="willModAbility"]').value,
        magic: getValue('[name="willMagic"]'),
        temp: getValue('[name="willTemp"]'),
      },
    },
  };

  // localforage
  //   .setItem('characterData', characterData)
  //   .then(() => {
  //     alert('Character saved locally!');
  //   })
  //   .catch((err) => {
  //     alert('Error saving character: ' + err);
  //   });
  return console.log('Character data:', characterData);
};
