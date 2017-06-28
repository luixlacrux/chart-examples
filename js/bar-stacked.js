const colors = {
  red: '#FF4A62',
  yellow: '#FCEE6D',
  blue: '#5D7FFB'
}

const barChartData = {
  labels: ["Intencion 1", "Intencion 2", "Intencion 3", "Intencion 4"],
  datasets: [
    {
      label: "Mala",
      backgroundColor: colors.red,
      data: [40, 40, 30, 10]
    },
    {
      label: "Regular",
      backgroundColor: colors.yellow,
      data: [40, 30, 20, 10]
    },
    {
      label: "Buena",
      backgroundColor: colors.blue,
      data: [20, 15, 50, 50]
    }
  ]
}

const barStacked = new Chart(document.getElementById("bar-stacked"), {
    type: 'bar',
    data: barChartData,
    options: {
        title:{
            display: true,
            text: "Calificacion por intencion"
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});
