import {
  ServiceCriteria,
  Dimensions,
  domestic,
  international,
} from "./serviceCriterias";

export interface Criteria extends ServiceCriteria {
  provider: string;
  service: string;
  qualifyingDimensions?: Dimensions[];
}

const calculations = (
  length: number,
  width: number,
  height: number,
  weight: number,
  destination: string
): Criteria[] => {
  const lengthPlusGirth = length + 2 * (width + height);
  const combinedDimensions = length + width + height;
  const cubicFoot = (length * width * height) / 1728;

  let qualifyingServices: Criteria[] = [];

  const servicesList = destination === "domestic" ? domestic : international;

  for (const criteria of servicesList) {
    let qualifyingDimensions: Dimensions[] =
      criteria.multiSizes?.filter(
        (dimension) =>
          dimension.length >= length &&
          dimension.width >= width &&
          (dimension.height === undefined || dimension.height >= height)
      ) || [];

    let qualifiesBasedOnStandardCriteria =
      (criteria.maxWeight === undefined || weight <= criteria.maxWeight) &&
      (criteria.minWeight === undefined || weight >= criteria.minWeight) &&
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
        cubicFoot <= criteria.maxCubicFoot);

    if (
      (qualifyingDimensions.length > 0 && qualifiesBasedOnStandardCriteria) ||
      qualifiesBasedOnStandardCriteria
    ) {
      qualifyingServices.push({
        provider: criteria.provider,
        service: criteria.service,
        subService: criteria.subService,
        additionalDetails: criteria.additionalDetails,
        multiSizes: qualifyingDimensions,
      });
    }
  }

  if (qualifyingServices.length === 0) {
    qualifyingServices.push({
      provider: "N/A",
      service: "No services available",
    });
  }

  return qualifyingServices;
};

export { calculations };
