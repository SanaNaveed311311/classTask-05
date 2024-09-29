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
    