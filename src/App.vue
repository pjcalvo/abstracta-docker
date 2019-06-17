<template>
  <div>
    <br>
    <b-container>
      <b-row>
        <b-col order = "1" order-md="2">
          <img 
            src="../src/assets/logo-abs.svg" 
            class= "logo-main" 
            alt="Copey Learning Center"
            v-if="showImage"/>
        </b-col>
      </b-row>
    </b-container>
    <b-alert
     variant="danger"
     :show="alert.show"
      dismissible
      fade>{{alert.message}}
  </b-alert>
  </div>
</template>

<script>
 export default {
   name: 'app',
   data () {
     return {
       showImage: false,
       alert: {
         message: 'Browser no esta soportado, please update to something better!',
         show: false
       }
     }
   },
   created: function () {
     let result = this.verifyBrowser()
     this.showImage = result
     this.alert.show = !result
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style> 

html, body {
  width: 100%;
  height: 100%;
  background-color: rgb(37, 46, 57);
}

.center-container{
  position: relative;
  height: 95%;
}

.absolute-center{
  width: 100%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
}

.main-logo{
  max-height: 30px;
}

.top-buffer { 
  margin-top:10px; 
}

.top-buffer-5 { 
  margin-top:5px; 
}

.row-class {
  font-size: 12px;
}

.icon-link {
  margin: 2px;
}

.icon-link:hover {
  cursor: pointer;
}

.img-link {
  max-width: 16px;
}

.logo-main {
  max-width: 100%;
}

</style>
