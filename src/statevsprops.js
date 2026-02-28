import { startTransition } from "react";

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // Create Heading
    const heading = document.createElement("h2");
    heading.innerText = "Difference Between State and Props";
    heading.style.textAlign = "center";
    document.body.appendChild(heading);

    // Create Table
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.marginTop = "20px";
    table.border = "1";

    // Table Data
    const data = [
        ["Feature", "State", "Props"],
        ["Definition",
            "Data managed within a component that can change over time.",
            "Data passed into a component from its parent."
        ],
        ["Mutability",
            "Mutable (can be changed).",
            "Immutable (read-only inside child component)."
        ],
        ["Ownership",
            "Owned and managed by the component itself.",
            "Owned by the parent component and passed down."
        ],
        ["Update",
            "Updated using useState() or setState().",
            "Cannot be modified by child component."
        ],
        ["Usage",
            "Used for dynamic UI updates and user input.",
            "Used to pass data and event handlers to child components."
        ]
    ];

    // Create Rows
    data.forEach((rowData, index) => {
        const row = document.createElement("tr");

        rowData.forEach(cellData => {
            const cell = document.createElement(index === 0 ? "th" : "td");
            cell.innerText = cellData;
            cell.style.padding = "10px";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    // Add Table to Page
    document.body.appendChild(table);
});