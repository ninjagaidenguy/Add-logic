const getFieldValue = (selector) => {
  const element = document.querySelector(selector);
  return element ? element.value : '';
};

function buildSection(mapping) {
  const result = {};
  for (const [key, selector] of Object.entries(mapping)) {
    const value = getFieldValue(selector);
    if (value !== '' && value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
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
  speed: '[name="baseSpeed"]',
  speedArmor: '[name="armorSpeed"]',
  speedNotes: '[name="noteSpeed"]',
  casterLevel: '[name="cl"]',
  casterLevelTemp: '[name="clTemp"]',
  spellResistance: '[name="sr"]'
};

const abilitiesMapUpdate = (type) => ({
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
});

const hitPointsMap = {
  total: '[name="hpMax"]',
  curntHP: '[name="hpCurrent"]',
  nonLethal: '[name="nonlethal"]',
  hitDice: '[name="hd"]',
  damageReduction: '[name="dr"]',
};

const acMap = {
  total: '[name="acTotal"]',
  armor: '[name="acArmor"]',
  shield: '[name="acShield"]',
  dex: '[name="acDex"]',
  size: '[name="acSize"]',
  dodge: '[name="acDodge"]',
  natural: '[name="acNatural"]',
  deflection: '[name="acDeflect"]',
  misc: '[name="acMisc"]',
  temp: '[name="acTemp"]',
};

const touchMap = {
  total: '[name="tTotal"]',
  dex: '[name="tDex"]',
  size: '[name="tSize"]',
  dodge: '[name="tDodge"]',
  deflection: '[name="tDeflect"]',
  misc: '[name="tMisc"]',
  temp: '[name="tTemp"]',
};

const flatFootedMap = {
  total: '[name="ffTotal"]',
  armor: '[name="ffArmor"]',
  shield: '[name="ffShield"]',
  size: '[name="ffSize"]',
  natural: '[name="ffNatural"]',
  deflection: '[name="ffDeflect"]',
  misc: '[name="ffMisc"]',
  temp: '[name="ffTemp"]',
};

const savesMapFunction = (saveType) => ({
  total: `[name="${saveType}"]`,
  base: `[name="${saveType}Base"]`,
  ability: `[name="${saveType}Mod"]`,
  mod: `[name="${saveType}ModAbility"]`,
  magic: `[name="${saveType}Magic"]`,
  temp: `[name="${saveType}Temp"]`,
});
const weapons = {

}
const armorAndShields = {
  
}
const feats = {

}
const classAbilities = {

}
const specialAbilities = {
  
}
const skills = {
  
}
const itemsAndGear = {
  
}
const consumables = {
  
}
const currency = {
  
}

export const saveCharacterData = () => {
  const abilitiesScores = {
    str: buildSection(abilitiesMapUpdate('str')),
    dex: buildSection(abilitiesMapUpdate('dex')),
    con: buildSection(abilitiesMapUpdate('con')),
    int: buildSection(abilitiesMapUpdate('int')),
    wis: buildSection(abilitiesMapUpdate('wis')),
    cha: buildSection(abilitiesMapUpdate('cha')),
  };

  const armorClass = {
    AC: buildSection(acMap),
    touch: buildSection(touchMap),
    flatFooted: buildSection(flatFootedMap),
  };

  const saveThrows = {
    fortitude: buildSection(savesMapFunction('fort')),
    reflex: buildSection(savesMapFunction('ref')),
    will: buildSection(savesMapFunction('will')),
  };
  const featsAndSpecialAbilities = {
  
  }

  const characterData = {
    basicInfo: buildSection(basicInfoMap),
    abilitiesScores: abilitiesScores,
    hitPoints: buildSection(hitPointsMap),
    armorClass: armorClass,
    saveThrows: saveThrows,
    weapons,
    armorAndShields,
    featsAndSpecialAbilities,
    skills,
    itemsAndGear,
    consumables,
    currency
  };

  // localforage.setItem('characterData', characterData)...
  console.log('Character data:', characterData);
};