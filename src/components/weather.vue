<template>
  <div id="weather">
    <form @submit.prevent="getWeather(inputLocation)" class="form">
      <input type="text" v-model="inputLocation" />
      <button type="submit">Submit</button>
    </form>
    <div v-if="responseCode" id="forecast" class="text-center">
      <h5>{{errorStatement}}</h5>
    </div>
    <div v-if="!responseCode" id="forecast" class="text-center">
      <div class="container align-center">
        <div class="row">
          <div v-if="country" class="card border-info col-sm" style="height: 180px;">
            <img src="../assets/location.png" alt="Country" class="card-body" />
            <h5 class="card-text">{{country}}</h5>
          </div>
          <div v-if="temperature" class="card border-info col-sm" style="height: 180px;">
            <img src="../assets/hot.png" alt="Temperature" class="card-body" />
            <h5 class="card-text">{{temperature}} &#8451;</h5>
          </div>
          <div v-if="pressure" class="card border-info col-sm" style="height: 180px;">
            <img src="../assets/pressure.png" alt="Pressure" class="card-body" />
            <h5 class="card-text">{{pressure}} hpa</h5>
          </div>
          <div v-if="humidity" class="card border-info col-sm" style="height: 180px;">
            <img src="../assets/drop.png" alt="Humidity" class="card-body" />
            <h5 class="card-text">{{humidity}}%</h5>
          </div>
          <div v-if="windSpeed" class="card border-info col-sm" style="width: wrap-content;">
            <img src="../assets/wind.png" alt="Wind Speed" class="card-body" />
            <h5 class="card-text">{{windSpeed}} kn</h5>
          </div>
          <div v-if="timeZone" class="card border-info col-sm" style="width: wrap-content;">
            <img src="../assets/time.png" alt="Timezone" class="card-body" />
            <h5 class="card-text">{{timeZone}} hrs</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

let url = "https://api.openweathermap.org";
export default {
  name: "weather",
  data: function() {
    return {
      responseCode: "",
      inputLocation: "",
      temperature: "",
      pressure: "",
      humidity: "",
      windSpeed: "",
      country: "",
      timeZone: "",
      errorStatement: ""
    };
  },
  methods: {
    getWeather: function(inputTitle) {
      axios
        .get(
          url +
            "/data/2.5/weather?q=" +
            inputTitle +
            "&appid=7ddbbac4414598a0582efd0c12096e75&units=metric"
        )
        .then(response => {
          this.responseCode = response.cod
          if (this.responseCode === 404) {
            this.errorStatement = "Not Found";
          }
          this.temperature = response.data.main.temp;
          this.pressure = response.data.main.pressure;
          this.humidity = response.data.main.humidity;
          this.windSpeed = response.data.wind.speed;
          this.country = response.data.sys.country;
          this.timeZone =
            response.data.timezone > 0
              ? "+" + response.data.timezone / 3600
              : response.data.timezone / 3600;
        })
        .catch(error => {
          if (error) {
            this.errorStatement = "Error in finding this city!";
          }
        });
    }
  }
};
</script>
<style scoped>
.form input[type="text"] {
  position: relative;
  margin-right: 25px;
  width: 256px;
}
#forecast {
  position: relative;
  top: 10px;
  height: 500px;
  margin-top: 20px;
}
.border-info {
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin-left: 2px;
  margin-right: 2px;
}
</style>


