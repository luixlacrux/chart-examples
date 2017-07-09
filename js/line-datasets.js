const data = [
  {
    fecha: "2017-06-13",
    calificacion: 0,
    cuenta: 26
  },
  {
    fecha: "2017-06-13",
    calificacion: 1,
    cuenta: 26
  },
  {
    fecha: "2017-06-20",
    calificacion: 1,
    cuenta: 2
  },
  {
    fecha: "2017-06-20",
    calificacion: 0,
    cuenta: 3
  },
  {
    fecha: "2017-06-21",
    calificacion: 1,
    cuenta: 3
  },
  {
    fecha: "2017-06-21",
    calificacion: 0,
    cuenta: 1
  },
  {
    fecha: "2017-06-22",
    calificacion: 1,
    cuenta: 11
  },
  {
    fecha: "2017-06-27",
    calificacion: 0,
    cuenta: 27
  },
  {
    fecha: "2017-06-27",
    calificacion: 1,
    cuenta: 34
  },
  {
    fecha: "2017-06-28",
    calificacion: 0,
    cuenta: 15
  },
  {
    fecha: "2017-06-28",
    calificacion: 1,
    cuenta: 16
  },
  {
    fecha: "2017-06-29",
    calificacion: 0,
    cuenta: 56
  },
  {
    fecha: "2017-06-29",
    calificacion: 1,
    cuenta: 72
  }
]

const filterBy = ({ list, value, listGood, listBad }) => {
  return list.map(date => {
    const filterGood = listGood.filter(({ fecha }) => fecha === date)
    const filterBad = listBad.filter(({ fecha }) => fecha === date)
    const values = {
      good: filterGood.length > 0 ? filterGood[0].cuenta : 0,
      bad: filterBad.length > 0 ? filterBad[0].cuenta : 0,
    }

    const percentage = 100 / (values.good + values.bad) * values[value]
    return percentage.toFixed(1)
  })
}

const labels = data
  .map(item => item.fecha)
  .filter((item, i, a) => a.indexOf(item, i+1) < 0)

const listGood = data.filter(item => item.calificacion > 0)
const listBad = data.filter(item => item.calificacion === 0)

const lineDatasets = new Chart(document.getElementById("line-datasets"), {
  type: 'line',
  data: {
  labels: labels,
  datasets: [
    {
      data: filterBy({ list: labels, value: 'good', listGood, listBad }),
      backgroundColor: "#2196F3",
      borderWidth: 0,
      label: 'Buena'
    },
    {
      data: filterBy({ list: labels, value: 'bad', listGood, listBad }),
      backgroundColor: "#E91E63",
      borderWidth: 0,
      label: 'Mala'
    }
  ]
  },
  options: {
    tooltips: {
        callbacks: {
           label: (tooltipItem, data) => {
             const label = data.datasets[tooltipItem.datasetIndex].label
             return `${label} ${tooltipItem.yLabel}%`
           }
        }
    },
    scales: {
      yAxes: [{
        stacked: true,
        ticks: {
          min: 0,
          max: 100,
          callback: value => `${value}%`
        },
        scaleLabel: {
          display: false,
          labelString: "Percentage"
        }
      }]
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
