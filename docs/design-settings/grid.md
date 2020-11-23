---
id: grid
title: Grid
---

A grid can add structure and consistent horizontal spacing to a page layout.

## Responsive grid layouts

Media query extensions allow you to modify your grid layout based on predefined screen sizes. All utility classes are mobile first by default and can be overridden by media query extensions that target larger breakpoints.

<table class="sk-table-component">
  <thead>
    <tr>
      <th>Size</th>
      <th>Class modifier</th>
      <th>Min width</th>
      <th>Max width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>not-small</td>
      <td>--ns</td>
      <td>0rem</td>
      <td>48rem (768px)</td>
    </tr>
    <tr>
      <td>medium</td>
      <td>--m</td>
      <td>48rem (768px)</td>
      <td>64rem (1024px)</td>
    </tr>
    <tr>
      <td>large</td>
      <td>--l</td>
      <td>64rem (1024px)</td>
      <td>and up</td>
    </tr>
  </tbody>
</table>

## Full width

<div class="component-example">
  <div class="component-example__content sk-mw-full sk-ph-4">
   <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-bg-grey-300">Full width grid</div>
  </div>
</div>

```
<div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-bg-grey-300">
  Full width grid
</div>
```

## Full width on mobile half width on desktop

<div class="component-example">
  <div class="component-example__content sk-mw-full sk-ph-4">
<div class="sk-flex sk-flex-wrap sk-flex-nowrap--ns sk-w-full">
      <div
        class="sk-flex sk-w-full sk-mb-5 sk-w-half--ns sk-pr-3--ns sk-mb-0--ns"
      >
        <div
          class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300"
        >
          Full width on mobile / half width on desktop
        </div>
      </div>
      <div
        class="sk-flex sk-w-full sk-mb-5 sk-w-half--ns sk-pl-3--ns sk-mb-0--ns"
      >
        <div
          class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300"
        >
          Full width on mobile / half width on desktop
        </div>
      </div>
    </div>
  </div>
</div>

```
<div class="sk-flex sk-flex-wrap sk-flex-nowrap--ns sk-w-full">
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-half--ns sk-pr-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / half width on desktop
    </div>
  </div>
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-half--ns sk-pl-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / half width on desktop
    </div>
  </div>
</div>
```

## Full width on mobile / one third width on desktop

<div class="component-example">
  <div class="component-example__content sk-mw-full sk-ph-4">
<div class="sk-flex sk-flex-wrap sk-flex-nowrap--ns sk-w-full">
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-third--ns sk-pr-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one third on desktop
    </div>
  </div>

  <div class="sk-flex sk-w-full sk-mb-5 sk-w-third--ns sk-ph-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one third on desktop
    </div>
  </div>
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-third--ns sk-pl-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one third on desktop
    </div>
  </div>
</div>
  </div>
</div>

```
<div class="sk-flex sk-flex-wrap sk-flex-nowrap--ns sk-w-full">
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-third--ns sk-pr-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one third on desktop
    </div>
  </div>

  <div class="sk-flex sk-w-full sk-mb-5 sk-w-third--ns sk-ph-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one third on desktop
    </div>
  </div>
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-third--ns sk-pl-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one third on desktop
    </div>
  </div>
</div>
```

## Full width on mobile / two third & one third width on desktop

<div class="component-example">
  <div class="component-example__content sk-mw-full sk-ph-4">
<div class="sk-flex sk-flex-wrap sk-flex-nowrap--ns sk-w-full">
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-two-thirds--ns sk-pr-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / two third width on desktop
    </div>
  </div>

  <div class="sk-flex sk-w-full sk-mb-5 sk-w-half--ns sk-pl-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one third width on desktop
    </div>
  </div>
</div>
  </div>
</div>

```
<div class="sk-flex sk-flex-wrap sk-flex-nowrap--ns sk-w-full">
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-two-thirds--ns sk-pr-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / two third width on desktop
    </div>
  </div>

  <div class="sk-flex sk-w-full sk-mb-5 sk-w-half--ns sk-pl-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one third width on desktop
    </div>
  </div>
</div>
```

## Full width mobile / quarter width on desktop

<div class="component-example">
  <div class="component-example__content sk-mw-full sk-ph-4">
<div class="sk-flex sk-flex-wrap sk-flex-nowrap--ns sk-w-full">
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-quarter--ns sk-pr-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one quarter on desktop
    </div>
  </div>

  <div class="sk-flex sk-w-full sk-mb-5 sk-w-quarter--ns sk-ph-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one quarter on desktop
    </div>
  </div>
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-quarter--ns sk-ph-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one quarter on desktop
    </div>
  </div>
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-quarter--ns sk-pl-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one quarter on desktop
    </div>
  </div>
</div>
  </div>
</div>

```
<div class="sk-flex sk-flex-wrap sk-flex-nowrap--ns sk-w-full">
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-quarter--ns sk-pr-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one quarter on desktop
    </div>
  </div>

  <div class="sk-flex sk-w-full sk-mb-5 sk-w-quarter--ns sk-ph-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one quarter on desktop
    </div>
  </div>
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-quarter--ns sk-ph-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one quarter on desktop
    </div>
  </div>
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-quarter--ns sk-pl-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one quarter on desktop
    </div>
  </div>
</div>
```

## Full width mobile / three quarter & one quarter width on desktop

<div class="component-example">
  <div class="component-example__content sk-mw-full sk-ph-4">
<div class="sk-flex sk-flex-wrap sk-flex-nowrap--ns sk-w-full">
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-three-quarters--ns sk-pr-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / three quarter width on desktop
    </div>
  </div>

  <div class="sk-flex sk-w-full sk-mb-5 sk-w-quarter--ns sk-pl-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one quarter width on desktop
    </div>
  </div>
</div>
  </div>
</div>

```
<div class="sk-flex sk-flex-wrap sk-flex-nowrap--ns sk-w-full">
  <div class="sk-flex sk-w-full sk-mb-5 sk-w-three-quarters--ns sk-pr-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / three quarter width on desktop
    </div>
  </div>

  <div class="sk-flex sk-w-full sk-mb-5 sk-w-quarter--ns sk-pl-3--ns sk-mb-0--ns">
    <div class="sk-w-full sk-br-3 sk-p-4 sk-p sk-grey-700 sk-text-align-center sk-bg-grey-300">
      Full width on mobile / one quarter width on desktop
    </div>
  </div>
</div>
```
