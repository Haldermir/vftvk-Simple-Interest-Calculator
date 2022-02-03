// let principal = 0;
// let rate = 0;
// let years = 0;
// let interest = 0;

// Renaming main function to describe it's action in the text
function computeResults()
{
    // main function for the app, calculates the amount of interest produced for the span
    let principal = document.getElementById("principal").value;
    console.log("Principal: " + principal.toString());
    let rate = document.getElementById("rate").value;
    console.log("Rate: " + rate.toString());
    let years = document.getElementById("years").value;
    console.log("Years: " + years.toString())
    // Confirms the user has provided a positive value into the amount field
    if (principal > 0)
    {
        // Calculating responses to report back
        let interest = (principal * years * rate)/100
        console.log("Interest: " + interest.toString())
        
        let year = new Date().getFullYear()+parseInt(years);
        console.log("New year: " + year.toString());
        
        let result_text = "If you deposit " + principal + "<br> at an interset rate of " + rate + "%<br>you will receive an amount of " + interest + "<br> in the year " + year;
        document.getElementById("results").innerHTML = result_text;
    } else {
        alert("Please enter a positive number")
    }
};
   
// Updates the rate string for user to select
function updateRate()
{
    let rateval = document.getElementById("rate").value;
    console.log(rateval);
    document.getElementById("rate_val").innerText=rateval.toString() + "%";
};

// Generates a first alert if the user has entered the wrong value 
function validPrincipal(){
    let principal = document.getElementById('principal').value;
    if (principal < 1)
    {
        alert('Enter a positive number')
    }
};
