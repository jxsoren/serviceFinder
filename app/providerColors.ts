import { IconType } from "react-icons";

import { FaUsps, FaUps, FaFedex, FaDhl } from "react-icons/fa";

export interface ProviderIcons {
  USPS: IconType;
  UPS: IconType;
  FedEx: IconType;
  DHL: IconType;
  [key: string]: IconType;
}

export interface ProviderColors {
  USPS: string;
  UPS: string;
  FedEx: string;
  DHL: string;
  [key: string]: string;
}

export const providerIcons: ProviderIcons = {
  USPS: FaUsps,
  UPS: FaUps,
  FedEx: FaFedex,
  DHL: FaDhl,
};

export const providerColors: ProviderColors = {
  USPS: "#004B87",
  UPS: "#FFB500",
  FedEx: "#4D148C",
  DHL: "#D40511",
};

export const providerBgColors: ProviderColors = {
  USPS: "#004B87",
  UPS: "#FFB500",
  FedEx: "#4D148C",
  DHL: "#D40511",
};

export const providerIconBgColors: ProviderColors = {
  USPS: "#CCE4F6",
  UPS: "#FFF2D5",
  FedEx: "#E8D3FF",
  DHL: "#FFD3D3",
};

export const providerLogos: ProviderColors = {
  USPS: "/logos/usps.svg",
  UPS: "/logos/ups.svg",
  FedEx: "/logos/fedex.svg",
  DHL: "/logos/dhl.svg",
};
