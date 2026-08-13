const updateFormOk = `<div>
                        <h2>Your response has been recorded</h2>
                        <p>We appreciate your contribution to Meritpoint!</p>
                    </div>`;

const updateFormBad = `<div>
                         <h2>Something Went Wrong !!</h2>
                         <p>Try agian!</p>
                       </div>`;            

const loader = document.getElementById("loader");
/*##################################################################################*/


const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    loader.style.display = "block";

    try {
        const request = await fetch(
            "https://script.google.com/macros/s/AKfycbzWtmg3h_VbNGdsmMRBt5M_SCghp48Unm6pwD5zKwzvOGY8hTj0uyxT6Kx8CBW7xDCEBQ/exec",
            {
                method: "POST",
                body: formData
            }
        );

        const response = await request.text();

        if (response === "200") {
            form.innerHTML = updateFormOk;
        } else {
            form.innerHTML = updateFormBad;
        }

    } catch (error) {
        console.error("Error submitting form:", error);
        form.innerHTML = updateFormBad;

    } finally {
        loader.style.display = "none";
    }
});
