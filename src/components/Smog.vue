<template>
  <div id="test">
    <h1>Zanieczyszczenie powietrza</h1>
    <br />
    <br />
    <table v-show="false" class="table table-striped text-white">
      <thead>
        <th>Miasto</th>
        <th>PM10</th>
        <th>PM2.5</th>
        <th>PM1</th>

        <th></th>
        <th></th>
      </thead>
      <tbody id="show">
        <tr v-for="element in info" v-bind:key="element">
          <td>{{ element.City }}</td>
          <td>{{ element.PM10 }} µg/m³</td>
          <td>{{ element.PM25 }} µg/m³</td>
          <td>{{ element.PM1 }} µg/m³</td>
        </tr>
      </tbody>
    </table>
    <h1>PM10 µg/m³</h1>
    <column-chart :data="chartData"></column-chart>
    <br />
    <h1>PM2.5 µg/m³</h1>
    <column-chart :data="chartData1"></column-chart>
    <br />
    <h1>PM1 µg/m³</h1>
    <column-chart :data="chartData2"></column-chart>
  </div>
</template>
<script src="//cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue.min.js"></script>
<script src="//unpkg.com/vue-chartjs@2.6.0/dist/vue-chartjs.full.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js"></script>
<script src="//unpkg.com/hchs-vue-charts@1.2.8"></script>
<script>
import axios from "axios";
import { ApiKey1 } from "../main";
export default {
  data() {
    return {
      error: null,
      info: [],
      chartData: {},
      chartData1: {},
      chartData2: {},
    };
  },
  methods: {
    getData() {
      axios
        .get("https://my.api.mockaroo.com/smog1.json?key=" + ApiKey1)
        //axios.get('https://607c6ec567e653001757407d.mockapi.io/Cities')
        .then((response) => {
          this.info = response.data;
          var obj1 = '{ "';
          var obj2 = '{ "';
          var obj3 = '{ "';
          response.data.forEach((element) => {
            obj1 += element.City + '" : ' + element.PM10 + ', "';
            obj2 += element.City + '" : ' + element.PM25 + ', "';
            obj3 += element.City + '" : ' + element.PM1 + ', "';
          });
          obj1 = obj1.slice(0, -3);
          obj1 += "}";
          obj2 = obj2.slice(0, -3);
          obj2 += "}";
          obj3 = obj3.slice(0, -3);
          obj3 += "}";

          this.chartData = JSON.parse(obj1);
          this.chartData1 = JSON.parse(obj2);
          this.chartData2 = JSON.parse(obj3);
        });
    },
  },
  beforeMount() {
    this.getData();
  },
};
</script>
