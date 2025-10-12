import Arborist from "@npmcli/arborist";
import npmPacklist from "npm-packlist";

async function getFilesForPublication(pathToPackageDirectory: string) {
  const arborist = new Arborist({
    path: pathToPackageDirectory,
  });
  const tree = await arborist.loadActual();
  return npmPacklist(tree);
}

export { getFilesForPublication };
