<template>
  <div class="hello">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <p>Why don't you fucking go to <strong>{{ randomLunchPlace }}</strong></p>
          <p>Wait, that's a <span class="btn btn-primary" v-on:click="onRandomClick">horrible idea</span></p>
          <p style="font-weight: 600; color: firebrick;" v-if="!isFirstPick">RESULT HAS BEEN MANIPULATED!</p>
          <hr>

          <p>What the shit let me browse some menus:</p>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 mb-4" v-for="(r, index) in menus">
          <div class="card">
            <h1>{{ r.name }}</h1>
            <details>
              <summary>Menu</summary>
              <p v-html="r.html"></p>
            </details>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <a href="https://travis-ci.org/sirtawast/helsinkilunch/"><img src="https://travis-ci.org/sirtawast/helsinkilunch.svg?branch=master" alt=""></a>
    &bull; 
    <a href="https://github.com/sirtawast/helsinkilunch/">GitHub</a> 
    &bull; 
    <a href="https://github.com/sirtawast/helsinkilunch/issues/">Issues</a>
  </div>
</template>

<script>
  import mapping from '../../lib/mapping.js';
  export default {
    data() {
      return {
        menus: [],
        randomLunchPlace: "",
        mapping: mapping,
        availableLunchPlaces: [],
        isFirstPick: true,
      }
    },
    beforeMount(){
      this.fetchData();
      this.newRandomPlace();
    },
    methods: {
      onRandomClick() {
        this.isFirstPick = false;
        this.newRandomPlace();
      },
      newRandomPlace() {
        if (this.availableLunchPlaces.length === 0) {
          this.availableLunchPlaces = [...this.mapping.fromMenu];
        }
        const i = this.randomRange(0, this.availableLunchPlaces.length);
        this.randomLunchPlace = this.availableLunchPlaces[i].name;
        this.availableLunchPlaces.splice(i,1);
      },
      randomRange(min, max) {
        return parseInt(Math.random() * (max - min) + min, 10);
      },
      fetchData() {
        this.mapping.restaurants.forEach((r) => {
          let path = "/";

          if (process.env.NODE_ENV === 'production') {
            path = "/helsinkilunch/";
          }

          this.$http.get(`${path}static/crawled/${r.slug}.json`).then((res) => {
            this.menus.push({html: res.data.html, name: r.slug});
          });
        });
      }
    }
  }

  window.Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.btn {
  border-radius: 0;
}
.card {
  border: 1px solid black;
  border-radius: 0;
  padding: 20px;
}
</style>
