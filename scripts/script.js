const request = new XMLHttpRequest();
var stateUrl = "https://api.covidactnow.org/v2/state/";
var countyUrl = "https://api.covidactnow.org/v2/county/";
var cbsaUrl = "https://api.covidactnow.org/v2/cbsa/";

var apiKey = "b7bb558680814415ab1ad12b80589552"; // Put your API Key here
var state = "MA"; // Massachusetts
var fips = "25025"; // FIPS code is 25 but google says this
var cbsa = "14460"; // CBSA – Suffolk County

var requestStateUrl = stateUrl + state + ".json?apiKey=" + apiKey;
var requestCountyUrl = countyUrl + fips + ".json?apiKey=" + apiKey;
var requestCbsaUrl = cbsaUrl + cbsa + ".json?apiKey=" + apiKey;
request.addEventListener("load", reqListener);
// Request API call, choose one of the three above (county, state, cbsa)
request.open("GET", requestCountyUrl); // change requestStateUrl to one of the three
request.send();

// request.onload = (e) => {
//     console.log (request.response);
//     const JSONData = request.response;
//     const covidData = JSON.parse(JSONData);

//     // Here we are appending data of covidData to a div tag 'cases' using jQuery.
//     // follow the same format for other fields, so change '#cases' to '#deaths', etc...
//     $("#cases").append("<b>" + covidData.actuals.cases + "</b>");
//     $("#deaths").append("<b>" + covidData.actuals.deaths + "</b>");
//     $("#poscov").append("<b>" + covidData.actuals.positiveTests + "</b>");
//     // write whatever else you need
// }

function reqListener () {
    console.log(this.responseText);
    const JSONData = request.response;
    const covidData = JSON.parse(JSONData);
    $("#cases").append("<b>" + covidData.actuals.cases + "</b>");
    $("#deaths").append("<b>" + covidData.actuals.deaths + "</b>");
    $("#vaccomp").append("<b>" + covidData.actuals.vaccinationsCompleted + "</b>");
    getTime();
}

function getTime(){

        let [month, date, year]= new Date().toLocaleDateString("en-US").split("/");
        $("#date").append("<b>" + month+"-"+date+"-"+year+ "</b>");
        let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
        $("#date").append("<b>" + " " + hour+":"+minute+":"+second+ "</b>");
        console.log(month,date,year,hour, minute, second);   
    
     }
    
    
//   var oReq = new XMLHttpRequest();
//   request.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();


// setInterval(function(){
//     var date = new Date();
//     var format = "DD-MMM-YYYY";
//     dateConvert(date,format)
//   }, 1000);

