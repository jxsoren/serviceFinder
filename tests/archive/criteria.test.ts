// import { calculations } from "../app/Logic/calculations";

// describe("Service Calculation Tests", () => {
//   // Domestic Tests
//   describe("Domestic Service Calculations", () => {
//     // Test for USPS Ground Advantage
//     test("should not include USPS Ground Advantage for eligible packages", () => {
//       const result = calculations(100, 20, 10, 1000, "domestic");
//       expect(result).not.toContainEqual(
//         expect.arrayContaining([
//           expect.objectContaining({ service: "USPS Ground Advantage" }),
//         ])
//       );
//     });

//     // Test for USPS Media Mail
//     test("should include USPS Media Mail for eligible packages", () => {
//       const result = calculations(12, 12, 6, 1000, "domestic");
//       expect(result).toEqual(
//         expect.arrayContaining([
//           expect.objectContaining({ service: "USPS Media Mail" }),
//         ])
//       );
//     });

//     // Test for USPS Parcel Select
//     test("should not include USPS Parcel Select for eligible packages", () => {
//       const result = calculations(50, 20, 20, 1100, "domestic");
//       expect(result).not.toEqual(
//         expect.arrayContaining([
//           expect.objectContaining({
//             service: "USPS Parcel Select",
//             subService: "Weight Based",
//           }),
//         ])
//       );
//     });

//     // Test for USPS Priority Mail - Parcel Weight Based
//     test("should include USPS Priority Mail - Parcel Weight Based for eligible packages", () => {
//       const result = calculations(10, 10, 10, 100, "domestic");
//       expect(result).toEqual(
//         expect.arrayContaining([
//           expect.objectContaining({
//             service: "USPS Priority Mail",
//             subService: "Parcel Weight Based",
//           }),
//         ])
//       );
//     });

//     // ...other specific tests for each service...

//     // Test for no available services
//     test("should return 'No services available' for a package that does not meet any domestic criteria", () => {
//       const result = calculations(200, 200, 200, 5000, "domestic");
//       expect(result).toEqual([{ service: "No services available" }]);
//     });
//   });

//   // International Tests
//   describe("International Service Calculations", () => {
//     // Test for USPS First Class Package International Service
//     test("should include USPS First Class Package International Service for eligible packages", () => {
//       const result = calculations(15, 10, 5, 60, "international");
//       expect(result).toEqual(
//         expect.arrayContaining([
//           expect.objectContaining({
//             service: "USPS First Class Package International Service",
//           }),
//         ])
//       );
//     });

//     // Test for USPS Priority Mail International - Large Flat Rate Box
//     test("should include USPS Priority Mail International - Large Flat Rate Box for eligible packages", () => {
//       const result = calculations(12, 12, 5.5, 300, "international");
//       expect(result).toEqual(
//         expect.arrayContaining([
//           expect.objectContaining({
//             service: "USPS Priority Mail International",
//             subService: "Large Flat Rate Box",
//           }),
//         ])
//       );
//     });

//     // ...other specific tests for each international service...

//     // Test for no available services
//     test("should return 'No services available' for a package that does not meet any international criteria", () => {
//       const result = calculations(100, 100, 100, 5000, "international");
//       expect(result).toEqual([{ service: "No services available" }]);
//     });
//   });
// });
