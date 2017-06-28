const barChartData2 = {
  labels: ["Entidad 1", "Entidad 2", "Entidad 3", "Entidad 4"],
  datasets: [
    {
      label: "Mala",
      backgroundColor: colors.red,
      data: [30, 14, 28, 45]
    },
    {
      label: "Regular",
      backgroundColor: colors.yellow,
      data: [50, 23, 29, 20]
    },
    {
      label: "Buena",
      backgroundColor: colors.blue,
      data: [20, 15, 20, 10]
    }
  ]
}

const barStacked2 = new Chart(document.getElementById("bar-stacked-2"), {
    type: 'bar',
    data: barChartData2,
    options: {
        title:{
            display: true,
            text: "Calificacion por entidad"
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
