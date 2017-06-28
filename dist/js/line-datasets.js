const lineDatasets = new Chart(document.getElementById("line-datasets"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10],
    datasets: [
      {
        data: [10,15,7,6,7,1,3,2,7,8],
        backgroundColor: "#C500E1",
        borderWidth: 0,
        fill: undefined
      },
      {
        data: [20,22,12,12,16,11,17,22,23,25],
        backgroundColor: "#FF4A62",
        borderWidth: 0,
        fill: "-1"
      },
      {
        data: [30,28,29,25,25,26,23,30,31,35],
        backgroundColor: "#65F9D7",
        borderWidth: 0,
        fill: 1
      },
      {
        data: [35,34,36,36,37,41,33,32,33,38],
        backgroundColor: "#5D7FFB",
        borderWidth: 0,
        fill: "-1"
      },
      {
        data: [38,40,42,41,43,45,39,38,38,42],
        backgroundColor: "#FCEE6D",
        borderWidth: 0,
        fill: "-1"
      }
    ]
  },
  options: {
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    },
    elements: {
      line: {
        tension: 0
      }
    },
    title: {
      display: true,
      text: 'Calificacion en el tiempo'
    }
  }
});
