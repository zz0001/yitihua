<template>
    <div data-role="page" id="consumer_load_page">

        <img src="../../../static/img/loading.png" style="width:100%;height:100%;">
    <div id="load_map" style="width:100%;height:100%;display: none">

    </div>
    </div>
</template>

<script>
    export default {
      mounted(){
          function onDeviceReady() {
              document.addEventListener("backbutton", onBackKeyDown, true);
              navigator.splashscreen.hide();
              window.hasUpdate = false;
              getLocation();


          }
          $("#consumer_load_page").live("pageshow", function () {
              document.addEventListener("deviceready", onDeviceReady, false);


              window.welcomePage = "";
              $.mobile.changePage("../load/login.html");
//            $.mobile.changePage("../patrol/patrolRecord.html");

          });
      }
    }
</script>

<style scoped>

</style>