<template>
  <div>
    <h1>Informacion del producto</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'DisplayItem' }" class="btn btn-success">
          Regresar a los productos.
        </router-link>
      </div>
    </div>
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">{{item.name}}</div>
  <div class="card-body">
    <h5 class="card-title">${{item.price}}</h5>
    <p class="card-text">{{item.descripcion}}</p>
  </div>   
  </div>
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
