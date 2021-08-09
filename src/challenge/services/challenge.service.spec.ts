import { Test, TestingModule } from '@nestjs/testing';
import ChallengeService from './challenge.service';

describe('ChallengeService', () => {
  let challengeService: ChallengeService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ChallengeService],
    }).compile();

    challengeService = app.get<ChallengeService>(ChallengeService);
  });

  describe('average', () => {
    it('average function exists', () => {
      expect(typeof challengeService.average).toBe('function');
    });
    it('5 is the average of [5,5,5] ', () => {
      expect(challengeService.average([5, 5, 5])).toBe(5);
    });
    it('if the array is empty the average is NAN', () => {
      expect(challengeService.average([])).toBe(NaN);
    });
    it('if the array has only zeros the average is zero', () => {
      expect(challengeService.average([0, 0, 0, 0])).toBe(0);
    });
  });

  describe('stringWithoutLastExclamationMark', () => {
    it('stringWithoutLastExclamationMark function exists', () => {
      expect(typeof challengeService.stringWithoutLastExclamationMark).toBe('function');
    });
    it(`if the string is 'hi!' the result is 'hi'`, () => {
      expect(challengeService.stringWithoutLastExclamationMark('hi!')).toBe('hi');
    });
    it(`if the string is 'hi!!!' the result is 'hi!!'`, () => {
      expect(challengeService.stringWithoutLastExclamationMark('hi!!!')).toBe('hi!!');
    });
    it(`if the string is 'hi' the result is 'hi'`, () => {
      expect(challengeService.stringWithoutLastExclamationMark('hi')).toBe('hi');
    });
  });

  describe('sumArray', () => {
    it('sumArray function exists', () => {
      expect(typeof challengeService.sumArray).toBe('function');
    });
    it(`if the array is [[1,2,3]]' the result is {totalSum: 6, positiveTotalSum: 6, evenTotalSum: 2, oddTotalSum: 4}`, () => {
      const result = {
        totalSum: 6,
        positiveTotalSum: 6,
        evenTotalSum: 2,
        oddTotalSum: 4
      };
      expect(challengeService.sumArray([[1, 2, 3]])).toEqual(result);
    });
    it(`if the array is [[1,2,3],[5,3]]' the result is {totalSum: 14, positiveTotalSum: 14, evenTotalSum: 2, oddTotalSum: 12}`, () => {
      const result = {
        totalSum: 14,
        positiveTotalSum: 14,
        evenTotalSum: 2,
        oddTotalSum: 12
      };
      expect(challengeService.sumArray([[1, 2, 3], [5, 3]])).toEqual(result);
    });
    it(`if the array is [[1,2,3],[-5,-3]]' the result is {totalSum: -2, positiveTotalSum: 6, evenTotalSum: 2, oddTotalSum: -4}`, () => {
      const result = {
        totalSum: -2,
        positiveTotalSum: 6,
        evenTotalSum: 2,
        oddTotalSum: -4
      };
      expect(challengeService.sumArray([[1, 2, 3], [-5, -3]])).toEqual(result);
    });
  });

  describe('transformArray', () => {
    it('transformArray function exists', () => {
      expect(typeof challengeService.transformArray).toBe('function');
    });
    it(`if the array is [["5", "4"], ["1", "2"]], order ASC the result is [1,2,4,5]`, () => {
      expect(challengeService.transformArray([["5", "4"], ["1", "2"]], 0)).toEqual([1, 2, 4, 5]);
    });
    it(`if the array is [["5", "4", "sd"], ["1", "2","F"]], order ASC the result is [1,2,4,5]`, () => {
      expect(challengeService.transformArray([["5", "4", "sd"], ["1", "2", "F"]], 0)).toEqual([1, 2, 4, 5]);
    });
    it(`if the array is [["5", "4", "sd"], ["1", "2","F"]], order DESC the result is [5,4,2,1]`, () => {
      expect(challengeService.transformArray([["5", "4", "sd"], ["1", "2", "F"]], 1)).toEqual([5, 4, 2, 1]);
    });
  });

  describe('myCows', () => {
    it('myCows function exists', () => {
      expect(typeof challengeService.myCows).toBe('function');
    });
    it(`if the array is [[3,4,2,3,4],[2,3,4,5,5],[3,2,2,1,2],[1,1,1,1,1],[2,3,5,2,2],[4,3,4,5,1],[2,2,2,2,2]]`, () => {
      const result = {
        totalProductionPerDay: [16, 19, 10, 5, 14, 17, 10],
        daysWithHigherProduction: [2],
        daysWithLowerProduction: [4],
        cowsMaxProductionPerDay: [[2, 5], [4, 5], [1], [1, 2, 3, 4, 5], [3], [4], [1, 2, 3, 4, 5]]
      }
      expect(challengeService.myCows([[3, 4, 2, 3, 4], [2, 3, 4, 5, 5], [3, 2, 2, 1, 2], [1, 1, 1, 1, 1], [2, 3, 5, 2, 2], [4, 3, 4, 5, 1], [2, 2, 2, 2, 2]]))
        .toEqual(result);
    });
  });

  describe('arrayScore', () => {
    it('arrayScore function exists', () => {
      expect(typeof challengeService.arrayScore).toBe('function');
    });
    it(`if the array is [1,2,3,4,5] the result is 13`, () => {
      expect(challengeService.arrayScore([[1, 2, 3, 4, 5]])).toEqual(13);
    });
    it(`if the array is [17,19,21] the result is 9`, () => {
      expect(challengeService.arrayScore([[17, 19, 21]])).toEqual(9);
    });
    it(`if the array is [5,5,5] the result is 15`, () => {
      expect(challengeService.arrayScore([[5, 5, 5]])).toEqual(15);
    });
  });
});
