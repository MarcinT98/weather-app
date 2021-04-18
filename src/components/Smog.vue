<template>
    <div id="test">
        <h1>Smog</h1>
            <table class="table table-striped text-white">
        <thead>
        <th>Miasto</th>
        <th> PM10 </th>
        <th> PM2.5 </th>
        <th> PM1 </th>

        <th></th>
        <th></th>
        </thead>
        <tbody id="show">
        <tr v-for="element in info" v-bind:key="element">
        <td>{{element.City}}</td>
        <td>{{element.PM10}} µg/m³</td>
        <td>{{element.PM25}} µg/m³</td>
        <td>{{element.PM1}} µg/m³</td>

       
        </tr>sa
        </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
import{ApiKey1} from '../main';
export default{
      data() {
    return {
      
      error: null,
      info:[],
    }
  },
  methods:{
      getData()
      {
          
axios.get('https://my.api.mockaroo.com/smog1.json?key='+ApiKey1).then(response=>(this.info=response.data))

      }

  },
beforeMount()
{
this.getData();

}
}
</script>