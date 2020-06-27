import { MALE_COEFFS, FEMALE_COEFFS } from "consts";

export enum Gender {
  Male,
  Female,
}

export enum WeightUnit {
  Kilo,
  Pound,
}

export function computeWilksScore(
  gender: Gender,
  weight: number,
  lift_total: number
) {
  let x = weight;

  let c: number[] = [];
  if (gender === Gender.Female) {
    c = FEMALE_COEFFS;
  } else {
    c = MALE_COEFFS;
  }

  var denom = 0;
  c.map((num: number, i: number) => {
    denom += num * Math.pow(x, i);
  });

  return (500 / denom) * lift_total;
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
