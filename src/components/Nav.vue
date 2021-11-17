<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <div id="clock" class="mt-4 ms-auto px-12 py-lg-0">
        <p class="date">{{ date }}</p>
        <p class="time">{{ time }}</p>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "nav",
  data() {
    return {
      time: "",
      date: "",
    };
  },
  mounted() {
    setInterval(this.updateTime, 1000);
    this.updateTime();
  },
  methods: {
    zeroPadding(num, digit) {
      let zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
    updateTime() {
      let cd = new Date();
      let week = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2) +
        ":" +
        this.zeroPadding(cd.getSeconds(), 2);
      this.date =
        this.zeroPadding(cd.getDate(), 2) +
        "/" +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        "/" +
        this.zeroPadding(cd.getFullYear(), 4) +
        " " +
        week[cd.getDay()];
    },
  },
};
</script>
<style lang="css" scoped>
html,
body {
  height: 100%;
}
body {
  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
  background-size: 100%;
}
p {
  margin: 0;
  padding: 0;
}
#clock {
  color: #ffffff;
  text-align: center;
  position: absolute;
  float: right;
  right: 1%;
  top: 50%;
}
.time {
    letter-spacing: 0.05em;
    font-size: 20px;
    padding: 5px 0;
  }
  .date {
    letter-spacing: 0.1em;
    font-size: 24px;
  }
  .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }
</style>
