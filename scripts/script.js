console.log("reached");
fetch('https://api.covidactnow.org/v2/states.json?apiKey=b7bb558680814415ab1ad12b80589552')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

