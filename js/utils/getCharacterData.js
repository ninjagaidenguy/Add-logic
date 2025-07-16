// import localforage from 'localforage';

const getFieldValue = (selector) => {
  const element = document.querySelector(selector)
  return element ? element.value : ''
}

const buildSelection(mapping) {
  const result = {}
  for (const [key, selector] of Object.entries(mapping)) {
    result[key] = getFieldValue(selector)
  }
  return result
}
const basicInfoMap = {
  name: '[name="characterName"]',
  player: '[name="player"]',
  alignment: '[name="alignment"]',
  currentXP: '[name="xpCurrent"]',
  netLevel: '[name="xpNextLevel"]',
  xpSpeed: '[name="xpSpeed"]',
  mergedClasses: '[name="classes"]',
  race: '[name="race"]',
  campaign: '[name="campaign"]',
  deity: '[name="deity"]',
  level: '[name="level"]',
  size: '[name="Size"]',
  age: '[name="age"]',
  gender: '[name="Gender"]',
  height: '[name="height"]',
  weight: '[name="weight"]',
  eyes: '[name="eyes"]',
  hair: '[name="hair"]',
};

const abilitiesMapUpdate = (type) {
  const map = {
    mod: `[name="${type}Mod"]`,
    base: `[name="${type}Base"]`,
    cost: `[name="${type}Cost"]`,
    racial: `[name="${type}RBonus"]`,
    bonus: `[name="${type}RBonusManual"]`,
    levels: `[name="${type}Lvls"]`,
    class: `[name="${type}Class"]`,
    misc: `[name="${type}Misc"]`,
    gear: `[name="${type}Gear"]`,
    mythic: `[name="${type}Mythic"]`
  } 
 return map
}
const abilitiesScores = {
  str: buildSelection(abilitiesMapUpdate('str')),
  dex: buildSelection(abilitiesMapUpdate('dex')),
  con: buildSelection(abilitiesMapUpdate('con')),
  int: buildSelection(abilitiesMapUpdate('int')),
  wis: buildSelection(abilitiesMapUpdate('wis')),
  cha: buildSelection(abilitiesMapUpdate('cha')),
};
const hitpoints = {
  total: '[name="hpMax"]',
  curntHP: '[name="hpCurrent"]',
  nonLethal: '[name="nonlethal"]',
  hitDice: '[name="hd"]',
  damageReduction: '[name="dr"]',
}
const armorMap = (type) {
  const map = {
    
  }
  return map
}

export const saveCharacterData = () => {
  const characterData = {
    basicInfo: buildSelection(basicInfoMap),
    abilitiesScores: abilitiesScores,
    hitPoints: buildSelection(hitPoints),
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
