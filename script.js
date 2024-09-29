function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (dob === "") {
        alert("Please select your date of birth!");
        return;
    }
    
    let dobDate = new Date(dob);
    let now = new Date();
    
    let years = now.getFullYear() - dobDate.getFullYear();
    let months = now.getMonth() - dobDate.getMonth();
    let days = now.getDate() - dobDate.getDate();
    
    if (days < 0) {
        months--;
        let previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += previousMonth;
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }

    // Update the HTML with the result
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
}

