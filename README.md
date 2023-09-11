# \<oscd-publisher>

## What is this?

This is an editor plugin for [open-scd-core](https://github.com/openscd/open-scd-core#readme), the new core editor engine for OpenSCD. With this plugin you can manipulate the `Substation` section.

## What can it do

-read only view on all elements defined related to the substation structure including process elements: `Process`, `Line`, `Substation`, `VoltageLevel`, `Bay`, `PowerTransformer`, `ConductingEquipment`, `GeneralEquipment`, `SubEquipment` but also logical functions `Function`, `SubFunction`, `EqFunction`, `EqSubFunction`, `LNode` ...

- filter read only view for logical element for better navigation

## What is on the roadmap

- add remove feature to all elements
- edit feature for all elements
- create feature for all children of the element
- add copy feature for `VoltageLevel` and `Bay` elements

## Known distribution

This plugin is utelized by these distribution so far

- [OpenEnergyTools](https://openenergytools.github.io/scl-editor)

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

&copy; Jakob Vogelsang
