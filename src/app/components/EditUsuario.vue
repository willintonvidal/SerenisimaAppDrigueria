<template>
  <div>
    <h1>Update Usuarios</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'DisplayUsuarios' }" class="btn btn-success">
          Retornar a usuarios
        </router-link>
      </div>
    </div>
    <form v-on:submit.prevent="updateItem">
      <div class="form-group">
        <label>Nombre</label>
        <input type="text" class="form-control" v-model="item.name">
      </div>

      <div class="form-group">
        <label name="product_price">Apellido</label>
        <input type="text" class="form-control" v-model="item.apellido">
      </div>

      <div class="form-group">
        <label>coreo:</label>
        <input type="text" class="form-control" v-model="item.correo">
      </div>

      <div class="form-group">
        <label name="product_price">Celular</label>
        <input type="text" class="form-control" v-model="item.celular">
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Update</button>
      </div>
    </form>    
  </div>
</template>

<script>

export default{
  data(){
    return{
      item:{}
    }
  },

  created: function(){
    this.getItem();
  },

  methods: {
    getItem()
    {
      let uri = 'http://localhost:4000/usuario/editusuario/' + this.$route.params.id;
      this.axios.get(uri).then((response) => {
        this.item = response.data;
      });
    },

    updateItem()
    {
      let uri = 'http://localhost:4000/usuario/updateusuario/' + this.$route.params.id;
      this.axios.post(uri, this.item).then((response) => {
        this.$router.push({name: 'DisplayUsuarios'});
      });
    }
  }
}
</script>
