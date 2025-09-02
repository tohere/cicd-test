import { Config } from "release-it";

export default {
  github: {
    release: true,
    draft: true,
  },
  git: {
    tagName: "v${version}",
    commitMessage: "v${version}",
    push: true,
    commit: true,
    tag: true,
  },
  npm: {
    publish: false,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "CHANGELOG.md",
      header: "# Changelog",
      preset: "angular",
    },
  },
  increment: false,
} as Config;
