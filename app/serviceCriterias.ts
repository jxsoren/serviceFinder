const domestic = [
  {
    service: "USPS First Class",
    subService: "USPS First Class Mail (parcel weight-based)",
    weightLimit: 16,
    maxLength: 22,
    maxWidth: 18,
    maxHeight: 15,
    maxLengthPlusGirth: 108,
  },
  {
    service: "USPS First Class",
    subService: "USPS First Class Mail Letter",
    weightLimit: 3.5,
    maxLength: 11.5,
    maxWidth: 0.25,
    maxHeight: 6.125,
  },
  {
    service: "USPS First Class",
    subService: "USPS First Class Mail Letter",
    weightLimit: 16,
    maxLength: 15,
    maxWidth: 12,
    maxHeight: 0.75,
    minLength: 11.5,
    minWidth: 6.125,
    minHeight: 0.25,
  },
];

export { domestic };
