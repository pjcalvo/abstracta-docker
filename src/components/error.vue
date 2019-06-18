<template>
  <div>
    <br>
      <b-alert
     variant="danger"
     :show="alert.show"
      dismissible
      fade>{{alert.message}}
  </b-alert>
    <b-container>
      <b-row>
        <b-col order = "1" order-md="2">
          <img 
            src="../../src/assets/404.png" 
            class= "logo-main" 
            alt="Copey Learning Center"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
 export default {
   name: 'app',
   data () {
     return {
       alert: {
         message: 'Browser no esta soportado, please update to something better!',
         show: true
       }
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
