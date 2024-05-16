// Variables para el primer gráfico
const data = {
  labels: ['Nunca', 'A veces', 'Normalmente', 'Casi siempre', 'Siempre'],
  datasets: [{
      label: '¿Con qué frecuencia revisas tus redes sociales?',
      data: [11, 13, 12, 13, 11],
      backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
      ]
  }]
};

// Variables para el segundo gráfico
const data2 = {
  labels: ['Nunca', 'A veces', 'Normalmente', 'Casi siempre', 'Siempre'],
  datasets: [{
      label: 'Humanes',
      data: [5, 4, 7, 4, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
  }, {
      label: 'Getafe',
      data: [3, 3, 6, 8, 5],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data2,
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
};

// Variables del tercer gráfico
const data3 = {
  labels: ['Nunca', 'A veces', 'Normalmente', 'Casi Siempre', 'Siempre'],
  datasets: [{
      label: 'Mujeres',
      data: [0, 2, 8, 9, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      fill: true
  }, {
      label: 'Hombres',
      data: [0, 8, 8, 10, 7],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      fill: true
  }]
};

// Variables del cuarto gráfico
const data4 = {
  labels: ['Nunca', 'A veces', 'Normalmente', 'Casi siempre', 'Siempre'],
  datasets: [{
      label: 'Mujeres',
      data: [0, 0, 6, 10, 8],
      borderColor: 'rgb(75, 192, 192)',
      fill: false,
      tension: 0.1
  },{
    label: 'Hombres',
    data: [0, 0, 5, 13, 7],
    borderColor: 'rgb(75, 192, 192)',
    fill: false,
    tension: 0.1
}
]
};

// Inicialización del primer gráfico
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'polarArea',
  data: data,
  options: {}
});

// Inicialización del segundo gráfico
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, config);

// Inicialización del tercer gráfico
const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
  type: 'radar',
  data: data3,
  options: {}
});

// Inicialización del cuarto gráfico
const ctx4 = document.getElementById('myChart4').getContext('2d');
const myChart4 = new Chart(ctx4, {
  type: 'line',
  data: data4,
  options: {}
});

// Cargar y procesar el archivo JSON
fetch('datos.json')
  .then(response => response.json())
  .then(data => {
      // Obtener el cuerpo de la tabla
      const tbody = document.querySelector('#tabla tbody');

      // Iterar sobre los datos y agregar filas a la tabla
      data.forEach(item => {
          const fila = document.createElement('tr');
          fila.innerHTML = `
              <td>${item.Centro}</td>
              <td>${item.Grado}</td>
              <td>${item.Sexo}</td>
              <td>${item.Edad}</td>
              <td>${item['¿Con qué frecuencia revisas tus redes sociales?']}</td>
              <td>${item['¿Con que frecuencia compartes contenido en tus redes sociales?']}</td>
              <td>${item['¿Cuántas veces al día publicas en tus redes sociales?']}</td>
              <td>${item['¿Te sientes dependiente de tus redes sociales para mantenerte informado/a?']}</td>
              <td>${item['¿Experimentas ansiedad si pasas un día sin revisar tus redes sociales?']}</td>
          `;
          tbody.appendChild(fila);
      });
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

