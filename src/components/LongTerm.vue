<template>
    <div id="test">
        <form>
            Wybierz miasto<br>
            
            <select v-model ="City" @change="getData()" id="standard-select">
            
                <option v-for="city in Cities" v-bind:key="city">{{city.City}}</option>
            </select>
            
        </form>
        <br>

        <h1>{{City}}</h1>
        <div class="center flexBlock">
          
            <table v-show=showChart>
        <thead>
        <tr>
            
        </tr>
        <th>Data</th>
        <th> Temperatura </th>
        <th> Opady </th>
        <th> Wiatr </th>

        <th></th>
        <th></th>
        </thead>
        <tbody id="show">
        <tr v-for="(element,index) in info" v-bind:key="index">
          
        <td>{{element.Date}} </td>
        <td>{{element.Temperature}} °C </td>
        <td>{{element.Rain}} mm / 12h</td>
        <td>{{element.Wind}} km/h</td>
      
       
        </tr>
        </tbody>
        </table>
        </div>
        <line-chart v-show="showChart" :data="chartData"></line-chart>    
    </div>

</template>
<script>
var showChart=new Boolean;

 import axios from 'axios';
 import{ApiKey1} from '../main';
//import CitiesJson from '../components/Cities.json';
//import Test from '../components/long.json';
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
      showChart,
      test:[]
          
    
      
    }
  },
  methods:{

      getData()
      {
           
       //axios.get('https://607740cc1ed0ae0017d6ab45.mockapi.io/Test')

        axios.get('https://my.api.mockaroo.com/LongTerm/'+this.City+'.json?key='+ApiKey1)
        .then(response=>{this.info=response.data
        var obj1='{ "'
response.data.forEach(element => {
  obj1+=element.Date+'" : '+element.Temperature+', "';
  this.charLabel=this.charLabel.concat(element.Date)
});
obj1=obj1.slice(0,-3);
obj1+="}";
console.log(obj1);
this.chartData=JSON.parse(obj1)})

//         fetch('https://607740cc1ed0ae0017d6ab45.mockapi.io/Test')
// .then(response => response.json())
// .then(json_data => this.info = json_data)
// .then(console.log(this.info))
  
  //.then(() => console.log(obj))
        
        
      
//console.log(this.info)
//obj={ '01.04.2021' : 13, '02.04.2021' : 18, '03.04.2021' : 9, '04.04.2021' : 6, '05.04.2021' : 18, '06.04.2021' : 1, '07.04.2021' : 3, '08.04.2021' : 10, '09.04.2021' : 6, '10.04.2021' : 5, '11.04.2021' : 0, '12.04.2021' : 8, '13.04.2021' : 1, '14.04.2021' : 17, '15.04.2021' : 1, '16.04.2021' : 17, '17.04.2021' : 6, '18.04.2021' : 11, '19.04.2021' : 12, '20.04.2021' : 13, '21.04.2021' : 15, '22.04.2021' : 6, '23.04.2021' : 2, '24.04.2021' : 16, '25.04.2021' : 17, '26.04.2021' : 1, '27.04.2021' : 7, '28.04.2021' : 13, '29.04.2021' : 17, '30.04.2021' : 10 }

 this.showChart=true;
      },
      getCities()
      {
          axios.get('https://my.api.mockaroo.com/cities.json?key='+ApiKey1).then(response=>(this.Cities=response.data))
          //this.Cities=CitiesJson
      }

  },
beforeMount()
{
this.getCities();
this.showChart=false;

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