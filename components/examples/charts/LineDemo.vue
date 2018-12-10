<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  data: function() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Data One",
            fill: false,
            borderColor: "#20a0ff",
            backgroundColor: "#20a0ff",
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: "Data Two",
            fill: false,
            borderColor: "#f87979",
            backgroundColor: "#f87979",
            data: [37, 14, 49, 28, 92, 58, 51]
          }
        ]
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, {
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            const item = data.datasets[tooltipItem.datasetIndex];
            const desc = item.data[tooltipItem.index];
            return "Data is: " + desc;
          }
        }
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: true,
              drawTicks: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              drawTicks: false
            }
          }
        ]
      }
    });
  }
};
</script>
