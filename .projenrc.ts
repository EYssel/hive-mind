import { monorepo } from "@aws/pdk";
const project = new monorepo.MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "hive-mind",
  projenrcTs: true,
});
project.synth();