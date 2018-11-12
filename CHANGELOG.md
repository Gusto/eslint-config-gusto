# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 9.2.0 - 2018-11-12

* Remove `react/destructuring-assignment` rule is it does not help with code quality.
* Upgraded dependencies:
  - `eslint`: 5.9.0
  - `eslint-config-prettier`: 3.3.0
  - `eslint-plugin-prettier`: 3.0.0
  - `prettier`: 1.15.2

## 9.0.0 - 2018-08-24

### Upgraded

* Upgraded dependencies:
  - `eslint-config-airbnb`: 17.1.0
  - `prettier`: 1.14.2

## 8.0.2 - 2018-03-21

### Upgraded

* Upgraded dependencies

## 8.0.1 - 2018-02-28

### Changed

* Make the npm package public

## 8.0.0 - 2018-02-28

### Added

* `prettier`

### Changed

* Move peerDependencies to dependencies so other projects don't need to specify them.

### Removed

* All of our custom configuration.

## 7.0.1 - 2017-09-25

### Added

* Created a changelog

### Changed

* Updated package.json dev/peer dependencies to be consistent with one another
* Updated installation instructions to include proper peer dependencies
* Updated ESLint config name to work properly – old instructions still specified non-`@gusto` namespace
* Updated package description and bumped version

### Removed

* Removed non-functional `core` config installation instructions
