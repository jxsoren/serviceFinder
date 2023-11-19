import { calculations, ServiceCriteria } from "../app/calculations";

describe("USPS Service Calculations", () => {
  // Test for USPS First Class Mail (parcel weight-based)
  test("should select USPS First Class Mail (parcel weight-based) for eligible packages", () => {
    const result: ServiceCriteria[] = calculations(21, 17, 14, 0.9, "domestic");
    expect(result).toContainEqual({
      service: "USPS First Class",
      subService: "USPS First Class Mail (parcel weight-based)",
    });
  });

  // Test for USPS First Class Mail Letter
  test("should select USPS First Class Mail Letter for eligible letters", () => {
    const result: ServiceCriteria[] = calculations(11, 0.2, 6, 0.2, "domestic");
    expect(result).toContainEqual({
      service: "USPS First Class",
      subService: "USPS First Class Mail Letter",
    });
  });

  // Test for USPS First Class Mail Thick Envelope
  test("should select USPS First Class Mail Thick Envelope for eligible envelopes", () => {
    const result: ServiceCriteria[] = calculations(
      14,
      11,
      0.7,
      0.9,
      "domestic"
    );
    expect(result).toContainEqual({
      service: "USPS First Class",
      subService: "USPS First Class Mail Thick Envelope",
    });
  });

  // Test for USPS Media Mail
  test("should select USPS Media Mail for eligible media items", () => {
    const result: ServiceCriteria[] = calculations(10, 10, 2, 2, "domestic");
    expect(result).toContainEqual({
      service: "USPS Media Mail",
      subService: "USPS Media Mail",
    });
  });

  // Test for a package that does not qualify for any service
  test("should return no available service for a package that does not meet any criteria", () => {
    const result: ServiceCriteria[] = calculations(
      1000,
      1000,
      1000,
      1000,
      "domestic"
    );
    expect(result).not.toContainEqual({
      service: "USPS First Class",
      subService: "USPS First Class Mail (parcel weight-based)",
    });
    expect(result).not.toContainEqual({
      service: "USPS First Class",
      subService: "USPS First Class Mail Letter",
    });
    expect(result).not.toContainEqual({
      service: "USPS First Class",
      subService: "USPS First Class Mail Thick Envelope",
    });
    expect(result).not.toContainEqual({
      service: "USPS Media Mail",
      subService: "USPS Media Mail",
    });
  });
});
