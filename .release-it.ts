import { Config } from "release-it";

export default {
  git: {
    tagName: "v${version}",
    commitMessage: "v${version}",
  },
  npm: {
    publish: false,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "CHANGELOG.md",
      header: "# Changelog",
      preset: {
        name: "angular",
      },
      prompt: true,
    },
  },
} as Config;
