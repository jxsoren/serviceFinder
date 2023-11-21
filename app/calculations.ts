import { domestic, international } from "./serviceCriterias";

export interface Criteria {
  service: string;
  subService?: string;
}

const calculations = (
  length: number,
  width: number,
  height: number,
  weight: number,
  destination: string
): Criteria[] => {
  const girth = 2 * (length + width);
  const lengthPlusGirth = length + girth;

  let qualifyingServices: Criteria[] = [];

  const criteriaArray = destination === "domestic" ? domestic : international;

  for (const criteria of criteriaArray) {
    if (
      weight <= criteria.weightLimit &&
      (criteria.maxLength === undefined || length <= criteria.maxLength) &&
      (criteria.maxWidth === undefined || width <= criteria.maxWidth) &&
      (criteria.maxHeight === undefined || height <= criteria.maxHeight) &&
      (criteria.maxLengthPlusGirth === undefined ||
        lengthPlusGirth <= criteria.maxLengthPlusGirth) &&
      (criteria.minLength === undefined || length >= criteria.minLength) &&
      (criteria.minWidth === undefined || width >= criteria.minWidth) &&
      (criteria.minHeight === undefined || height >= criteria.minHeight)
    ) {
      qualifyingServices.push({
        service: criteria.service,
        subService: criteria.subService,
      });
    }
  }

  if (qualifyingServices.length === 0) {
    qualifyingServices.push({
      service: "No service available",
      subService: "No service available",
    });
  }

  return qualifyingServices;
};

export { calculations };
