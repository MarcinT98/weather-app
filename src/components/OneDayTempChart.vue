<script>
import { Line } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Line,
  props: ["selectedCity"],
  data() {
    return {
      options: { responsive: true, maintainAspectRatio: false },
      chartData: {
        labels: [
          "00:00",
          "01:00",
          "02:00",
          "03:00",
          "04:00",
          "05:00",
          "06:00",
          "07:00",
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00",
        ],
        datasets: [
          {
            label: this.selectedCity,
            backgroundColor: "#f87979",
            data: [],
            borderColor: "#17A2B8",
            pointBorderColor: "#17A2B8",
            pointBackgroundColor: "#17A2B8",
            pointHoverBackgroundColor: "#17A2B8",
            pointHoverBorderColor: "#17A2B8",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
          },
        ],
      },
    };
  },
  mounted() {
    this.fetchTemperatures();
  },
  methods: {
    fetchTemperatures: function () {
      axios
        .get(`https://my.api.mockaroo.com/temp.json?key=0892f560`)
        .then((response) => {
          this.chartData.datasets[0].data = response.data.map(
            (x) => x.Temperature
          );
          this.chartData.datasets[0].label = this.selectedCity;
          this.renderChart(this.chartData, this.options);
        });
    },
  },
  watch: {
    selectedCity: function () {
      this.fetchTemperatures();
    },
  },
};
</script>