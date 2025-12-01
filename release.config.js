export default {
  branches: ["master"],
  repositoryUrl: "https://github.com/cesarj41/books-api-dotnet.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]"
      }
    ]
  ]
};