---
id: text-inputs
title: Text inputs
---

Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.

## Text input with label

<div class="component-example">
  <div class="component-example__content sk-block">
    <div class="sk-text-input">
      <label for="first-name">What's your first name?</label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        placeholder="Enter your first name"
        class="sk-char-width-20"
      ></input>
    </div>
  </div>
</div>

```
<div class="sk-text-input">
  <label for="first-name">What's your first name?</label>
  <input
    type="text"
    id="first-name"
    name="first-name"
    placeholder="Enter your first name"
    class="sk-char-width-20"
  ></input>
</div>
```

## Text input with label (validation)

<div class="component-example">
  <div class="component-example__content sk-block">
    <div class="sk-text-input is-invalid">
      <label for="first-name">What's your first name?</label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        placeholder="Enter your first name"
        class="sk-char-width-20"
      ></input>
      <span class="sk-error-message" for="first-name">
        Please enter your first name
      </span>
    </div>
  </div>
</div>

```
<div class="sk-text-input is-invalid">
  <label for="first-name">What's your first name?</label>
  <input
    type="text"
    id="first-name"
    name="first-name"
    placeholder="Enter your first name"
    class="sk-char-width-20"
  ></input>
  <span class="error-message" for="first-name">
    Please enter your first name
  </span>
</div>
```

## Custom width text inputs

<div class="component-example">
  <div class="component-example__content sk-block">
    <div class="sk-text-input">
      <label for="2-char">2 character width</label>
      <input type="text" id="2-char" name="2-char" class="sk-char-width-2"></input>
    </div>
    <div class="sk-text-input">
      <label for="4-char">4 character width</label>
      <input type="text" id="4-char" name="4-char" class="sk-char-width-4"></input>
    </div>
    <div class="sk-text-input">
      <label for="8-char">8 character width</label>
      <input type="text" id="8-char" name="8-char" class="sk-char-width-8"></input>
    </div>
    <div class="sk-text-input">
      <label for="20-char">20 character width</label>
      <input type="text" id="20-char" name="20-char" class="sk-char-width-20"></input>
    </div>
  </div>
</div>

```
<div class="sk-text-input">
<label for="2-char">2 character width</label>
<input type="text" id="2-char" name="2-char" class="sk-char-width-2"></input>
</div>

<div class="sk-text-input">
<label for="4-char">4 character width</label>
<input type="text" id="4-char" name="4-char" class="sk-char-width-4"></input>
</div>

<div class="sk-text-input">
<label for="8-char">8 character width</label>
<input type="text" id="8-char" name="8-char" class="sk-char-width-8"></input>
</div>

<div class="sk-text-input">
<label for="20-char">20 character width</label>
<input type="text" id="20-char" name="20-char" class="sk-char-width-20"></input>
</div>
```
