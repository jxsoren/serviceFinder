interface ServiceCriteria {
  service: string;
  subService?: string;
  weightLimit: number;
  maxLength?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxLengthPlusGirth?: number;
  minLength?: number;
  minWidth?: number;
  minHeight?: number;
  maxCombinedDimensions?: number;
  maxCubicFoot?: number;
  additionalDetails?: { transitTime: string; isGround: boolean };
}

// All measurements are in inches. All weights are in ounces.

const domestic: ServiceCriteria[] = [
  // USPS Ground Advantage ---
  {
    service: "USPS Ground Advantage",
    weightLimit: 1120,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime: "????",
      isGround: true,
    },
  },
  // USPS Media Mail ---
  {
    service: "USPS Media Mail",
    weightLimit: 1120,
    maxLengthPlusGirth: 108,
    additionalDetails: {
      transitTime: "2-8 Postal Days",
      isGround: true,
    },
  },
  // USPS Parcel Select ---
  {
    service: "USPS Parcel Select",
    subService: "Weight Based",
    weightLimit: 1120,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime: "2-8 Postal Days",
      isGround: true,
    },
  },
  // USPS Priority Mail ---
  {
    service: "USPS Priority Mail",
    subService: "Parcel Weight Based",
    weightLimit: 1120,
    maxLengthPlusGirth: 108,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail",
    subService: "Cubic",
    weightLimit: 320,
    maxLength: 18,
    maxCubicFoot: 0.5,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail",
    subService: "Flat Rate Envelope",
    weightLimit: 1120,
    maxLength: 12.5,
    maxWidth: 9.5,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail",
    subService: "Flat Rate Legal Envelope",
    weightLimit: 1120,
    maxLength: 15,
    maxHeight: 9.5,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail",
    subService: "Flat Rate Padded Envelope",
    weightLimit: 1120,
    maxLength: 11.625,
    maxWidth: 15,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail",
    subService: "Large Flat Rate Box",
    weightLimit: 1120,
    maxLength: 12.25,
    maxWidth: 12,
    maxHeight: 6,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail",
    subService: "Medium Flat Rate Box (Top-Loading)",
    weightLimit: 1120,
    maxLength: 11,
    maxWidth: 8.5,
    maxHeight: 5.5,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail",
    subService: "Medium Flat Rate Box (Side-Loading)",
    weightLimit: 1120,
    maxLength: 13.625,
    maxWidth: 11.875,
    maxHeight: 3.375,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail",
    subService: "Small Flat Rate Box",
    weightLimit: 1120,
    maxLength: 8.625,
    maxWidth: 5.375,
    maxHeight: 1.625,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail",
    subService: "Thick Envelope",
    weightLimit: 1120,
    minLength: 11.5,
    minWidth: 6.125,
    minHeight: 0.25,
    maxLength: 15,
    maxWidth: 12,
    maxHeight: 0.75,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  // USPS Priority Mail Express ---
  {
    service: "USPS Priority Mail Express",
    subService: "Parcel Weight Based",
    weightLimit: 240,
    maxLengthPlusGirth: 108,
    additionalDetails: {
      transitTime: "1-2 Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail Express",
    subService: "Flat Rate Envelope",
    weightLimit: 240,
    maxLength: 12.5,
    maxWidth: 9.5,
    additionalDetails: {
      transitTime: "1-2 Days",
      isGround: false,
    },
  },
];

const international: ServiceCriteria[] = [
  // USPS First Class Package International Service ---
  {
    service: "USPS First Class Package International Service",
    weightLimit: 64,
    minLength: 6,
    maxLength: 24,
    maxCombinedDimensions: 36,
    additionalDetails: {
      transitTime: "Varies By Destination",
      isGround: false,
    },
  },
  // USPS First Class Mail International ---
  {
    service: "USPS First Class Mail International",
    subService: "Letters",
    weightLimit: 16,
    minLength: 5.5,
    minWidth: 3.5,
    maxLength: 11.5,
    maxWidth: 6.125,
    additionalDetails: {
      transitTime: "Varies By Destination",
      isGround: false,
    },
  },
  {
    service: "USPS First Class Mail International",
    subService: "Large Envelopes",
    weightLimit: 16,
    minLength: 11.5,
    minWidth: 6.125,
    maxLength: 15,
    maxWidth: 12,
    additionalDetails: {
      transitTime: "Varies By Destination",
      isGround: false,
    },
  },
  // USPS Priority Mail International ---
  {
    service: "USPS Priority Mail International Service",
    subService: "Parcel Weight Based",
    weightLimit: 1120,
    maxLengthPlusGirth: 108,
    additionalDetails: {
      transitTime: "6-10 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail International",
    subService: "Large Flat Rate Box",
    weightLimit: 320,
    maxLength: 12.25,
    maxWidth: 12,
    maxHeight: 6,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail International",
    subService: "Medium Flat Rate Box (Top-Loading)",
    weightLimit: 320,
    maxLength: 11,
    maxWidth: 8.5,
    maxHeight: 5.5,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail International",
    subService: "Medium Flat Rate Box (Side-Loading)",
    weightLimit: 320,
    maxLength: 13.625,
    maxWidth: 11.875,
    maxHeight: 3.375,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail International",
    subService: "Small Flat Rate Box",
    weightLimit: 64,
    maxLength: 8.625,
    maxWidth: 5.375,
    maxHeight: 1.625,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail International",
    subService: "Flat Rate Envelope",
    weightLimit: 64,
    maxLength: 12.5,
    maxWidth: 9.5,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail International",
    subService: "Flat Rate Legal Envelope",
    weightLimit: 64,
    maxLength: 15,
    maxHeight: 9.5,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail International",
    subService: "Flat Rate Padded Envelope",
    weightLimit: 64,
    maxLength: 11.625,
    maxWidth: 15,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  // USPS Priority Mail Express International ---
  {
    service: "USPS Priority Mail Express International",
    weightLimit: 1120,
    maxLengthPlusGirth: 79,
    additionalDetails: {
      transitTime: "3-5 Postal Days",
      isGround: false,
    },
  },
];

export { domestic };
export { international };
