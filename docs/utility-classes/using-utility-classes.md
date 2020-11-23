---
title: Using utility classes
---

Utility CSS classes can be mixed and matched together to create consistent UI elements and layout. When you need to add some margin or padding, rather than adding a new selector specific to that use case, you can use utility classes. This reduces the number of unique property-value pairs, and helps maintain consistency in your project.

You can use the [utility class list](utility-class-list.md) to easily find utility classes.

## Building page elements using utility classes

Utility classes can be mixed and matched together to make custom page elements or components. See the example below:

<div class="component-example">
  <div class="component-example__content sk-mw-full">
    <div class="sk-mw-full sk-flex sk-b sk-b-dark-red sk-bw-2 sk-br-3 sk-m-2">
      <div class="sk-bg-dark-red sk-pr-3"></div>
      <div class="sk-pt-5 sk-pb-4 sk-ph-5">
        <h2 class="sk-font-size-3 sk-dark-red sk-mb-4 sk-mt-3 sk-text-align-left">
          No internet connection
        </h2>
        <p class="sk-bold sk-mb-6 sk-grey-700">
          Poor internet connection detected. Please check your connectivity.
        </p>
        <button class="sk-b sk-b-dark-red sk-bw-2 sk-br-2 sk-ph-6 sk-pv-4 sk-dark-red sk-p sk-bold sk-hover-bg-dark-red sk-hover-white sk-pointer sk-mt-2 sk-mb-3 sk-float-left">
          Retry submitting form
        </button>
      </div>
    </div>
  </div>
</div>

```
<div class="sk-mw-full sk-flex sk-b sk-b-dark-red sk-bw-2 sk-br-3 sk-m-2">
  <div class="sk-bg-dark-red sk-pr-3"></div>
  <div class="sk-pt-5 sk-pb-4 sk-ph-5">
    <h2 class="sk-font-size-3 sk-dark-red sk-mb-4 sk-mt-3 sk-text-align-left">
      No internet connection
    </h2>
    <p class="sk-bold sk-mb-6 sk-grey-700">
      Poor internet connection detected. Please check your connectivity.
    </p>
    <button class="sk-b sk-b-dark-red sk-bw-2 sk-br-2 sk-ph-6 sk-pv-4 sk-dark-red sk-p sk-bold sk-hover-bg-dark-red sk-hover-white sk-pointer sk-mt-2 sk-mb-3 sk-float-left">
      Retry submitting form
    </button>
  </div>
</div>
```

## Extending existing components

You can also use utility classes to extend or customise existing Snookit components.

<div class="component-example">
  <div class="component-example__content">
    <button class="sk-button-primary sk-bg-pink sk-b-pink center">Primary button</button>
  </div>
</div>

```
<button class="sk-button-primary sk-bg-pink sk-b-pink">Primary button</button>
```
