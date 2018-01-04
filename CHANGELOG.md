# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 8.0.0-rc.1 - 2017-12-18

### Added

* `prettier` and `prettier-eslint-cli`

### Changed

* Move peerDependencies to dependencies so other projects don't need to specify them.

### Removed

* All of our custom rules.

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
