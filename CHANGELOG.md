# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2021-06-15

### Added

- `react/react-in-jsx-scope` rule.

### Changed

- Update dependencies.
- Improve `no-unused-vars` rule.
- Improve `quotes` rule.

### Removed

- `@typescript-eslint/no-namespace` rule.
- `@typescript-eslint/no-non-null-assertion` rule.

## [2.0.1] - 2020-07-18

### Fixed

- Present tense in changelog.
- Triple-dots in JSON snippets in README.

## [2.0.0] - 2020-07-18

### Changed

- Redesigned config to be compatible with ESLint v7.0.0 and make use of its new features.
- Improved README.
- Changed rule sets to make the config more general (less React specific) so that it can be used in more projects.
- Adapted to the deprecation of `prettier-eslint` and removed it as a peer dependency.
- Instead, the config extends `eslint-config-prettier` to allow for integration with Prettier.

## [1.0.1] - 2020-05-28

### Changed

- Renamed repository from `eslint-config-danielgiljam` to `eslint-config`.

## [1.0.0] - 2020-05-11

### Added

- Initial version.

[1.0.0]: https://github.com/DanielGiljam/eslint-config/releases/tag/v1.0.0
[1.0.1]: https://github.com/DanielGiljam/eslint-config/releases/tag/v1.0.1
[2.0.0]: https://github.com/DanielGiljam/eslint-config/releases/tag/v2.0.0
[2.0.1]: https://github.com/DanielGiljam/eslint-config/releases/tag/v2.0.1
[3.0.0]: https://github.com/DanielGiljam/eslint-config/releases/tag/v3.0.0
