const domestic = [
  // USPS Ground Advantage ---
  {
    service: "USPS Ground Advantage",
    weightLimit: 70,
    maxLengthPlusGirth: 130,
  },
  // USPS Media Mail ---
  {
    service: "USPS Media Mail",
    weightLimit: 1120,
    maxLengthPlusGirth: 108,
  },
  // USPS Parcel Select ---
  {
    service: "USPS Parcel Select",
    subService: "USPS Parcel Select (weight-based)",
    weightLimit: 1120,
    maxLengthPlusGirth: 130,
  },
  // USPS Priority Mail ---
  {
    service: "USPS Priority Mail",
    subService: "USPS Priority Mail (parcel weight-based)",
    weightLimit: 1120,
    maxLengthPlusGirth: 108,
  },
  {
    service: "USPS Priority Mail",
    subService: "USPS Priority Mail Cubic",
    weightLimit: 320,
    maxLength: 18,
    // Add cubic logic
  },
  {
    service: "USPS Priority Mail",
    subService: "USPS Priority Mail Flat Rate Envelope",
    weightLimit: 1120,
    maxLength: 12.5,
    maxWidth: 9.5,
  },
  {
    service: "USPS Priority Mail",
    subService: "USPS Priority Mail Flat Rate Legal Envelope",
    weightLimit: 1120,
    maxLength: 15,
    maxHeight: 9.5,
  },
  {
    service: "USPS Priority Mail",
    subService: "USPS Priority Mail Flat Rate Padded Envelope",
    weightLimit: 1120,
    maxLength: 11.625,
    maxWidth: 15,
  },
  {
    service: "USPS Priority Mail",
    subService: "USPS Priority Mail Large Flat Rate Box",
    weightLimit: 1120,
    maxLength: 12.25,
    maxWidth: 12,
    maxHeight: 6,
  },
  {
    service: "USPS Priority Mail",
    subService: "USPS Priority Mail Medium Flat Rate Box",
    weightLimit: 240,
    maxLength: 12.25,
    maxWidth: 12,
    maxHeight: 6,
  },
  {
    service: "USPS Priority Mail",
    subService: "USPS Priority Mail Medium Flat Rate Box",
    weightLimit: 240,
    maxLength: 12.25,
    maxWidth: 12,
    maxHeight: 6,
  },
  {
    service: "USPS Priority Mail",
    subService: "USPS Priority Mail Small Flat Rate Box",
    weightLimit: 240,
    maxLength: 8.625,
    maxWidth: 5.375,
    maxHeight: 1.625,
  },
  {
    service: "USPS Priority Mail",
    subService: "USPS Priority Mail Thick Envelope",
    weightLimit: 240,
    minLength: 11.5,
    minWidth: 6.125,
    minHeight: 0.25,
    maxLength: 15,
    maxWidth: 12,
    maxHeight: 0.75,
  },
  // USPS Priority Mail Express ---
  {
    service: "USPS Priority Mail Express",
    subService: "USPS Priority Mail Express (parcel weight-based)",
    weightLimit: 240,
    maxLengthPlusGirth: 108,
  },
  {
    service: "USPS Priority Mail Express",
    subService: "USPS Priority Mail Express Flat Rate Envelope",
    weightLimit: 240,
    maxLength: 12.5,
    maxWidth: 9.5,
  },
];

const international = [
  // USPS First Class Package International Service ---
  {
    service: "USPS First Class Package International Service",
    weightLimit: 4,
    minLength: 6,
    maxLength: 24,
    maxCombinedDimensions: 36,
  },
  // USPS First Class Mail International ---
  {
    service: "USPS First Class Mail International",
    subService: "Letters",
    weightLimit: 1,
    minLength: 5.5,
    minWidth: 3.5,
    maxLength: 11.5,
    maxWidth: 6.125,
  },
  {
    service: "USPS First Class Mail International",
    subService: "Large Envelopes",
    minLength: 11.5,
    minWidth: 6.125,
    maxLength: 15,
    maxWidth: 12,
  },
  // USPS Priority Mail International ---
  {
    service: "USPS Priority Mail International",
    subService: "Parcel Weight Based",
    weightLimit: 70,
    maxLengthPlusGirth: 108,
  },
  // USPS Priority Mail Express International ---
  {
    service: "USPS Priority Mail Express International",
    weightLimit: 70,
    maxLengthPlusGirth: 79,
  },
];

export { domestic };
export { international };
