<template>
    <section>
        <div class="center flexBlock">
            <table>
                <tr>
                    <th>#</th>
                    <th>Miasto</th>
                    <th>Data</th>
                    <th>Alarm</th>
                </tr>
                <tr v-for="alert in alerts" :key="alert">
                    <td>{{alert.id}}</td>
                    <td>{{alert.city}}</td>
                    <td>{{alert.date}}</td>
                    <td>{{alert.alert}}</td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
  name: 'Alerts',
  data(){
      return{
          alerts: [],
          loaded: false,
      };
  },
  mounted(){
      axios
        .get(`https://607d34d7184368001769d1b1.mockapi.io/alerts`)
        .then((response) => {
            this.loaded = true;
            this.alerts = response.data;
        });
    }
}
</script>

<style scoped>
.center{
	margin: 0 auto;
	max-width: 1200px;
	padding: 0 30px;
    margin-bottom: 50px;
}
.flexBlock{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
table{
    width: 1000px;
    margin: 0 auto;
}
th, td{
    padding: 20px;
}
table {
  border-collapse: collapse;
}
tr {
  border-bottom: 1pt solid #15202B;
}
</style>