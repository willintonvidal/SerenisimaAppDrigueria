<template>
  <div>
    <h1>Actualizar un producto</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'DisplayItem' }" class="btn btn-success">
          Regresar a los productos
        </router-link>
      </div>
    </div>
    <form v-on:submit.prevent="updateItem">

      <div class="form-group">
        <label>Nombre Producto</label>
        <input type="text" class="form-control" v-model="item.name">
      </div>

      <div class="form-group">
        <label name="product_price">Precio:</label>
        <input type="number" class="form-control" v-model="item.price">
      </div>

      <div class="form-group">
        <label>Descripcion:</label>
        <textarea class="form-control" rows="4" v-model="item.descripcion"></textarea>
      </div>
  <!-- 
      <div class="form-group">
        <label name="product_price">Usos</label>
        <input type="text" class="form-control" v-model="item.usos">
      </div>

      <div class="form-group">
        <label>fecha Vencimiento</label>
        <input type="text" class="form-control" v-model="item.fechaVencimiento">
      </div>

      <div class="form-group">
        <label name="product_price">Fecha Ingreso</label>
        <input type="text" class="form-control" v-model="item.fechaIngreso">
      </div>

      <div class="form-group">
        <label>Tabletas Total</label>
        <input type="text" class="form-control" v-model="item.tabletasTotal">
      </div>

      <div class="form-group">
        <label name="product_price">Cuantas tabletas tiene un sobre:</label>
        <input type="text" class="form-control" v-model="item.cuanTabletasSobre">
      </div>
      <div class="form-group">
        <label name="product_price">Cuantos sobres tiene una caja:</label>
        <input type="text" class="form-control" v-model="item.cuanSobresCaja">
      </div>
 -->

      <div class="form-group">
        <button class="btn btn-primary">Actualizar producto</button>
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
      let uri = 'https://serenisima.herokuapp.com/items/edit/' + this.$route.params.id;
      this.axios.get(uri).then((response) => {
        this.item = response.data;
      });
    },

    updateItem()
    {
      let uri = 'https://serenisima.herokuapp.com/items/update/' + this.$route.params.id;
      this.axios.post(uri, this.item).then((response) => {
        this.$router.push({name: 'DisplayItem'});
      });
    }
  }
}
</script>
