export interface ServiceCriteria {
  service: string;
  subService?: string;
  maxWeight: number;
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
  additionalDetails?: { transitTime: string; isGround: boolean };
}

// All measurements are in inches. All weights are in ounces.

const domestic: ServiceCriteria[] = [
  // USPS Ground Advantage ---
  {
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
    service: "USPS Priority Mail",
    subService: "Medium Flat Rate Box (Top-Loading)",
    maxWeight: 1120,
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
    maxWeight: 1120,
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
    service: "USPS Priority Mail Express",
    subService: "Parcel Weight Based",
    maxWeight: 240,
    maxLengthPlusGirth: 108,
    additionalDetails: {
      transitTime: "1-2 Days",
      isGround: false,
    },
  },
  //
  {
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
  {
    service: "UPS Mail Innovations",
    subService: "Flat Mail",
    maxWeight: 15.99,
    additionalDetails: {
      transitTime: "5-8 Postal Days",
      isGround: true,
    },
  },
  {
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
    service: "UPS Mail Innovations",
    subService: "Parcel Select Lightweight",
    maxWeight: 15.99,
    additionalDetails: {
      transitTime: "5-8 Postal Days",
      isGround: true,
    },
  },
  {
    service: "UPS Mail Innovations",
    subService: "Parcel Select Heavyweigh)",
    minWeight: 16,
    maxWeight: 1120,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "5-8 Postal Days",
      isGround: true,
    },
  },
  {
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
    service: "UPS SurePost",
    subService: "Bound Printed Matter",
    maxWeight: 240,
    additionalDetails: {
      transitTime: "2-7 Postal Days",
      isGround: true,
    },
  },
  {
    service: "UPS SurePost",
    subService: "Media",
    maxWeight: 1120,
    additionalDetails: {
      transitTime: "2-7 Postal Days",
      isGround: true,
    },
  },
  {
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
    service: "FedEx 2Day",
    subService: "FedEx 2Day AM",
    maxWeight: 2400,
    maxLength: 119,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "2 Postal Days by 10:30 am",
      isGround: false,
    },
  },
  {
    service: "FedEx 2Day",
    subService: "FedEx 2Day One Rate Envelope",
    maxWeight: 160,
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    service: "FedEx 2Day",
    subService: "FedEx 2Day One Rate Pak",
    maxWeight: 800,
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    service: "FedEx 2Day",
    subService: "FedEx 2Day One Rate Small Box",
    maxWeight: 800,
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    service: "FedEx 2Day",
    subService: "FedEx 2Day One Rate Medium Box",
    maxWeight: 800,
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    service: "FedEx 2Day",
    subService: "FedEx 2Day One Rate Large Box",
    maxWeight: 800,
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    service: "FedEx 2Day",
    subService: "FedEx 2Day One Rate Extra Large Box",
    maxWeight: 800,
    additionalDetails: {
      transitTime: "2 Postal Days",
      isGround: false,
    },
  },
  {
    service: "FedEx Express Saver",
    maxWeight: 2400,
    maxLength: 119,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "3 Postal Days by 4:30pm, residences 8 pm",
      isGround: false,
    },
  },
  {
    service: "FedEx Ground",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "1-5 Postal Days (3-7 for AK/HI)",
      isGround: true,
    },
  },
  {
    service: "FedEx Home Delivery",
    maxWeight: 2400,
    maxLength: 108,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "1-5 Postal Days (3-7 for AK/HI)",
      isGround: true,
    },
  },
  {
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
  {
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
  {
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
    service: "FedEx Ground Economy (formerly SmartPost)",
    subService: "FedEx SmartPost Parcel Select",
    maxWeight: 1120,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime: "2-7 Postal Days",
      isGround: true,
    },
  },
  {
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
    service: "DHL SmartMail Parcel",
    subService: "DHL SmartMail Parcel Ground",
    maxWeight: 16,
    minWeight: 1,
    additionalDetails: {
      transitTime: "3-8 Postal Days",
      isGround: true,
    },
  },
  {
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
    service: "DHL SmartMail Parcel Plus",
    subService: "DHL SmartMail Parcel Plus Ground",
    maxWeight: 400,
    minWeight: 16,
    additionalDetails: {
      transitTime: "3-8 Postal Days",
      isGround: true,
    },
  },
  {
    service: "DHL SmartMail Parcel Return",
    subService: "DHL SmartMail Parcel Return Light",
    maxWeight: 16,
    additionalDetails: {
      transitTime: "2-4 Postal Days",
      isGround: false,
    },
  },
  {
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
    service: "DHL SmartMail Parcel Return",
    subService: "DHL SmartMail Parcel Return Ground",
    maxWeight: 400,
    minWeight: 16,
    additionalDetails: {
      transitTime: "3-8 Postal Days",
      isGround: true,
    },
  },
  {
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
    service: "DHL SmartMail Bound Printed Matter",
    subService: "DHL SmartMail Bound Printed Matter Ground",
    maxWeight: 240,
    minWeight: 16,
    additionalDetails: {
      transitTime: "3-8 Postal Days",
      isGround: true,
    },
  },
  {
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
    service: "USPS Priority Mail International",
    subService: "Medium Flat Rate Box (Top-Loading)",
    maxWeight: 320,
    maxLength: 11,
    maxWidth: 8.5,
    maxHeight: 5.5,
    additionalDetails: {
      transitTime: "6-10 Postal Days",
      isGround: false,
    },
  },
  {
    service: "USPS Priority Mail International",
    subService: "Medium Flat Rate Box (Side-Loading)",
    maxWeight: 320,
    maxLength: 13.625,
    maxWidth: 11.875,
    maxHeight: 3.375,
    additionalDetails: {
      transitTime: "6-10 Postal Days",
      isGround: false,
    },
  },
  {
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
    service: "USPS Priority Mail Express International",
    maxWeight: 1120,
    maxLengthPlusGirth: 79,
    additionalDetails: {
      transitTime: "6-10 Postal Days",
      isGround: false,
    },
  },
  {
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
  {
    service: "UPS Mail Innovations",
    subService: "ePacket",
    maxWeight: 70.4,
    additionalDetails: {
      transitTime: "4-8 days average",
      isGround: false,
    },
  },
  {
    service: "UPS Mail Innovations",
    subService: "Priority Mail International (PMI)",
    maxWeight: 1056,
    additionalDetails: {
      transitTime: "7-10 Postal Days average",
      isGround: false,
    },
  },
  {
    service: "UPS Mail Innovations",
    subService: "Priority & International Priority Air (IPA)",
    maxWeight: 70.4,
    additionalDetails: {
      transitTime: "4-8 days average",
      isGround: false,
    },
  },
  {
    service: "UPS Mail Innovations",
    subService: "Economy & International Surface Airlift (ISAL)",
    maxWeight: 70.4,
    additionalDetails: {
      transitTime: "7-14 Postal Days average transit",
      isGround: false,
    },
  },
  {
    service: "FedEx International Economy",
    maxWeight: 2400,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime: "2-3 Postal Days (CA,MX,PR), 2-5 to 215+ countries",
      isGround: false,
    },
  },
  {
    service: "FedEx International Priority",
    maxWeight: 2400,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime: "1-3 Postal Days to 220+ countries",
      isGround: false,
    },
  },
  {
    service: "FedEx International Priority Express",
    maxWeight: 2400,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime:
        "1-3 Postal Days to 27 countries. 10:30 am CA, 12pm to 27 countries",
      isGround: false,
    },
  },
  {
    service: "FedEx International Ground (to CA)",
    maxWeight: 2400,
    maxLengthPlusGirth: 165,
    additionalDetails: {
      transitTime: "2-7 Postal Days",
      isGround: true,
    },
  },
  {
    service: "FedEx International First",
    maxWeight: 2400,
    maxLengthPlusGirth: 130,
    additionalDetails: {
      transitTime:
        "1-3 Postal Days to 26 countries including CA, CN, MX. 10am 1 Day to CA, 11am 1 Day to MX",
      isGround: false,
    },
  },
  {
    service: "DHL International",
    subService: "DHL Express Envelope/Document",
    maxWeight: 10,
    additionalDetails: {
      transitTime: "By the end of next postal day",
      isGround: false,
    },
  },
  {
    service: "DHL International",
    subService: "DHL Express Worldwide (220 countries)",
    maxWeight: 2400,
    additionalDetails: {
      transitTime: "By the end of next postal day",
      isGround: false,
    },
  },
  {
    service: "DHL International",
    subService: "DHL Express 12:00 noon (155 countries)",
    maxWeight: 2400,
    additionalDetails: {
      transitTime: "Before 12 noon on next postal day",
      isGround: false,
    },
  },
  {
    service: "DHL International",
    subService: "DHL Express 9:00 (85 countries)",
    maxWeight: 1056,
    additionalDetails: {
      transitTime: "Before 9:00 am on next postal day",
      isGround: false,
    },
  },
  {
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
    service: "DHL International",
    subService: "DHL Parcel International Standard",
    maxWeight: 1056,
    additionalDetails: {
      transitTime: "EU & CA 4-8 Postal Days, ROW 8-14 Postal Days",
      isGround: false,
    },
  },
  {
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
