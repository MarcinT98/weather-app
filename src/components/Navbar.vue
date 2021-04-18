<template>
    <header>
        
        <div class="lineTop">
            <div class="center flexBlock">
                <div class="flexBlock">        
                    <img src="../assets/weatherapplogo.png">
                </div>
                <ul class="flexBlock">
                    <li>
                        <router-link to="/mapa">Mapa</router-link>
                    </li>
                    <li>
                        <a href="#">Prognoza na dziś</a>
                    </li>
                    <li>
                        <router-link to="/long">Pogoda długoterminowa</router-link>
                    </li>
                    <li>
                        <router-link to="/smog">Jakość powietrza</router-link>
                    </li>
                    <li>
                        <router-link to="/alarmy">Alarmy pogodowe</router-link>
                    </li>
                </ul>
            </div>
        </div>
        
    </header>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.lineTop{
    background: #15202B;
    margin-bottom: 50px;
}
.center{
	margin: 0 auto;
	max-width: 1200px;
	padding: 0 30px;
}
.flexBlock{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
img{
    margin: 10px 0;
}
a{
	text-decoration: none;
    color: #fff;
    font-size: 15px;
}
ul{
	list-style: none;
}
li{
    margin: 20px;
}
</style>