<template>
    <div id="test">
        <form>
            
            <select v-model ="City">
                <option v-for="city in Cities" v-bind:key="city">{{city.City}}</option>
            </select>
        </form>
        <button v-on:click ="getData()">Szukaj</button> 
            <table class="table table-striped text-white" v-show=showChart>
        <thead>
        <tr>
            <th>{{info.city}}</th>
        </tr>
        <th>Date</th>
        <th> Temprature </th>
        <th> Rain </th>
        <th> Wind </th>

        <th></th>
        <th></th>
        </thead>
        <tbody id="show">
        <tr v-for="element in info" v-bind:key="element">
        <td>{{element.Date}} </td>
        <td>{{element.Temperature}} </td>
        <td>{{element.Rain}}</td>
        <td>{{element.Wind}}</td>

       
        </tr>
        </tbody>
        </table>
        <line-chart v-show="showChart" :data="chartData"></line-chart>    
    </div>

</template>
<script>
var showChart=new Boolean;

// import axios from 'axios';
// import{ApiKey1} from '../main';
import CitiesJson from '../components/Cities.json';
import Test from '../components/long.json';
export default{
    
      data() {
    return {
      
      error: null,
      info:[],
      Cities:[],
      City:'',
      dataentry: null,
      datalabel: null,
      chartData:{},
      charLabel:[],
      showChart
          
    
      
    }
  },
  methods:{

      getData()
      {
          
        //axios.get('https://my.api.mockaroo.com/test/'+this.City+'.json?key='+ApiKey1).then(response=>(this.info=response.data))
this.info=Test;
var obj='{ "';
this.info.forEach(element => {
  obj+=element.Date+'" : '+element.Temperature+', "';
  this.charLabel=this.charLabel.concat(element.Date)
});
obj=obj.slice(0,-3);
obj+="}";
//obj={ '01.04.2021' : 13, '02.04.2021' : 18, '03.04.2021' : 9, '04.04.2021' : 6, '05.04.2021' : 18, '06.04.2021' : 1, '07.04.2021' : 3, '08.04.2021' : 10, '09.04.2021' : 6, '10.04.2021' : 5, '11.04.2021' : 0, '12.04.2021' : 8, '13.04.2021' : 1, '14.04.2021' : 17, '15.04.2021' : 1, '16.04.2021' : 17, '17.04.2021' : 6, '18.04.2021' : 11, '19.04.2021' : 12, '20.04.2021' : 13, '21.04.2021' : 15, '22.04.2021' : 6, '23.04.2021' : 2, '24.04.2021' : 16, '25.04.2021' : 17, '26.04.2021' : 1, '27.04.2021' : 7, '28.04.2021' : 13, '29.04.2021' : 17, '30.04.2021' : 10 }
this.chartData=JSON.parse(obj)
this.showChart=true;
      },
      getCities()
      {
          //axios.get('https://my.api.mockaroo.com/cities.json?key='+ApiKey1).then(response=>(this.Cities=response.data))
          this.Cities=CitiesJson
      }

  },
beforeMount()
{//var obj="{ '01.04.2021' : 13, '02.04.2021' : 18, '03.04.2021' : 9, '04.04.2021' : 6, '05.04.2021' : 18, '06.04.2021' : 1, '07.04.2021' : 3, '08.04.2021' : 10, '09.04.2021' : 6, '10.04.2021' : 5, '11.04.2021' : 0, '12.04.2021' : 8, '13.04.2021' : 1, '14.04.2021' : 17, '15.04.2021' : 1, '16.04.2021' : 17, '17.04.2021' : 6, '18.04.2021' : 11, '19.04.2021' : 12, '20.04.2021' : 13, '21.04.2021' : 15, '22.04.2021' : 6, '23.04.2021' : 2, '24.04.2021' : 16, '25.04.2021' : 17, '26.04.2021' : 1, '27.04.2021' : 7, '28.04.2021' : 13, '29.04.2021' : 17, '30.04.2021' : 10 }"
//this.chartData=obj;
//this.getData();
this.getCities();
this.showChart=false;

}

}
</script>