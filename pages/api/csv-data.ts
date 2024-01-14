import path from "path";
import fs from "fs";
import Papa from "papaparse";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(
    process.cwd(),
    "app/serviceLookup/csv/services.csv"
  );

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error reading CSV file" });
    }

    Papa.parse(data, {
      header: true,
      complete: (results) => {
        res.status(200).json(results.data);
      },
    });
  });
}
