---
title: Text area
---

Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.

## Text area with label

<div class="component-example">
  <div class="component-example__content sk-mw-full">
    <div class="sk-text-area sk-w-full sk-ph-6">
      <label for="experience">Please describe your experience</label>
      <textarea type="text" id="experience" name="experience" class="sk-w-full"></textarea>
    </div>
  </div>
</div>

```
<div class="sk-text-area">
  <label for="experience">Please describe your experience</label>
  <textarea type="text" id="experience" name="experience" class="sk-w-full"></textarea>
</div>
```

## Text area with label (validation)

<div class="component-example">
  <div class="component-example__content sk-mw-full">
    <div class="sk-text-area sk-w-full sk-ph-6 is-invalid">
      <label for="experience">Please describe your experience</label>
      <textarea type="text" id="experience" name="experience" class="sk-w-full"></textarea>
           <span class="sk-error-message" for="experience">
        Please describe your experience
      </span>
    </div>
  </div>
</div>

```
<div class="sk-text-area sk-w-full sk-ph-6 is-invalid">
  <label for="experience">Please describe your experience</label>
  <textarea type="text" id="experience" name="experience" class="sk-w-full"></textarea>
  <span class="sk-error-message" for="experience">
    Please describe your experience
  </span>
</div>
```
