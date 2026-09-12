```javascript
const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const infoId = button.getAttribute("aria-controls");
        const info = document.getElementById(infoId);

        const isExpanded =
            button.getAttribute("aria-expanded") === "true";


        if (!isExpanded) {

            // Expandir

            info.hidden = false;

            button.setAttribute("aria-expanded", "true");

            button.textContent = "Reducir";

        } else {

            // Reducir

            info.hidden = true;

            button.setAttribute("aria-expanded", "false");

            button.textContent = "Expandir";

        }

    });

});
```
