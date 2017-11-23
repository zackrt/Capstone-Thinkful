const url =
"https://api.usa.gov/jobs/search.json";

$(document).ready(() => {
$('#jobs').click(() => {
  const query = $('input').val();
  $.getJSON(url, {
    query
  }).then(data => {
    console.log(data);
    var govSalary = data;
    for (const job of data) {
      $('salary-results').html(`${job.position_title} ${job.maximum}`);
    }
    RenderJobs(data);
  });
})
});

function RenderJobs(){
        return `
        <div>
            <h2>With this Salary, you can acquire this many Bitcoin:
            </h2>
           
        </div>
    `
};