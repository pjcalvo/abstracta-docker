<template>
  <div>
    <br>
    <b-container>
      <b-row>
        <b-col order = "1" order-md="2">
          <img 
            src="../../src/assets/logo-abs.svg" 
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
