<template>
  <body class="hold-transition sidebar-mini layout-fixed">

  <div id="app" class="wrapper">
    <Header/>

    <!-- Main Sidebar Container -->
    <Nav/>
    <!-- Content Wrapper. Contains page content -->
    <ContentWrap></ContentWrap>

    <!-- /.content-wrapper -->
    <footer class="main-footer">
      <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.2
      </div>
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  </body>
</template>

<script>
  import ContentWrap from './ContentWrap.vue'
  import Header from "./components/Header";
  import Nav from "./components/Nav";

  export default {
    name: 'App',
    created() {
    },
    components: {
      Nav,
      Header,
      'ContentWrap': ContentWrap,
    },
    methods: {
      add: function () {
        alert("ffff");
      }
    }
  }


</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
