import { TransformArrayOderEnum } from "../enums/transform-array-order.enum";
import MyCowsInterface from "../interfaces/my-cows.interface";
import SumArrayInterface from "../interfaces/sum-array.interface";

export default class ChallengeService {
  
  average(numbers: number[]): number {
    return (numbers.reduce((a, b) => a + b, 0)) / numbers.length;
  }

  stringWithoutLastExclamationMark(string: string): string {
    const lasPosition = string[string.length - 1];
    return lasPosition === '!'
      ? string.slice(0, string.length - 1)
      : string;
  }

  sumArray(numbers: number[][]): SumArrayInterface {
    const flatArray = numbers.flat();
    let totalSum = 0;
    let positiveTotalSum = 0;
    let evenTotalSum = 0;
    let oddTotalSum = 0;
    flatArray.map(number => {
      totalSum += number;
      if (number > 0 && number % 1 === 0) {
        positiveTotalSum += number;
      }
      if (number % 2 === 0) {
        evenTotalSum += number;
      } else {
        oddTotalSum += number;
      }
    });
    return {
      totalSum,
      positiveTotalSum,
      evenTotalSum,
      oddTotalSum
    }
  }

  transformArray(alphanumericArray: string[][], order: TransformArrayOderEnum): number[] {
    const flatNumericArray = alphanumericArray
      .flat()
      .map(element => Number(element))
      .filter(number => !isNaN(number));
    return order === TransformArrayOderEnum.ASC
      ? flatNumericArray.sort()
      : flatNumericArray.sort((a, b) => b - a);
  }

  myCows(productions: number[][]): MyCowsInterface {
    const cowsMaxProductionPerDay: number[][] = [];
    const totalProductionPerDay = productions.map((day) => {
      const higherValuePerDay = Math.max(...day);
      cowsMaxProductionPerDay.push(day.reduce((a, b, i) => (b === higherValuePerDay ? [...a, i + 1] : a), []));
      return day.reduce((a, b) => a + b, 0);
    });
    const daysWithHigherProduction: number[] = totalProductionPerDay
      .reduce((a, b, i) => (b === Math.max(...totalProductionPerDay) ? [...a, i + 1] : a), []);
    const daysWithLowerProduction: number[] = totalProductionPerDay
      .reduce((a, b, i) => (b === Math.min(...totalProductionPerDay) ? [...a, i + 1] : a), []);
    return {
      totalProductionPerDay,
      daysWithHigherProduction,
      daysWithLowerProduction,
      cowsMaxProductionPerDay
    }
  }

  arrayScore(numbers: number[][]): number {
    const array = numbers.flat();
    return array.reduce((a, b) => {
      if (b % 2 === 0) {
        return a + 1;
      } else {
        return b === 5 ? a + 5 : a + 3;
      }
    }, 0);
  }
}