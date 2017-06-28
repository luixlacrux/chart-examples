var options = {
  title: {
    display: true,
    text: 'Conversaciones'
  },
  elements: {
    line: {
      tension: 0
    }
  }
}


const lineChart = new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      datasets: [
        {
          label: '# of conversaciones',
          data: [15, 40, 35, 76],
          backgroundColor: 'rgba(255, 231, 96, 0.6)',
          borderColor: 'rgba(224, 173, 7, 1)',
          borderWidth: 1
        }
      ]
  },
  options: options
});
