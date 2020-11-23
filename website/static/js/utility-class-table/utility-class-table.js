document.addEventListener("DOMContentLoaded", () => {
  const outputJSON = "/js/utility-class-table/output.json";
  const request = new XMLHttpRequest();
  request.open("GET", outputJSON);
  request.responseType = "json";
  request.send();
  request.onload = function() {
    const output = request.response;
    const classes = Object.entries(output.children);

    classes.forEach(function(cssClass) {
      const tableBody = document.querySelector(".utility-table-body");

      // To get only utility classes
      // 1) check if the class has 2 or less attributes
      // 2) starts with ".sk"
      // 3) Only show classes where the attributes contains !important
      if (
        Object.keys(cssClass[1].attributes).length < 3 &&
        cssClass[0].startsWith(".sk") &&
        Object.values(cssClass[1].attributes)[0].includes("!important")
      ) {
        // create a new row at the bottom of the table
        const tableRow = document.createElement("tr");

        tableBody.appendChild(tableRow);

        // create a column in that row for class name
        const classCol = document.createElement("td");
        classCol.className = "sk-ph-0";
        // get the classname
        const className = cssClass[0];

        // put the class name in the row
        classCol.innerText = className;
        classCol.className = "sk-bold";
        tableRow.append(classCol);

        // create a column for attributes
        const attrCol = document.createElement("td");
        attrCol.className = "sk-ph-0";
        // put it at the end of the row
        tableRow.append(attrCol);

        // loop through all attributes per class
        Object.keys(cssClass[1].attributes).forEach(function(attribute) {
          // add a new row for each attribute
          const newRow = document.createElement("tr");
          newRow.className = "sk-bg-inherit";
          attrCol.appendChild(newRow);

          // add an attribute name column
          const attrNameCol = document.createElement("td");
          attrNameCol.className = "sk-b-0 sk-pv-2 sk-bold sk-pr-0";
          attrNameCol.innerText = `${attribute}:`;

          newRow.appendChild(attrNameCol);
          const attrValueCol = document.createElement("td");

          // add a attribute value column;
          attrValueCol.className = "sk-b-0 sk-pv-2";
          attrValueCol.innerText = cssClass[1].attributes[attribute];
          newRow.appendChild(attrValueCol);
        });
      }
    });

    // table filter function
    const filter = document.querySelector(".sk-table-filter-input");
    const table = document.querySelector(".sk-table-component");
    const body = table.querySelector("tbody");
    const bodyRows = body.querySelectorAll("tbody > tr");
    filter.addEventListener("input", event => {
      const query = event.target.value.toLowerCase();
      bodyRows.forEach(row => {
        let rowText = row.innerText.toLowerCase();
        if (rowText.indexOf(query) > -1) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  };
});
