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
  const combinedDimensions = length + width + height;
  const cubicFoot = (length * width * height) / 1728;

  let qualifyingServices: Criteria[] = [];

  const criteriaDestination =
    destination === "domestic" ? domestic : international;

  for (const criteria of criteriaDestination) {
    if (
      weight <= criteria.weightLimit &&
      (criteria.maxLength === undefined || length <= criteria.maxLength) &&
      (criteria.maxWidth === undefined || width <= criteria.maxWidth) &&
      (criteria.maxHeight === undefined || height <= criteria.maxHeight) &&
      (criteria.maxLengthPlusGirth === undefined ||
        lengthPlusGirth <= criteria.maxLengthPlusGirth) &&
      (criteria.minLength === undefined || length >= criteria.minLength) &&
      (criteria.minWidth === undefined || width >= criteria.minWidth) &&
      (criteria.minHeight === undefined || height >= criteria.minHeight) &&
      (criteria.maxCombinedDimensions === undefined ||
        combinedDimensions <= criteria.maxCombinedDimensions) &&
      (criteria.maxCubicFoot === undefined ||
        cubicFoot <= criteria.maxCubicFoot)
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
