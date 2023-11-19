import { domestic } from "./serviceCriterias";

export interface ServiceCriteria {
  service: string;
  subService: string;
}

const calculations = (
  length: number,
  width: number,
  height: number,
  weight: number,
  destination: string
): ServiceCriteria[] => {
  const girth = calcGirth(length, width);
  const lengthPlusGirth = length + girth;

  let qualifyingServices: ServiceCriteria[] = [];

  if (destination === "domestic") {
    for (const criteria of domestic) {
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
  } else if (destination === "international") {
    qualifyingServices.push({
      service: "International",
      subService: "International",
    });
  }

  if (qualifyingServices.length === 0) {
    qualifyingServices.push({
      service: "No service available",
      subService: "No service available",
    });
  }

  return qualifyingServices;
};

const calcGirth = (length: number, width: number) => {
  const girth = 2 * (length + width);
  return girth;
};

export { calculations };
