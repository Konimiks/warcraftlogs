import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {throwError} from 'rxjs';

const serverName = 'черныи-шрам';
const serverRegion = 'EU';
const bosses = [
  {
    encounterId: 2298,
    bossName: 'Abyssal Commander Sivara'
  },
  {
    encounterId: 2305,
    bossName: 'Radiance of Azshara'
  },
  {
    encounterId: 2289,
    bossName: 'Blackwater Behemoth'
  },
  {
    encounterId: 2304,
    bossName: 'Lady Ashvane'
  },
  {
    encounterId: 2303,
    bossName: 'Orgozoa'
  },
  {
    encounterId: 2311,
    bossName: 'The Queen\'s Court'
  },
  {
    encounterId: 2293,
    bossName: 'Za\'qul'
  },
  {
    encounterId: 2299,
    bossName: 'Queen Azshara'
  }
];
const diff = {
  normal: 3,
  heroic: 4,
  mythic: 5
};

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public apiUrl: String;
  public apiKeys: any;
  public characterNames: any;
  public characterNamesHeals: any;
  public viewResult: any;
  public bossesTmp: any;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://www.warcraftlogs.com:443/v1';
    this.apiKeys = [
      'd12f97db62760f41847d839721339d40',
      '69ef4fb2d9bfa304c963fc14b554f60f',
      '95909ab62670423605aac8926d6ad8d5',
      '48f01ca2a19209fd98a11e4e3975d0f5',
      '75c4851134098050ee1d571d882c87df',
      '46c4a55557723f9763727df3100572b8',
      '28d4215f7efe456c011fa8754df32732',
      '23423235e156d32eb36564853db1a99e',
    ];
    this.bossesTmp = bosses;
    this.characterNames = [
      'Аббадин',
      'Адскийвар',
      'Альбедааое',
      'Арночка',
      'Аррсенал',
      'Бабушказачем',
      'Бэдтрик',
      'Везульвий',
      'Весёлаяморда',
      'Вивека',
      'Влажныерожки',
      'Воинкустов',
      'Воинодина',
      'Гвинович',
      'Гризливгриме',
      'Даннку',
      'Дашажмихекс',
      'Демонвоплоти',
      'Деодем',
      'Димелла',
      'Длинныеухи',
      'Докторриба',
      'Доктриса',
      'Жезер',
      'Зангуро',
      'Зеромус',
      'Злойлектор',
      'Зрумь',
      'Идоморх',
      'Иигар',
      'Исвиль',
      'Калитрея',
      'Келлорн',
      'Конимикс',
      'Краствер',
      'Ксеонор',
      'Кучапроблем',
      'Лакер',
      'Ланж',
      'Леснойиндеец',
      'Линде',
      'Мастерпве',
      'Мэлвинка',
      'Наршик',
      'Немуна',
      'Нимиан',
      'Ниссида',
      'Пингноль',
      'Подколенка',
      'Преториус',
      'Прохилон',
      'Рахазыч',
      'Сайба',
      'Седобородь',
      'Серёгавкедах',
      'Сечка',
      'Симплерлол',
      'Снарс',
      'Спиириит',
      'Спиритл',
      'Стильдвака',
      'Уепал',
      'Холиблайнд',
      'Холигёл',
      'Холидеад',
      'Царьпечень',
      'Шилес',
      'Шихузу',
      'Ыллидун',
      'Элисэндра',
    ];
    this.characterNamesHeals = [
      'Зеромус',
      'Конимикс',
      'Ланж',
      'Мэлвинка',
      'Немуна',
      'Нимиан',
      'Ниссида',
      'Пингноль',
      'Прохилон',
      'Сечка',
    ];
    this.viewResult = {
      dps: {
        normal: [
          { bossName: 'Abyssal Commander Sivara', encounterId: 2298, result: []},
          { bossName: 'Radiance of Azshara', encounterId: 2305, result: []},
          { bossName: 'Blackwater Behemoth', encounterId: 2289, result: []},
          { bossName: 'Lady Ashvane', encounterId: 2304, result: []},
          { bossName: 'Orgozoa', encounterId: 2303, result: []},
          { bossName: 'The Queen\'s Court', encounterId: 2311, result: []},
          { bossName: 'Za\'qul', encounterId: 2293, result: []},
          { bossName: 'Queen Azshara', encounterId: 2299, result: []}
        ],
        heroic: [
          { bossName: 'Abyssal Commander Sivara', encounterId: 2298, result: []},
          { bossName: 'Radiance of Azshara', encounterId: 2305, result: []},
          { bossName: 'Blackwater Behemoth', encounterId: 2289, result: []},
          { bossName: 'Lady Ashvane', encounterId: 2304, result: []},
          { bossName: 'Orgozoa', encounterId: 2303, result: []},
          { bossName: 'The Queen\'s Court', encounterId: 2311, result: []},
          { bossName: 'Za\'qul', encounterId: 2293, result: []},
          { bossName: 'Queen Azshara', encounterId: 2299, result: []}
        ],
        mythic: [
          { bossName: 'Abyssal Commander Sivara', encounterId: 2298, result: []},
          { bossName: 'Radiance of Azshara', encounterId: 2305, result: []},
          { bossName: 'Blackwater Behemoth', encounterId: 2289, result: []},
          { bossName: 'Lady Ashvane', encounterId: 2304, result: []},
          { bossName: 'Orgozoa', encounterId: 2303, result: []},
          { bossName: 'The Queen\'s Court', encounterId: 2311, result: []},
          { bossName: 'Za\'qul', encounterId: 2293, result: []},
          { bossName: 'Queen Azshara', encounterId: 2299, result: []}
        ]
      },
      hps: {
        normal: [
          { bossName: 'Abyssal Commander Sivara', encounterId: 2298, result: []},
          { bossName: 'Radiance of Azshara', encounterId: 2305, result: []},
          { bossName: 'Blackwater Behemoth', encounterId: 2289, result: []},
          { bossName: 'Lady Ashvane', encounterId: 2304, result: []},
          { bossName: 'Orgozoa', encounterId: 2303, result: []},
          { bossName: 'The Queen\'s Court', encounterId: 2311, result: []},
          { bossName: 'Za\'qul', encounterId: 2293, result: []},
          { bossName: 'Queen Azshara', encounterId: 2299, result: []}
        ],
        heroic: [
          { bossName: 'Abyssal Commander Sivara', encounterId: 2298, result: []},
          { bossName: 'Radiance of Azshara', encounterId: 2305, result: []},
          { bossName: 'Blackwater Behemoth', encounterId: 2289, result: []},
          { bossName: 'Lady Ashvane', encounterId: 2304, result: []},
          { bossName: 'Orgozoa', encounterId: 2303, result: []},
          { bossName: 'The Queen\'s Court', encounterId: 2311, result: []},
          { bossName: 'Za\'qul', encounterId: 2293, result: []},
          { bossName: 'Queen Azshara', encounterId: 2299, result: []}
        ],
        mythic: [
          { bossName: 'Abyssal Commander Sivara', encounterId: 2298, result: []},
          { bossName: 'Radiance of Azshara', encounterId: 2305, result: []},
          { bossName: 'Blackwater Behemoth', encounterId: 2289, result: []},
          { bossName: 'Lady Ashvane', encounterId: 2304, result: []},
          { bossName: 'Orgozoa', encounterId: 2303, result: []},
          { bossName: 'The Queen\'s Court', encounterId: 2311, result: []},
          { bossName: 'Za\'qul', encounterId: 2293, result: []},
          { bossName: 'Queen Azshara', encounterId: 2299, result: []}
        ]
      },
    };
  }

  public getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public findBestDamageIndex(array) {
    let index = -1;
    let maxDps = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].total > maxDps) {
        maxDps = array[i].total;
        index = i;
      }
    }
    return index;
  }

  public findBestDamage(array) {
    let maxDps = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].total > maxDps) {
        maxDps = array[i].total;
      }
    }
    return maxDps.toFixed(0);
  }

  public findBestDamageByEncounterIdAndDiff(array, encounter, difficulty) {
    let maxDps = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].total > maxDps && array[i].difficulty === difficulty && array[i].encounterID === encounter) {
        maxDps = array[i].total;
      }
    }
    return maxDps.toFixed(0);
  }

  public findAverageDamageByEncounterIdAndDiff(array, encounter, difficulty) {
    let count = 0;
    let dps = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].difficulty === difficulty && array[i].encounterID === encounter) {
        dps += array[i].total;
        count++;
      }
    }
    return count !== 0 ? (dps / count).toFixed(0) : 0;
  }

  public findBestGearilvl(array) {
    let ilvl = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].ilvlKeyOrPatch > ilvl) {
        ilvl = array[i].ilvlKeyOrPatch;
      }
    }
    return ilvl;
  }

  async getDataByCharacterDPS(characterName) {
    return this.http
      .get(`${this.apiUrl}/parses/character/${characterName}/${serverName}/${serverRegion}?metric=dps&api_key=${this.apiKeys[this.getRandomInt(0, this.apiKeys.length)]}`)
      .toPromise()
      .then((result: any) => {
        if (result.status === 400) {
          throwError(result.error);
        }

        if (result.length > 0) {
          const gearilvl = this.findBestGearilvl(result);
          for (let i = 0; i < bosses.length; i++) {
            const averageDamageNormal = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.normal);
            const bestDamageNormal = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.normal);
            const resObjNormal = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestDamage: bestDamageNormal,
              averageDamage: averageDamageNormal
            };
            this.viewResult.dps.normal[i].result.push(resObjNormal);

            const averageDamageHeroic = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.heroic);
            const bestDamageHeroic = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.heroic);
            const resObjHeroic = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestDamage: bestDamageHeroic,
              averageDamage: averageDamageHeroic
            };
            this.viewResult.dps.heroic[i].result.push(resObjHeroic);

            const averageDamageMythic = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.mythic);
            const bestDamageMythic = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.mythic);
            const resObjMythic = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestDamage: bestDamageMythic,
              averageDamage: averageDamageMythic
            };
            this.viewResult.dps.mythic[i].result.push(resObjMythic);
          }
        }
      })
      .catch(error => console.log('Error: ' + error.message));
  }

  async getDataByCharacterHPS(characterName) {
    return this.http
      .get(`${this.apiUrl}/parses/character/${characterName}/${serverName}/${serverRegion}?metric=hps&api_key=${this.apiKeys[this.getRandomInt(0, this.apiKeys.length)]}`)
      .toPromise()
      .then((result: any) => {
        if (result.status === 400) {
          throwError(result.error);
        }

        if (result.length > 0) {
          const gearilvl = this.findBestGearilvl(result);
          for (let i = 0; i < bosses.length; i++) {
            const averageHPSNormal = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.normal);
            const bestHPSNormal = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.normal);
            const resObjNormal = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestHPS: bestHPSNormal,
              averageHPS: averageHPSNormal
            };
            this.viewResult.hps.normal[i].result.push(resObjNormal);

            const averageHPSHeroic = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.heroic);
            const bestHPSHeroic = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.heroic);
            const resObjHeroic = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestHPS: bestHPSHeroic,
              averageHPS: averageHPSHeroic
            };
            this.viewResult.hps.heroic[i].result.push(resObjHeroic);

            const averageHPSMythic = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.mythic);
            const bestHPSMythic = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.mythic);
            const resObjMythic = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestHPS: bestHPSMythic,
              averageHPS: averageHPSMythic
            };
            this.viewResult.hps.mythic[i].result.push(resObjMythic);
          }
        }
      })
      .catch(error => console.log('Error: ' + error.message));
  }

  // async getDataByCharacterAndEncounterDPS(characterName, encounter, encounterIndex, difficulty, diffName) {
  //   return this.http
  //     .get(`${this.apiUrl}/parses/character/${characterName}/${serverName}/${serverRegion}?
  //               encounter=${encounter}&metric=dps&api_key=${this.apiKeys[this.getRandomInt(0, this.apiKeys.length)]}`)
  //     .toPromise()
  //     .then( (result: any) => {
  //       if (result.status === 400) {
  //         throwError(result.error);
  //       }
  //       const res = [];
  //       for (let i = 0; i < result.length; i++) {
  //         if (result[i].difficulty === difficulty) {
  //           res.push(result[i]);
  //         }
  //       }
  //       if (res.length > 0) {
  //         const bestDamageIndex = this.findBestDamageIndex(res);
  //         const bestDamage = this.findBestDamage(res);
  //         const gearilvl = this.findBestGearilvl(res);
  //         const resObj = {
  //           characterName: characterName,
  //           class: res[0].class,
  //           encounter: encounter,
  //           ilvl: gearilvl,
  //           bestDamage: bestDamage
  //         };
  //         if (diffName === 'heroic') {
  //           this.viewResult.heroic[encounterIndex].result.push(resObj);
  //         } else if (diffName === 'mythic') {
  //           this.viewResult.mythic[encounterIndex].result.push(resObj);
  //         }
  //       }
  //       // else {
  //       //   const resObj = {
  //       //     characterName: characterName,
  //       //     class: 'Tuhliy',
  //       //     encounter: encounter,
  //       //     ilvl: 0,
  //       //     bestDamage: 0
  //       //   };
  //       // }
  //     })
  //     .catch(error => console.log('Error: ' + error.message));
  // }

  async ngOnInit() {
    let promises = [];
    for (let j = 0; j < this.characterNames.length; j++) {
      promises.push(this.getDataByCharacterDPS(this.characterNames[j]));
    }
    for (let g = 0; g < this.characterNamesHeals.length; g++) {
      promises.push(this.getDataByCharacterHPS(this.characterNamesHeals[g]));
    }
    await Promise.all(promises);

    for (let i = 0; i < this.viewResult.dps.heroic.length; i++) {
      this.viewResult.dps.normal[i].result.sort((a, b) => b.bestDamage - a.bestDamage);
      this.viewResult.dps.heroic[i].result.sort((a, b) => b.bestDamage - a.bestDamage);
      this.viewResult.dps.mythic[i].result.sort((a, b) => b.bestDamage - a.bestDamage);
      this.viewResult.hps.normal[i].result.sort((a, b) => b.bestHPS - a.bestHPS);
      this.viewResult.hps.heroic[i].result.sort((a, b) => b.bestHPS - a.bestHPS);
      this.viewResult.hps.mythic[i].result.sort((a, b) => b.bestHPS - a.bestHPS);
    }
  }
}
