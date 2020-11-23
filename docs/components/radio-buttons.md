---
id: radio-buttons
title: Radio buttons
---

Radio buttons are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice.

## Radio options

<div class="component-example">
  <div class="component-example__content">
    <fieldset class="sk-fieldset">
      <legend class="sk-input-label">Do you have any pets?</legend>
      <div class="sk-radio">
        <input type="radio" name="option" id="option1" />
        <label for="option1" class="sk-radio__label">
          Yes
        </label>
      </div>
      <div class="sk-radio">
        <input type="radio" name="option" id="option2" />
        <label for="option2" class="sk-radio__label">
          No
        </label>
      </div>
    </fieldset>
  </div>
</div>

```
<fieldset class="sk-fieldset">
  <legend class="sk-input-label">Do you have any pets?</legend>

  <div class="sk-radio">
    <input type="radio" name="option" id="option1" />
    <label for="option1" class="sk-radio__label">
      Yes
    </label>
  </div>

  <div class="sk-radio">
    <input type="radio" name="option" id="option2" />
    <label for="option2" class="sk-radio__label">
      No
    </label>
  </div>
</fieldset>
```

## Radio options (validation)

<div class="component-example">
  <div class="component-example__content">
    <fieldset class="sk-fieldset is-invalid">
      <legend class="sk-input-label">Do you have any pets?</legend>
      <div class="sk-radio">
        <input type="radio" name="option" id="option1" />
        <label for="option1" class="sk-radio__label">
          Yes
        </label>
      </div>
      <div class="sk-radio">
        <input type="radio" name="option" id="option2" />
        <label for="option2" class="sk-radio__label">
          No
        </label>
      </div>
      <span class="error-message">Please select an option</span>
    </fieldset>
  </div>
</div>

```
<fieldset class="sk-fieldset is-invalid">
  <legend class="sk-input-label">Do you have any pets?</legend>
  <div class="sk-radio">
    <input type="radio" name="option" id="option1" />
    <label for="option1" class="sk-radio__label">
      Yes
    </label>
  </div>
  <div class="sk-radio">
    <input type="radio" name="option" id="option2" />
    <label for="option2" class="sk-radio__label">
      No
    </label>
  </div>
  <span class="error-message">Please select an option</span>
</fieldset>
```
