---
id: checkboxes
title: Checkboxes
---

Let users select one or more options by using the checkboxes component.

## Checkbox options

<div class="component-example">
  <div class="component-example__content">
    <fieldset class="sk-fieldset">
      <legend class="sk-input-label">Which takeouts do you enjoy?</legend>
      <div class="sk-checkbox">
        <input type="checkbox" name="option" id="checkbox1" />
        <label for="checkbox1" class="sk-checkbox__label">
          Pizza
        </label>
      </div>
      <div class="sk-checkbox">
        <input type="checkbox" name="option" id="checkbox2" />
        <label for="checkbox2" class="sk-checkbox__label">
          Tacos
        </label>
      </div>
      <div class="sk-checkbox">
        <input type="checkbox" name="option" id="checkbox3" />
        <label for="checkbox3" class="sk-checkbox__label">
          Sushi
        </label>
      </div>
    </fieldset>
  </div>
</div>

```
<fieldset class="sk-fieldset">
  <legend class="sk-input-label">Which takeouts do you enjoy?</legend>

  <div class="sk-checkbox">
    <input type="checkbox" name="option" id="checkbox1" />
    <label for="checkbox1" class="sk-checkbox__label">
      Pizza
    </label>
  </div>

  <div class="sk-checkbox">
    <input type="checkbox" name="option" id="checkbox2" />
    <label for="checkbox2" class="sk-checkbox__label">
      Tacos
    </label>
  </div>

  <div class="sk-checkbox">
    <input type="checkbox" name="option" id="checkbox3" />
    <label for="checkbox3" class="sk-checkbox__label">
      Sushi
    </label>
  </div>
</fieldset>
```

## Checkbox options (validation)

<div class="component-example">
  <div class="component-example__content">
    <fieldset class="sk-fieldset is-invalid">
      <legend class="sk-input-label">Which takeouts do you enjoy?</legend>
      <div class="sk-checkbox">
        <input type="checkbox" name="option" id="checkbox1" />
        <label for="checkbox1" class="sk-checkbox__label">
          Pizza
        </label>
      </div>
      <div class="sk-checkbox">
        <input type="checkbox" name="option" id="checkbox2" />
        <label for="checkbox2" class="sk-checkbox__label">
          Tacos
        </label>
      </div>
      <div class="sk-checkbox">
        <input type="checkbox" name="option" id="checkbox3" />
        <label for="checkbox3" class="sk-checkbox__label">
          Sushi
        </label>
      </div>
      <span class="error-message">Please select an option</span>
    </fieldset>
  </div>
</div>

```
<fieldset class="sk-fieldset is-invalid">
  <legend class="sk-input-label">Which takeouts do you enjoy?</legend>
  <div class="sk-checkbox">
    <input type="checkbox" name="option" id="checkbox1" />
    <label for="checkbox1" class="sk-checkbox__label">
      Pizza
    </label>
  </div>
  <div class="sk-checkbox">
    <input type="checkbox" name="option" id="checkbox2" />
    <label for="checkbox2" class="sk-checkbox__label">
      Tacos
    </label>
  </div>
  <div class="sk-checkbox">
    <input type="checkbox" name="option" id="checkbox3" />
    <label for="checkbox3" class="sk-checkbox__label">
      Sushi
    </label>
  </div>
  <span class="error-message">Please select an option</span>
</fieldset>
```
