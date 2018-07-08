//script to create the chart
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    responsive:true,

    // The data for our dataset
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: "My Progress",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            label: "Weekly Goal",
            backgroundColor: 'rgb(125, 99, 132)',
            borderColor: 'rgb(122, 99, 132)',
            //fill: 'false',
            data: [70, 70, 70, 70, 70, 70, 70],
        }]
    },

    // Configuration options go here
    options: {}
});
