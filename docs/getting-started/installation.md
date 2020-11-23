---
title: Installation
---

## Install NPM

This repository is distributed with npm. After installing node.js, and npm you can install Snookit using:

```
$ npm install snookit
```

## Folder structure

If you check in your node_modules directory you should now have a snookit directory that contains all the packages required to get up and running.

```
node_modules/
└─ @snookit/
├── css/
│ ├── snookit.css
│ └── snookit.min.css
│
├── scss/
│ ├── components/
│ ├── support/
│ ├── typography/
│ └── utilities/
│ └── index.scss
│
├── package.json
└── README.md
```

## Usage

Once the npm package is installed you can link to the snookit css files or import the scss files and override style where necessary.

<br>
## Snookit CDN

When you only need to include Snookit's compiled CSS in your project you can use the Snookit CDN.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/snookit@latest/css/snookit.min.css">
```
