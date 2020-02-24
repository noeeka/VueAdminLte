// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//highcharts的引入
import VueHighcharts from 'vue-highcharts';

Vue.use(VueHighcharts)

import 'admin-lte/plugins/fontawesome-free/css/all.css'
import 'admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'

import 'admin-lte/plugins/jquery/jquery'
import 'admin-lte/plugins/jquery-ui/jquery-ui'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle'
// import 'admin-lte/plugins/sparklines/sparkline'
// import 'admin-lte/plugins/jqvmap/jquery.vmap'
// import 'admin-lte/plugins/jqvmap/maps/jquery.vmap.world'
// import 'admin-lte/plugins/moment/moment.min'
// import 'admin-lte/plugins/daterangepicker/daterangepicker'
// import 'admin-lte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4'
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars'
import 'admin-lte/dist/js/adminlte.min'
import 'admin-lte/dist/js/pages/dashboard'
import 'admin-lte/dist/js/demo'
import "./components/Header"



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }


})

