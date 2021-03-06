import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {throwError} from 'rxjs';

const serverName = 'гордунни';
const serverRegion = 'EU';
const bosses = [
  {
    'encounterId': 2398,
    'bossName': 'Shriekwing'
  },
  {
    'encounterId': 2418,
    'bossName': 'Huntsman Altimor'
  },
  {
    'encounterId': 2383,
    'bossName': 'Hungering Destroyer'
  },
  {
    'encounterId': 2402,
    'bossName': 'Sun King\'s Salvation'
  },
  {
    'encounterId': 2405,
    'bossName': 'Artificer Xy\'mox'
  },
  {
    'encounterId': 2406,
    'bossName': 'Lady Inerva Darkvein'
  },
  {
    'encounterId': 2412,
    'bossName': 'The Council of Blood'
  },
  {
    'encounterId': 2399,
    'bossName': 'Sludgefist'
  },
  {
    'encounterId': 2417,
    'bossName': 'Stone Legion Generals'
  },
  {
    'encounterId': 2407,
    'bossName': 'Sire Denathrius'
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
  public didntload: any;

  constructor(private http: HttpClient) {
    this.didntload = 0;
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
      'cd0f3f82950db613fb20856cb08aae8e',
    ];
    this.bossesTmp = bosses;
    this.characterNames = [
      'Антрепренёр',
      'Дженнет',
      'Измироэль',
      'Конимекс',
      'Наггал',
      'Песняветров',
      'Стёпабест',
      'Фиренн',
      'Хаккасус',
      'Дквсапогах',
      'Намбепал',
      'Джасслин',
      'Бейкерс',
      'Лакримоска',
      'Мехит',
      'Инфери',
      'Сержохотник',
      'Моррел',
      'Типичныйчерт',
      'Кометаа',
      'Буасон',
      'Мерисолт',
      'Джетроус',
      'Эйсбрингер',
      'Вжухлинг',
      'Бэнтенмару',
      'Йоррамай',
      'Муертосс',
      'Громлан',
      'Тисаншия',
    ];
    this.characterNamesHeals = [
      'Муертосс',
      'Песняветров',
      'Громлан',
      'Тисаншия',
    ];
    this.viewResult = {
      dps: {
        normal: [
          { bossName: 'Shriekwing', encounterId: 2398, result: []},
          { bossName: 'Huntsman Altimor', encounterId: 2418, result: []},
          { bossName: 'Hungering Destroyer', encounterId: 2383, result: []},
          { bossName: 'Sun King\'s Salvation', encounterId: 2402, result: []},
          { bossName: 'Artificer Xy\'mox', encounterId: 2405, result: []},
          { bossName: 'Lady Inerva Darkvein', encounterId: 2406, result: []},
          { bossName: 'The Council of Blood', encounterId: 2412, result: []},
          { bossName: 'Sludgefist', encounterId: 2399, result: []},
          { bossName: 'Stone Legion Generals', encounterId: 2417, result: []},
          { bossName: 'Sire Denathrius', encounterId: 2407, result: []},
        ],
        heroic: [
          { bossName: 'Shriekwing', encounterId: 2398, result: []},
          { bossName: 'Huntsman Altimor', encounterId: 2418, result: []},
          { bossName: 'Hungering Destroyer', encounterId: 2383, result: []},
          { bossName: 'Sun King\'s Salvation', encounterId: 2402, result: []},
          { bossName: 'Artificer Xy\'mox', encounterId: 2405, result: []},
          { bossName: 'Lady Inerva Darkvein', encounterId: 2406, result: []},
          { bossName: 'The Council of Blood', encounterId: 2412, result: []},
          { bossName: 'Sludgefist', encounterId: 2399, result: []},
          { bossName: 'Stone Legion Generals', encounterId: 2417, result: []},
          { bossName: 'Sire Denathrius', encounterId: 2407, result: []},
        ],
        mythic: [
          { bossName: 'Shriekwing', encounterId: 2398, result: []},
          { bossName: 'Huntsman Altimor', encounterId: 2418, result: []},
          { bossName: 'Hungering Destroyer', encounterId: 2383, result: []},
          { bossName: 'Sun King\'s Salvation', encounterId: 2402, result: []},
          { bossName: 'Artificer Xy\'mox', encounterId: 2405, result: []},
          { bossName: 'Lady Inerva Darkvein', encounterId: 2406, result: []},
          { bossName: 'The Council of Blood', encounterId: 2412, result: []},
          { bossName: 'Sludgefist', encounterId: 2399, result: []},
          { bossName: 'Stone Legion Generals', encounterId: 2417, result: []},
          { bossName: 'Sire Denathrius', encounterId: 2407, result: []},
        ]
      },
      hps: {
        normal: [
          { bossName: 'Shriekwing', encounterId: 2398, result: []},
          { bossName: 'Huntsman Altimor', encounterId: 2418, result: []},
          { bossName: 'Hungering Destroyer', encounterId: 2383, result: []},
          { bossName: 'Sun King\'s Salvation', encounterId: 2402, result: []},
          { bossName: 'Artificer Xy\'mox', encounterId: 2405, result: []},
          { bossName: 'Lady Inerva Darkvein', encounterId: 2406, result: []},
          { bossName: 'The Council of Blood', encounterId: 2412, result: []},
          { bossName: 'Sludgefist', encounterId: 2399, result: []},
          { bossName: 'Stone Legion Generals', encounterId: 2417, result: []},
          { bossName: 'Sire Denathrius', encounterId: 2407, result: []},
        ],
        heroic: [
          { bossName: 'Shriekwing', encounterId: 2398, result: []},
          { bossName: 'Huntsman Altimor', encounterId: 2418, result: []},
          { bossName: 'Hungering Destroyer', encounterId: 2383, result: []},
          { bossName: 'Sun King\'s Salvation', encounterId: 2402, result: []},
          { bossName: 'Artificer Xy\'mox', encounterId: 2405, result: []},
          { bossName: 'Lady Inerva Darkvein', encounterId: 2406, result: []},
          { bossName: 'The Council of Blood', encounterId: 2412, result: []},
          { bossName: 'Sludgefist', encounterId: 2399, result: []},
          { bossName: 'Stone Legion Generals', encounterId: 2417, result: []},
          { bossName: 'Sire Denathrius', encounterId: 2407, result: []},
        ],
        mythic: [
          { bossName: 'Shriekwing', encounterId: 2398, result: []},
          { bossName: 'Huntsman Altimor', encounterId: 2418, result: []},
          { bossName: 'Hungering Destroyer', encounterId: 2383, result: []},
          { bossName: 'Sun King\'s Salvation', encounterId: 2402, result: []},
          { bossName: 'Artificer Xy\'mox', encounterId: 2405, result: []},
          { bossName: 'Lady Inerva Darkvein', encounterId: 2406, result: []},
          { bossName: 'The Council of Blood', encounterId: 2412, result: []},
          { bossName: 'Sludgefist', encounterId: 2399, result: []},
          { bossName: 'Stone Legion Generals', encounterId: 2417, result: []},
          { bossName: 'Sire Denathrius', encounterId: 2407, result: []},
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
    const average = count !== 0 ? (dps / count).toFixed(0) : 0;
    return { average, killsCount: count };
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
        if (result && result.status === 400) {
          this.didntload++;
          return;
        }
        if (result.length > 0) {
          const gearilvl = this.findBestGearilvl(result);
          for (let i = 0; i < bosses.length; i++) {
            const infoNormal = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.normal);
            const averageDamageNormal = infoNormal.average;
            const killsCountNormal = infoNormal.killsCount;
            const bestDamageNormal = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.normal);
            const resObjNormal = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestDamage: bestDamageNormal,
              averageDamage: averageDamageNormal,
              killsCount: killsCountNormal
            };
            this.viewResult.dps.normal[i].result.push(resObjNormal);

            const infoHeroic = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.heroic);
            const averageDamageHeroic = infoHeroic.average;
            const killsCountHeroic = infoHeroic.killsCount;
            const bestDamageHeroic = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.heroic);
            const resObjHeroic = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestDamage: bestDamageHeroic,
              averageDamage: averageDamageHeroic,
              killsCount: killsCountHeroic
            };
            this.viewResult.dps.heroic[i].result.push(resObjHeroic);

            const infoMythic = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.mythic);
            const averageDamageMythic = infoMythic.average;
            const killsCountMythic = infoMythic.killsCount;
            const bestDamageMythic = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.mythic);
            const resObjMythic = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestDamage: bestDamageMythic,
              averageDamage: averageDamageMythic,
              killsCount: killsCountMythic
            };
            this.viewResult.dps.mythic[i].result.push(resObjMythic);
          }
        }
      })
      .catch(error => {
        this.didntload++;
        console.log('Error: ' + error.message);
      });
  }

  async getDataByCharacterHPS(characterName) {
    return this.http
      .get(`${this.apiUrl}/parses/character/${characterName}/${serverName}/${serverRegion}?metric=hps&api_key=${this.apiKeys[this.getRandomInt(0, this.apiKeys.length)]}`)
      .toPromise()
      .then((result: any) => {
        if (result && result.status === 400) {
          this.didntload++;
          return;
        }
        if (result.length > 0) {
          const gearilvl = this.findBestGearilvl(result);
          for (let i = 0; i < bosses.length; i++) {
            const infoNormal = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.normal);
            const averageHPSNormal = infoNormal.average;
            const killsCountNormal = infoNormal.killsCount;
            const bestHPSNormal = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.normal);
            const resObjNormal = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestHPS: bestHPSNormal,
              averageHPS: averageHPSNormal,
              killsCount: killsCountNormal
            };
            this.viewResult.hps.normal[i].result.push(resObjNormal);

            const infoHeroic = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.heroic);
            const averageHPSHeroic = infoHeroic.average;
            const killsCountHeroic = infoHeroic.killsCount;
            const bestHPSHeroic = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.heroic);
            const resObjHeroic = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestHPS: bestHPSHeroic,
              averageHPS: averageHPSHeroic,
              killsCount: killsCountHeroic
            };
            this.viewResult.hps.heroic[i].result.push(resObjHeroic);

            const infoMythic = this.findAverageDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.mythic);
            const averageHPSMythic = infoMythic.average;
            const killsCountMythic = infoMythic.killsCount;
            const bestHPSMythic = this.findBestDamageByEncounterIdAndDiff(result, bosses[i].encounterId, diff.mythic);
            const resObjMythic = {
              characterName: characterName,
              class: result[0].class,
              encounter: bosses[i].encounterId,
              ilvl: gearilvl,
              bestHPS: bestHPSMythic,
              averageHPS: averageHPSMythic,
              killsCount: killsCountMythic
            };
            this.viewResult.hps.mythic[i].result.push(resObjMythic);
          }
        }
      })
      .catch(error => {
        this.didntload++;
        console.log('Error: ' + error.message);
      });
  }

  sortData(type) {
    switch (type) {
      case('average'):
        for (let i = 0; i < this.viewResult.dps.heroic.length; i++) {
          this.viewResult.dps.normal[i].result.sort((a, b) => b.averageDamage - a.averageDamage);
          this.viewResult.dps.heroic[i].result.sort((a, b) => b.averageDamage - a.averageDamage);
          this.viewResult.dps.mythic[i].result.sort((a, b) => b.averageDamage - a.averageDamage);
          this.viewResult.hps.normal[i].result.sort((a, b) => b.averageHPS - a.averageHPS);
          this.viewResult.hps.heroic[i].result.sort((a, b) => b.averageHPS - a.averageHPS);
          this.viewResult.hps.mythic[i].result.sort((a, b) => b.averageHPS - a.averageHPS);
        }
        break;
      case('ilvl'):
        for (let i = 0; i < this.viewResult.dps.heroic.length; i++) {
          this.viewResult.dps.normal[i].result.sort((a, b) => b.ilvl - a.ilvl);
          this.viewResult.dps.heroic[i].result.sort((a, b) => b.ilvl - a.ilvl);
          this.viewResult.dps.mythic[i].result.sort((a, b) => b.ilvl - a.ilvl);
          this.viewResult.hps.normal[i].result.sort((a, b) => b.ilvl - a.ilvl);
          this.viewResult.hps.heroic[i].result.sort((a, b) => b.ilvl - a.ilvl);
          this.viewResult.hps.mythic[i].result.sort((a, b) => b.ilvl - a.ilvl);
        }
        break;
      case('best'):
      default:
        for (let i = 0; i < this.viewResult.dps.heroic.length; i++) {
          this.viewResult.dps.normal[i].result.sort((a, b) => b.bestDamage - a.bestDamage);
          this.viewResult.dps.heroic[i].result.sort((a, b) => b.bestDamage - a.bestDamage);
          this.viewResult.dps.mythic[i].result.sort((a, b) => b.bestDamage - a.bestDamage);
          this.viewResult.hps.normal[i].result.sort((a, b) => b.bestHPS - a.bestHPS);
          this.viewResult.hps.heroic[i].result.sort((a, b) => b.bestHPS - a.bestHPS);
          this.viewResult.hps.mythic[i].result.sort((a, b) => b.bestHPS - a.bestHPS);
        }
        break;
    }
  }

  async ngOnInit() {
    const promises = [];
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
