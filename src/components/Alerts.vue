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
                <tr>
                    <td>1</td>
                    <td>Kraków</td>
                    <td>19.04.2021</td>
                    <td>Silne opady</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Warszawa</td>
                    <td>19.04.2021</td>
                    <td>Silny wiatr</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Gdańsk</td>
                    <td>19.04.2021</td>
                    <td>Gradobicie</td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Alerts'
}
</script>

<style scoped>
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