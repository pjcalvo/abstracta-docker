<template>
  <div>
  <router-view></router-view>
  </div>
</template>

<script>

</script>

<style> 

html, body {
  width: 100%;
  height: 100%;
  background-color: rgb(37, 46, 57) !important;
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
