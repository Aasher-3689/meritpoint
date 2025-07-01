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
    const data = Object.fromEntries(formData.entries());

    loader.style.display = "block";

    const request = await fetch("https://script.google.com/macros/s/AKfycbzWtmg3h_VbNGdsmMRBt5M_SCghp48Unm6pwD5zKwzvOGY8hTj0uyxT6Kx8CBW7xDCEBQ/exec",
                                {method: "POST",
                                 header: {"Content-Type": "application/json"},
                                 body: JSON.stringify(data)}
    );

    const response = await request.text();
    loader.style.display = "none";

    if (response === "200") {
        form.innerHTML = updateFormOk;
    } else {
        form.innerHTML = updateFormBad;
    }
});