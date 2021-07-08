function compute() {
    {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    }

        function updateRate() 
    {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    }

if (int === "si") {
    var sip = (p * r * t) / 100
    var ta = p + sip
    document.getElementById("i").innerHTML = sip;
    document.getElementById("a").innerHTML = ta;
  } else {
    var cta = p * (Math.pow((1 + r / 100), t))
    var cmp = cta - p
    document.getElementById("i").innerHTML = cmp;
    document.getElementById("a").innerHTML = cta;
  }
}
