# GitRevue JavaScript SDK

[![NPM version](https://img.shields.io/npm/v/@gitrevue/sdk.svg)](https://www.npmjs.com/package/@gitrevue/sdk)
[![NPM downloads](https://img.shields.io/npm/dm/@gitrevue/sdk.svg)](https://www.npmjs.com/package/@gitrevue/sdk)

[GitRevue](https://gitrevue.io) SDK for JavaScript. This library helps you interact with our API from other libraries. You may find the [@gitrevue/cli](https://github.com/gitrevue/cli) better if you want to interact with our API from a CLI or CI/CD environment.

## Installing

```sh
npm install @gitrevue/sdk
```

## Developing

To develop `@gitrevue/sdk` you'll need node 10+, if you have nvm installed you can run `nvm use` to select the correct node version.

Run `npm run build` to compile the library. You can also use `npm run build:watch` to watch for file changes and compile automatically.

You may run the test suite using `npm test`. Alternatively you can use `npm run test:watch` to watch for file changes and automatically rerun the test suite.

## Releasing

1. Update version numbers in `CHANGELOG.md` and commit.
1. Run `npm version` to bump the `package.json` version, automatically commit and tag.
1. Next push the commits and tag using `git push && git push --tags`
1. Publish the new version with `npm publish`
1. Update the release on GitHub with the changes from `CHANGELOG.md`

## License

[MIT](https://github.com/gitrevue/sdk-js/blob/master/LICENSE)
