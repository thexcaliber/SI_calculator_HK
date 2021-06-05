// Shows value of the rate slider

function show_value(x) {
    document.getElementById("rate_val").innerHTML = x + "%";
}

// Compute function for satisfying all the give conditions and calculating the SI.



function compute() {
    var Amt = document.getElementById("principal").value;
    var Rate = document.getElementById("rate").value;
    var Time = document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(Time);
    var interest = (parseInt(Amt) + ((Amt * Rate * Time) / 100));

    if (Amt > 0) {
        document.getElementById("result").innerHTML = "If you deposit <b>" + Amt + "</b> at an interest rate of <b>" + Rate + "%</b> You will receive an amount of <b>" + interest + "</b> in the year <b>" + year + "</b>";
    } else {
        alert("Please enter Positive Value for Amount.")
        document.getElementById("principal").focus()
    }

}
