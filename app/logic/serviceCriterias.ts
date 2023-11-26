export interface Dimensions {
  label: string;
  length: number;
  width: number;
  height?: number;
}

export interface ServiceCriteria {
  provider: string;
  service: string;
  subService?: string;
  maxWeight?: number;
  minWeight?: number;
  maxLength?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxLengthPlusGirth?: number;
  minLength?: number;
  minWidth?: number;
  minHeight?: number;
  maxCombinedDimensions?: number;
  maxCubicFoot?: number;
  maxVolume?: number;
  multiDimensions?: Dimensions[];
  additionalDetails?: { transitTime: string; isGround: boolean };
}

// All measurements are in inches. All weights are in ounces. Volume is in cubic inches.

const domestic: ServiceCriteria[] = [
  // USPS Ground Advantage ---
  {
    provider: "USPS",
    service: "USPS Ground Advantage",
    maxWeight: 1120,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime: "2-5 Postal days",
      isGround: true,
    },
  },
  // USPS Media Mail ---
  {
    provider: "USPS",
    service: "USPS Media Mail",
    maxWeight: 1120,
    maxLengthPlusGirth: 108,
    additionalDetails: {
      transitTime: "2-8 Postal Days",
      isGround: true,
    },
  },
  // USPS Parcel Select ---
  {
    provider: "USPS",
    service: "USPS Parcel Select",
    subService: "Weight Based",
    maxWeight: 1120,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime: "2-8 Postal Days",
      isGround: true,
    },
  },
  // USPS Priority Mail ---
  {
    provider: "USPS",
    service: "USPS Priority Mail",
    subService: "Parcel Weight Based",
    maxWeight: 1120,
    maxLengthPlusGirth: 108,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail",
    subService: "Cubic",
    maxWeight: 320,
    maxLength: 18,
    maxCubicFoot: 0.5,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail",
    subService: "Flat Rate Envelope",
    maxWeight: 1120,
    maxLength: 12.5,
    maxWidth: 9.5,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail",
    subService: "Flat Rate Legal Envelope",
    maxWeight: 1120,
    maxLength: 15,
    maxHeight: 9.5,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail",
    subService: "Flat Rate Padded Envelope",
    maxWeight: 1120,
    maxLength: 11.625,
    maxWidth: 15,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail",
    subService: "Large Flat Rate Box",
    maxWeight: 1120,
    maxLength: 12.25,
    maxWidth: 12,
    maxHeight: 6,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail",
    subService: "Medium Flat Rate Box",
    maxWeight: 1120,
    multiDimensions: [
      { label: "Top Loading", length: 11, width: 8.5, height: 5.5 },
      { label: "Side Loading", length: 13.625, width: 11.875, height: 3.375 },
    ],
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail",
    subService: "Small Flat Rate Box",
    maxWeight: 1120,
    maxLength: 8.625,
    maxWidth: 5.375,
    maxHeight: 1.625,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail",
    subService: "Thick Envelope",
    maxWeight: 1120,
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
    provider: "USPS",
    service: "USPS Priority Mail Express",
    subService: "Parcel Weight Based",
    maxWeight: 240,
    maxLengthPlusGirth: 108,
    additionalDetails: {
      transitTime: "1-2 Days",
      isGround: false,
    },
  },
  // UPS WWEX ---
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS Next Day Air Early",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "Next Postal Day by 8:00 am",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS Next Day Air",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "Next Postal Day by 10:30 am",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS Next Day Air Saver",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "Next Postal Day by 3-4:40 pm",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS 2nd Day Air A.M.",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "2 Postal Days by 10:30 am-noon",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS 2nd Day Air",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "2 Postal Days by End of Day",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS 3 Day Select",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "3 Postal Days by End of Day",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS Ground",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "1-5 Postal Days",
      isGround: true,
    },
  },
  // UPS Mail Innovations ---
  {
    provider: "UPS",
    service: "UPS Mail Innovations",
    subService: "Flat Mail",
    maxWeight: 15.99,
    additionalDetails: {
      transitTime: "5-8 Postal Days",
      isGround: true,
    },
  },
  {
    provider: "UPS",
    service: "UPS Mail Innovations",
    subService: "Bound Printed Matter Flats",
    maxWeight: 240,
    minWeight: 16,
    additionalDetails: {
      transitTime: "5-8 Postal Days",
      isGround: true,
    },
  },
  {
    provider: "UPS",
    service: "UPS Mail Innovations",
    subService: "Bound Printed Matter Parcels",
    maxWeight: 240,
    minWeight: 16,
    additionalDetails: {
      transitTime: "5-8 Postal Days",
      isGround: true,
    },
  },
  {
    provider: "UPS",
    service: "UPS Mail Innovations",
    subService: "Media Mail",
    maxWeight: 1120,
    maxLengthPlusGirth: 108,
    additionalDetails: {
      transitTime: "5-8 Postal Days",
      isGround: true,
    },
  },
  {
    provider: "UPS",
    service: "UPS Mail Innovations",
    subService: "Parcel Select Lightweight",
    maxWeight: 15.99,
    additionalDetails: {
      transitTime: "5-8 Postal Days",
      isGround: true,
    },
  },
  {
    provider: "UPS",
    service: "UPS Mail Innovations",
    subService: "Parcel Select Heavyweight",
    minWeight: 16,
    maxWeight: 1120,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "5-8 Postal Days",
      isGround: true,
    },
  },
  // UPS SurePost ---
  {
    provider: "UPS",
    service: "UPS SurePost",
    subService: "Less than 1 lb",
    maxWeight: 15.9,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime: "2-7 Postal Days",
      isGround: true,
    },
  },
  {
    provider: "UPS",
    service: "UPS SurePost",
    subService: "1 lb or greater",
    minWeight: 16,
    maxWeight: 1120,
    additionalDetails: {
      transitTime: "2-7 Postal Days",
      isGround: true,
    },
  },
  {
    provider: "UPS",
    service: "UPS SurePost",
    subService: "Bound Printed Matter",
    maxWeight: 240,
    additionalDetails: {
      transitTime: "2-7 Postal Days",
      isGround: true,
    },
  },
  {
    provider: "UPS",
    service: "UPS SurePost",
    subService: "Media",
    maxWeight: 1120,
    additionalDetails: {
      transitTime: "2-7 Postal Days",
      isGround: true,
    },
  },
  // FedEx 2Day ---
  {
    provider: "FedEx",
    service: "FedEx 2Day",
    subService: "FedEx 2Day (parcel weight-based)",
    maxWeight: 2400,
    maxLength: 119,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx 2Day",
    subService: "2Day AM",
    maxWeight: 2400,
    maxLength: 119,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "2 Postal Days by 10:30 am",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx 2Day",
    subService: "2Day One Rate Envelope",
    maxWeight: 160,
    maxLength: 12.5,
    maxWidth: 9.5,
    maxVolume: 250,
    multiDimensions: [
      { label: "Regular Envelope", length: 12.5, width: 9.5 },
      { label: "Reusable Envelope", length: 15.5, width: 9.5 },
    ],
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx 2Day",
    subService: "2Day One Rate Pak",
    maxWeight: 800,
    maxVolume: 650,
    multiDimensions: [
      { label: "Size 1", length: 12.75, width: 10.25, height: 1.5 },
      { label: "Size 2", length: 15.5, width: 12, height: 1.5 },
      { label: "Padded", length: 14.75, width: 11.75, height: 1.5 },
      { label: "Reusable Sturdy Pak", length: 14.5, width: 10, height: 1.5 },
    ],
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx 2Day",
    subService: "2Day One Rate Small Box",
    maxWeight: 800,
    maxVolume: 420,
    multiDimensions: [
      { label: "Size 1", length: 12.375, width: 10.875, height: 0 },
      { label: "Size 2", length: 11.25, width: 8.75, height: 0 },
    ],
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx 2Day",
    subService: "2Day One Rate Medium Box",
    maxWeight: 800,
    maxVolume: 650,
    multiDimensions: [
      { label: "Size 1", length: 13.25, width: 11.5, height: 0 },
      { label: "Size 2", length: 11.25, width: 8.75, height: 0 },
    ],
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx 2Day",
    subService: "2Day One Rate Large Box",
    maxWeight: 800,
    maxVolume: 1100,
    multiDimensions: [
      { label: "Size 1", length: 17.5, width: 12.375, height: 0 },
      { label: "Size 2", length: 11.25, width: 8.75, height: 0 },
    ],
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx 2Day",
    subService: "2Day One Rate Extra Large Box",
    maxWeight: 800,
    maxVolume: 2200,
    multiDimensions: [
      { label: "Size 1", length: 11, width: 11.875, height: 0 },
      { label: "Size 2", length: 6, width: 15.75, height: 0 },
    ],
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  // FedEx Express Saver ---
  {
    provider: "FedEx",
    service: "FedEx Express Saver",
    maxWeight: 2400,
    maxLength: 119,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "3 Postal Days by 4:30pm, residences 8 pm",
      isGround: false,
    },
  },
  // FedEx Ground ---
  {
    provider: "FedEx",
    service: "FedEx Ground",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "1-5 Postal Days (3-7 for AK/HI)",
      isGround: true,
    },
  },
  // FedEx Home Delivery ---
  {
    provider: "FedEx",
    service: "FedEx Home Delivery",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "1-5 Postal Days (3-7 for AK/HI)",
      isGround: true,
    },
  },
  // FedEx Pririty Overnight ---
  {
    provider: "FedEx",
    service: "FedEx Priority Overnight",
    subService: "FedEx Priority Overnight (parcel weight-based)",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime:
        "Next Postal Day by 10:00 am (noon to residences, 4:30 rural/non-contiguous)",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx Priority Overnight",
    subService: "FedEx Priority Overnight Envelope",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime:
        "Next Postal Day by 10:00 am (noon to residences, 4:30 rural/non-contiguous)",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx Priority Overnight",
    subService: "FedEx Priority Overnight One Rate Envelope",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime:
        "Next Postal Day by 10:00 am (noon to residences, 4:30 rural/non-contiguous)",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx Priority Overnight",
    subService: "FedEx Priority Overnight Pak",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime:
        "Next Postal Day by 10:00 am (noon to residences, 4:30 rural/non-contiguous)",
      isGround: false,
    },
  },
  // FedEx Standard Overnight ---
  {
    provider: "FedEx",
    service: "FedEx Standard Overnight",
    subService: "Parcel Weight Based",
    maxWeight: 2400,
    maxLength: 119,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "Next Postal Day by 4:30 pm, 8pm for residences",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx Standard Overnight",
    subService: "One Rate Envelope",
    maxWeight: 160,
    multiDimensions: [
      { label: "Regular Envelope", length: 12.5, width: 9.5 },
      { label: "Reusable Envelope", length: 15.5, width: 9.5 },
    ],
    additionalDetails: {
      transitTime: "Next Postal Day by 4:30 pm, 8pm for residences",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx Standard Overnight",
    subService: "One Rate Pak",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "Next Postal Day by 4:30 pm, 8pm for residences",
      isGround: false,
    },
  },
  // FedEx First Overnight ---
  {
    provider: "FedEx",
    service: "FedEx First Overnight",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime:
        "Next Postal Day by 8:00-9:30 am (2pm extended delivery locations)",
      isGround: false,
    },
  },
  // FedEx Ground Economy --
  {
    provider: "FedEx",
    service: "FedEx Ground Economy (formerly SmartPost)",
    subService: "FedEx SmartPost Parcel Select Lightweight",
    maxWeight: 240,
    maxLengthPlusGirth: 84,
    additionalDetails: {
      transitTime: "2-7 Postal Days",
      isGround: true,
    },
  },
  {
    provider: "FedEx",
    service: "FedEx Ground Economy (formerly SmartPost)",
    subService: "FedEx SmartPost Parcel Select",
    maxWeight: 1120,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime: "2-7 Postal Days",
      isGround: true,
    },
  },
  // DHL SmartMail Parcel ---
  {
    provider: "DHL",
    service: "DHL SmartMail Parcel",
    subService: "DHL SmartMail Parcel Expedited Max",
    maxWeight: 16,
    minWeight: 1,
    additionalDetails: {
      transitTime: "2-3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL SmartMail Parcel",
    subService: "DHL SmartMail Parcel Expedited",
    maxWeight: 16,
    minWeight: 1,
    additionalDetails: {
      transitTime: "2-5 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL SmartMail Parcel",
    subService: "DHL SmartMail Parcel Ground",
    maxWeight: 16,
    minWeight: 1,
    additionalDetails: {
      transitTime: "3-8 Postal Days",
      isGround: true,
    },
  },
  // DHL SmartMail Parcel Plus ---
  {
    provider: "DHL",
    service: "DHL SmartMail Parcel Plus",
    subService: "DHL SmartMail Parcel Plus Expedited Max",
    maxWeight: 400,
    minWeight: 16,
    additionalDetails: {
      transitTime: "2-3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL SmartMail Parcel Plus",
    subService: "DHL SmartMail Parcel Plus Expedited",
    maxWeight: 400,
    minWeight: 16,
    additionalDetails: {
      transitTime: "2-5 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL SmartMail Parcel Plus",
    subService: "DHL SmartMail Parcel Plus Ground",
    maxWeight: 400,
    minWeight: 16,
    additionalDetails: {
      transitTime: "3-8 Postal Days",
      isGround: true,
    },
  },
  // DHL SmartMail Parcel Return ---
  {
    provider: "DHL",
    service: "DHL SmartMail Parcel Return",
    subService: "DHL SmartMail Parcel Return Light",
    maxWeight: 16,
    additionalDetails: {
      transitTime: "2-4 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL SmartMail Parcel Return",
    subService: "DHL SmartMail Parcel Return Plus",
    maxWeight: 400,
    minWeight: 16,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL SmartMail Parcel Return",
    subService: "DHL SmartMail Parcel Return Ground",
    maxWeight: 400,
    minWeight: 16,
    additionalDetails: {
      transitTime: "3-8 Postal Days",
      isGround: true,
    },
  },
  // DHL SmartMail Bound Printed Matter ---
  {
    provider: "DHL",
    service: "DHL SmartMail Bound Printed Matter",
    subService: "DHL SmartMail Bound Printed Matter Expedited",
    maxWeight: 240,
    minWeight: 16,
    additionalDetails: {
      transitTime: "2-5 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL SmartMail Bound Printed Matter",
    subService: "DHL SmartMail Bound Printed Matter Ground",
    maxWeight: 240,
    minWeight: 16,
    additionalDetails: {
      transitTime: "3-8 Postal Days",
      isGround: true,
    },
  },
  // DHL SmartMail Flats ---
  {
    provider: "DHL",
    service: "DHL SmartMail Flats",
    subService: "DHL SmartMail Flats Expedited",
    maxWeight: 16,
    minWeight: 1,
    additionalDetails: {
      transitTime: "2-5 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL SmartMail Flats",
    subService: "DHL SmartMail Flats Ground",
    maxWeight: 16,
    minWeight: 1,
    additionalDetails: {
      transitTime: "3-8 Postal Days",
      isGround: true,
    },
  },
];

const international: ServiceCriteria[] = [
  // USPS First Class Package International Service ---
  {
    provider: "USPS",
    service: "USPS First Class Package International Service",
    maxWeight: 64,
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
    provider: "USPS",
    service: "USPS First Class Mail International",
    subService: "Letters",
    maxWeight: 16,
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
    provider: "USPS",
    service: "USPS First Class Mail International",
    subService: "Large Envelopes",
    maxWeight: 16,
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
    provider: "USPS",
    service: "USPS Priority Mail International Service",
    subService: "Parcel Weight Based",
    maxWeight: 1120,
    maxLengthPlusGirth: 108,
    additionalDetails: {
      transitTime: "6-10 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail International",
    subService: "Large Flat Rate Box",
    maxWeight: 320,
    maxLength: 12.25,
    maxWidth: 12,
    maxHeight: 6,
    additionalDetails: {
      transitTime: "6-10 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail International",
    subService: "Medium Flat Rate Box",
    maxWeight: 320,
    multiDimensions: [
      { label: "Top Loading", length: 11, width: 8.5, height: 5.5 },
      { label: "Side Loading", length: 13.625, width: 11.875, height: 3.375 },
    ],
    additionalDetails: {
      transitTime: "6-10 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail International",
    subService: "Small Flat Rate Box",
    maxWeight: 64,
    maxLength: 8.625,
    maxWidth: 5.375,
    maxHeight: 1.625,
    additionalDetails: {
      transitTime: "6-10 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail International",
    subService: "Flat Rate Envelope",
    maxWeight: 64,
    maxLength: 12.5,
    maxWidth: 9.5,
    additionalDetails: {
      transitTime: "6-10 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail International",
    subService: "Flat Rate Legal Envelope",
    maxWeight: 64,
    maxLength: 15,
    maxHeight: 9.5,
    additionalDetails: {
      transitTime: "6-10 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "USPS",
    service: "USPS Priority Mail International",
    subService: "Flat Rate Padded Envelope",
    maxWeight: 64,
    maxLength: 11.625,
    maxWidth: 15,
    additionalDetails: {
      transitTime: "1-3 Postal Days",
      isGround: false,
    },
  },
  // USPS Priority Mail Express International ---
  {
    provider: "USPS",
    service: "USPS Priority Mail Express International",
    maxWeight: 1120,
    maxLengthPlusGirth: 79,
    additionalDetails: {
      transitTime: "6-10 Postal Days",
      isGround: false,
    },
  },
  // UPS WWEX ---
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS Standard to Canada",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "1-5 Postal Days",
      isGround: true,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS Standard to Mexico",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "1-5 Postal Days",
      isGround: true,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS Worldwide Economy",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "5-12 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS Worldwide Saver",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "Next Day to 4 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS Worldwide Express",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "Next Day to 3 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS Worldwide Express Plus",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "Next Day to 2 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS WWEX",
    subService: "UPS Worldwide Expedited",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "3 to 5 Postal Days",
      isGround: false,
    },
  },
  // UPS Mail Innovations ---
  {
    provider: "UPS",
    service: "UPS Mail Innovations",
    subService: "ePacket",
    maxWeight: 70.4,
    additionalDetails: {
      transitTime: "4-8 days average",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS Mail Innovations",
    subService: "Priority Mail International (PMI)",
    maxWeight: 1056,
    additionalDetails: {
      transitTime: "7-10 Postal Days average",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS Mail Innovations",
    subService: "Priority & International Priority Air (IPA)",
    maxWeight: 70.4,
    additionalDetails: {
      transitTime: "4-8 days average",
      isGround: false,
    },
  },
  {
    provider: "UPS",
    service: "UPS Mail Innovations",
    subService: "Economy & International Surface Airlift (ISAL)",
    maxWeight: 70.4,
    additionalDetails: {
      transitTime: "7-14 Postal Days average transit",
      isGround: false,
    },
  },
  // FedEx International Economy ---
  {
    provider: "UPS",
    service: "FedEx International Economy",
    maxWeight: 2400,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime: "2-3 Postal Days (CA,MX,PR), 2-5 to 215+ countries",
      isGround: false,
    },
  },
  // FedEx International Priority ---
  {
    provider: "FedEx",
    service: "FedEx International Priority",
    maxWeight: 2400,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime: "1-3 Postal Days to 220+ countries",
      isGround: false,
    },
  },
  // FexEx International Priority Express ---
  {
    provider: "FedEx",
    service: "FedEx International Priority Express",
    maxWeight: 2400,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime:
        "1-3 Postal Days to 27 countries. 10:30 am CA, 12pm to 27 countries",
      isGround: false,
    },
  },
  // FedEx International Ground ---
  {
    provider: "FedEx",
    service: "FedEx International Ground (to CA)",
    maxWeight: 2400,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "2-7 Postal Days",
      isGround: true,
    },
  },
  // FedEx International First ---
  {
    provider: "FedEx",
    service: "FedEx International First",
    maxWeight: 2400,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime:
        "1-3 Postal Days to 26 countries including CA, CN, MX. 10am 1 Day to CA, 11am 1 Day to MX",
      isGround: false,
    },
  },
  // DHL International ---
  {
    provider: "FedEx",
    service: "DHL International",
    subService: "DHL Express Envelope/Document",
    maxWeight: 10,
    additionalDetails: {
      transitTime: "By the end of next postal day",
      isGround: false,
    },
  },
  {
    provider: "FedEx",
    service: "DHL International",
    subService: "DHL Express Worldwide (220 countries)",
    maxWeight: 2400,
    additionalDetails: {
      transitTime: "By the end of next postal day",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL International",
    subService: "DHL Express 12:00 noon (155 countries)",
    maxWeight: 2400,
    additionalDetails: {
      transitTime: "Before 12 noon on next postal day",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL International",
    subService: "DHL Express 9:00 (85 countries)",
    maxWeight: 1056,
    additionalDetails: {
      transitTime: "Before 9:00 am on next postal day",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL International",
    subService: "DHL Parcel International Direct",
    maxWeight: 1056,

    // NOTE: dimensionsNote: "Refer to DHL website for detailed dimensions."

    additionalDetails: {
      transitTime: "3-10 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL International",
    subService: "DHL Parcel International Standard",
    maxWeight: 1056,
    additionalDetails: {
      transitTime: "EU & CA 4-8 Postal Days, ROW 8-14 Postal Days",
      isGround: false,
    },
  },
  {
    provider: "DHL",
    service: "DHL International",
    subService: "DHL Packet International",
    maxWeight: 70.4,
    additionalDetails: {
      transitTime: "4-8 Postal Days",
      isGround: false,
    },
  },
];

export { domestic };
export { international };
