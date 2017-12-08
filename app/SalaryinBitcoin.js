import $ from 'jquery';

const url =
"https://jobs.search.gov/jobs/search.json?";
console.log($('#jobs-form'));

export const jobFormHandler = ()=> {
$('#jobs-form').submit((event) => {
  event.preventDefault();
  const query = $('#job-query').val();
  let rate = $("#one-coin").text();
  console.log('original rate', rate);
  rate = Number(rate);
  $.getJSON(url, {
    query
  }).then(data => {
    console.log(data);
    console.log("Hello");
    $('.salary-results').html("");
    //get data back form the api, and loop through the items in the response, and get stored in the job var, and appending the html
    for (const job of data.splice(0,5)) {
      console.log('rate', rate, job.maximum);
      $('.salary-results').append(`<p><div class="job-listing-output"><a href="${job.url}">
      <div class="Position-Title">${job.position_title}</div></a>
      <p class="max-salary">
      <h5>Max. Salary:$${job.maximum}
      </h5>
      </p> <p class="salary-over-bitcoin">
      </h5>This Salary Equals:${SalarydividedbyBitcoin(rate,job.maximum)}
      BTC</h5>
      </p>
      </p>`);
      //create a div to add a link to the posting href=job.url?
    }
    // Marius Banea no catch error in promise
  });
})
};
function SalarydividedbyBitcoin(rate, maximum) {
  //trying to reduce output of salary/btc to 4 decimal places, parseFloat?
  var roundedBTC = parseInt(maximum);
  console.log(roundedBTC);

  let salaryResults = roundedBTC / rate ;
  //to return a float of ten-thousandths .0001?
  return salaryResults.toFixed(4);
  
}
