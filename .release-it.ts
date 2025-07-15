import { Config } from "release-it";

export default {
  git: {
    tagName: "v${version}",
    commitMessage: "v${version}",
  },
  npm: {
    publish: false,
  },
} as Config;
