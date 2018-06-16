<template>
  <div>
    <h1>Create An Usuario</h1>
    <form v-on:submit.prevent="addUsuario">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nombre:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Apellido:</label>
            <input type="text" class="form-control col-md-6" v-model="item.apellido">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>correo:</label>
            <input type="text" class="form-control" v-model="item.correo">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>celular:</label>
            <input type="text" class="form-control col-md-6" v-model="item.celular">
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Add Usuario</button>
      </div>
    </form>
  </div>
</template>

<script>
  import toastr from 'toastr';

  export default {
    data(){
      return{
        item:{}
      }
    },
    methods: {
      addUsuario(){
        let uri = 'https://serenisima.herokuapp.com/usuario/addusuarios';
        this.axios.post(uri, this.item).then((response) => {
          console.log(response);
          toastr.success(response.data.item, 'Response');
          this.$router.replace({ name: 'DisplayUsuarios'})
        });
      }
    }
  }
  </script>