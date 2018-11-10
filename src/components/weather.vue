<template>
    <div id="weather">
        <form @submit.prevent="getWeather(inputLocation)" class="form">
            <input type="text" v-model="inputLocation">
            <button type="submit">Submit</button>
        </form>
        <div id="forecast">
            <p v-if="temperature" class="details">
                Country: {{country}} <br>
                Temperature: {{temperature}}&#8451; <br/>
                Pressure: {{pressure}} hpa <br>
                Humidity: {{humidity}}% <br>
                Wind Speed: {{windSpeed}} kn <br>
            </p>
            <p v-else-if="errorStatement">
                {{errorStatement}}
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "weather",
  data: function() {
    return {
      inputLocation: "",
      temperature: "",
      pressure: "",
      humidity: "",
      windSpeed: "",
      country: "",
      errorStatement: ""
    };
  },
  methods: {
    getWeather: function(inputTitle) {
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            inputTitle +
            "&appid=7ddbbac4414598a0582efd0c12096e75&units=metric"
        )
        .then(response => {
          this.temperature = response.data.main.temp;
          this.pressure = response.data.main.pressure;
          this.humidity = response.data.main.humidity;
          this.windSpeed = response.data.wind.speed;
          this.country = response.data.sys.country;
        })
        .catch(error => {
          this.errorStatement = "Is this a place on earth?? Couldn't find it though! :("
        });
    }
  }
};
</script>
<style scoped>
.form input[type="text"]{
    margin-right: 25px;
    width: 256px;
}
.details{
  padding-top: 20px;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.4);
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
}
</style>


