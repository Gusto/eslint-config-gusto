# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 9.8.0 - 2019-09-19

- Upgraded dependencies:
  - `eslint-config-prettier`: 4.3.0 :arrow_double_up: 6.3.0
    - this package mostly disables rules that prettier will handle and probably should have been updated when `prettier` was last updated in `9.5.0`.

## 9.7.0 - 2019-09-18

- All dependencies relaxed - most to `^`

  The intent is to make it more easy and flexible to use this config, and have it require less maintenance. Consuming projects can now choose when to make minor updates. It should also allow for more ease of de-duping versions in consuming projects if there is overlap. If we encounter package-overlap that requires stricter versions we can always tighten these again to `~` or to single version if so needed. `^` was chosen because if packages are using semver correctly there should be no breaking changes. Of course, linting is very touchy so there may be minor or patch versions release that "break" lint by introducing new failures. I still think it's better to be able to update easily and fix these in your projects than to have to wait for a new published version of this config to catch updates.

- Upgraded dependencies:

  - `babel-eslint`: 10.0.1 :arrow_right: 10.0.3
  - `eslint-config-prettier`: 4.1.0 :arrow_up_small: 4.3.0
  - `eslint-plugin-import`: 2.17.2 :arrow_up_small: 2.18.2
  - `eslint-plugin-jsx-a11y`: 6.2.1 :arrow_right: 6.2.3
  - `eslint-plugin-prettier`: 3.0.1 :arrow_up_small: 3.1.1

## 9.6.0 - 2019-09-18

- Change eslint-plugin-react React version configuration to `'detect'` for more flexibility across projects that use this.
- Upgraded dependencies:
  - `eslint-plugin-react`: 10.0.1 :arrow_right: 10.0.3
    - THIS MAY CAUSE LINT FAILURES - the plugin's ability to detect missing prop-types was improved so it may catch more offenses than before.

## 9.5.0 - 2019-06-11

- Upgraded dependencies:
  - `prettier`: 1.17.0. :arrow_up_small: 1.18.2
    - THIS MAY CAUSE LINT FAILURES - prettier stops breaking template literals

## 9.2.0 - 2018-11-12

- Remove `react/destructuring-assignment` rule is it does not help with code quality.
- Upgraded dependencies:
  - `eslint`: 5.9.0
  - `eslint-config-prettier`: 3.3.0
  - `eslint-plugin-prettier`: 3.0.0
  - `prettier`: 1.15.2

## 9.0.0 - 2018-08-24

### Upgraded

- Upgraded dependencies:
  - `eslint-config-airbnb`: 17.1.0
  - `prettier`: 1.14.2

## 8.0.2 - 2018-03-21

### Upgraded

- Upgraded dependencies

## 8.0.1 - 2018-02-28

### Changed

- Make the npm package public

## 8.0.0 - 2018-02-28

### Added

- `prettier`

### Changed

- Move peerDependencies to dependencies so other projects don't need to specify them.

### Removed

- All of our custom configuration.

## 7.0.1 - 2017-09-25

### Added

- Created a changelog

### Changed

- Updated package.json dev/peer dependencies to be consistent with one another
- Updated installation instructions to include proper peer dependencies
- Updated ESLint config name to work properly – old instructions still specified non-`@gusto` namespace
- Updated package description and bumped version

### Removed

- Removed non-functional `core` config installation instructions
