/*
adding eventlistener to all inputs
*/
const inputs = document.querySelectorAll("input");
inputs.forEach(input => input.addEventListener("input", () => updateResult()));

function updateResult() {
    const matricT = parseFloat(document.getElementById("matric-t").value);
    const matricO = parseFloat(document.getElementById("matric-o").value);
    const fscT = parseFloat(document.getElementById("fsc-t").value);
    const fscO = parseFloat(document.getElementById("fsc-o").value);
    const testT = parseFloat(document.getElementById("test-t").value);
    const testO = parseFloat(document.getElementById("test-o").value);
    const resultDiv = document.getElementById("result");
    let result = 0;

    function updateRing(res) {
        const updateProgress = `conic-gradient(#113a9a 0% ${res}%, #dbe6fa ${res}% 100%)`;
        resultDiv.style.background = updateProgress;
    }

    if (!isNaN(matricT) && !isNaN(matricO) && matricT!=0 && matricT>=matricO) {
        result += (matricO/matricT) * 17;
        resultDiv.innerText = result.toFixed(2);
        updateRing(result);
    }

    if (!isNaN(fscT) && !isNaN(fscO) && fscT!=0 && fscT>=fscO) {
        result += (fscO/fscT) * 33;
        resultDiv.innerText = result.toFixed(2);
        updateRing(result);
    }

    if (!isNaN(testT) && !isNaN(testO) && testT!=0 && testT>=testO) {
        result += (testO/testT) * 50;
        resultDiv.innerText = result.toFixed(2);
        updateRing(result);
    }

    if ((isNaN(matricO) || isNaN(matricT) || matricT<matricO) && (isNaN(fscT) 
        || isNaN(fscO) || fscT<fscO) && (isNaN(testT) || isNaN(testO) || testT<testO)) {
            result = 0;
            resultDiv.innerText = "00.00";
            updateRing(0);
    }
}
