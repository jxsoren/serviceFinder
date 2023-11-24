import {
  domestic,
  international,
  ServiceCriteria,
} from "../app/Logic/serviceCriterias";

const expectedProvider = (arr: ServiceCriteria[]) => {
  for (let i = 0; i < arr.length; i++) {
    let serviceName: string | null;

    if (arr[i].service.slice(0, 4) === "USPS") {
      serviceName = "USPS";
    } else if (arr[i].service.slice(0, 3) === "UPS") {
      serviceName = "USPS";
    } else if (arr[i].service.slice(0, 5) === "FedEx") {
      serviceName = "FedEx";
    } else if (arr[i].service.slice(0, 3) === "DHL") {
      serviceName = "DHL";
    } else {
      serviceName = null;
    }

    if (arr[i].provider === serviceName) {
      return "Correct Provider";
    } else {
      return "Incorrect Provider";
    }
  }

  return;
};

describe("Domestic Provider Check", () => {
  test("service provider should match the first part of the service name", () => {
    const results = expectedProvider(domestic);
    expect(results).toEqual(expect.stringContaining("Correct Provider"));
  });
});

describe("International Provider Check", () => {
  test("service provider should match the first part of the service name", () => {
    const results = expectedProvider(international);
    expect(results).toEqual(expect.stringContaining("Correct Provider"));
  });
});
