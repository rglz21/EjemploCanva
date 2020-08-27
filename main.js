import { Product } from "./js/product.js";
import { Sale } from "./js/sale.js";

const sales = [];
const days = [
  { text: "Lunes", value: "Lunes" },
  { text: "Martes", value: "Martes" },
  { text: "Miercoles", value: "Miercoles" },
  { text: "Jueves", value: "Jueves" },
  { text: "Viernes", value: "Viernes" },
  { text: "Sabado", value: "Sabado" },
  { text: "Domingo", value: "Domingo" },
];

// DOM object references
const daysSelectRef = document.querySelector("#day");
const productNameInputRef = document.querySelector("#name");
const productPriceInputRef = document.querySelector("#price");
const submitBtnRef = document.querySelector("#submit");
const tableRef = document.querySelector("#salesRecord");
const tBodyRef = tableRef.querySelector("tbody");
const canvasRef = document.querySelector("#graph");
const context = canvasRef.getContext("2d");



// Creating Graph
const graph = new Chart(context, {
  type: "bar",
  data: {
    labels: [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ],
    datasets: [
      {
        label: "Ventas Diarias",
        data: [0, 0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,

      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// Setting select options
days.forEach((day) => {
  daysSelectRef.options.add(new Option(day.text, day.value));
});

// Adding Event Listeners
submitBtnRef.addEventListener("click", handleClickEvent);

/**
 * Handles click event
 * Calls methods to update table and graph
 * @param {Event} e
 */
function handleClickEvent(e) {
  e.preventDefault();

  addSale();
  addTableRow();
  computeDailySales();
}

function addSale() {
  const product = new Product(
    productNameInputRef.value,
    productPriceInputRef.value
  );
  const sale = new Sale(product, daysSelectRef.value);
  sales.push(sale);
}

function addTableRow() {
  tBodyRef.innerHTML = "";
  sales.forEach((sale) => {
    tBodyRef.innerHTML += `
      <tr>
        <th>${sale.day}</th>
        <th>${sale.product.name}</th>
        <th>${sale.product.price}</th>
      </tr>
    `;
  });
}

function computeDailySales() {
  const totalRevenuePerDay = [];
  let index = 0;
  days.forEach((day) => {
    let total = 0;
    sales.forEach((sale) => {
      if (sale.day === day.value) {
        total += Number(sale.product.price);
      }
    });
    totalRevenuePerDay[index] = total;
    index += 1;
  });
  updateGraph(totalRevenuePerDay);
}

function updateGraph(totalRevenuePerDay) {
  graph.data.datasets[0].data = totalRevenuePerDay;
  graph.update();
}
