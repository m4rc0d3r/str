import path from "node:path";
import { END_OF_LINE } from "../src";
import { getFilesForPublication } from "./get-files-for-publication";

const RELATIVE_PATH_TO_THE_PACKAGE_ROOT = "..";

async function main() {
  const pathToPackageDirectory = path.join(
    __dirname,
    RELATIVE_PATH_TO_THE_PACKAGE_ROOT
  );
  console.log(
    (await getFilesForPublication(pathToPackageDirectory)).join(END_OF_LINE)
  );
}

main();
