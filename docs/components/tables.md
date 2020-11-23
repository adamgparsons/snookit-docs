---
id: tables
title: Tables
---

Tables are a good way to present large amounts of complex information when the user needs to compare different things or or interrogate that information.

## Table

<div class="component-example">
  <div class="component-example__content sk-mw-full sk-ph-5">
    <table class="sk-table-component">
      <thead>
        <tr>
          <th>Animal type</th>
          <th>Name</th>
          <th class="sk-text-align-center">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Animal type">Dog</td>
          <td data-label="Name">Roxy</td>
          <td data-label="Age" class="sk-text-align-center">
            8
          </td>
        </tr>
        <tr>
          <td data-label="Animal type">Cat</td>
          <td data-label="Name">Riccardo</td>
          <td data-label="Age" class="sk-text-align-center">
            12
          </td>
        </tr>
        <tr>
          <td data-label="Animal type">Fox</td>
          <td data-label="Name">Collin</td>
          <td data-label="Age" class="sk-text-align-center">
            2
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```
<table class="sk-table-component">
  <thead>
    <tr>
      <th>Animal type</th>
      <th>Name</th>
      <th class="sk-text-align-center">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Animal type">Dog</td>
      <td data-label="Name">Roxy</td>
      <td data-label="Age" class="sk-text-align-center">
        8
      </td>
    </tr>
    <tr>
      <td data-label="Animal type">Cat</td>
      <td data-label="Name">Riccardo</td>
      <td data-label="Age" class="sk-text-align-center">
        12
      </td>
    </tr>
    <tr>
      <td data-label="Animal type">Fox</td>
      <td data-label="Name">Collin</td>
      <td data-label="Age" class="sk-text-align-center">
        2
      </td>
    </tr>
  </tbody>
</table>
```