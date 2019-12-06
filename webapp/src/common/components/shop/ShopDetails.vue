<template>
  <div class="hello">
    <div class="menu">
        <SidebarMenu :menu="menu" 
                     collapsed="collapsed"
                     @item-click="onCategoryClick"
                     style="margin-top:250px; height:auto"/>
    </div>
    <v-container fluid style="margin-left: 100px; margin-top: 150px; padding-right: 50px">
      <v-row>
        <v-col cols="15">
          <v-row align="center">
            <div class="please">
              <ShopListings :categoryName="currentClicked"
                            :items="items"/>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import  ShopListings from '@/common/components/shop/ShopListings.vue';
import {ShopModel} from '@/store.js';
import {fetchShopItems} from "@/controllers/shop/ShopController.js";

export default {
  name: "ShopDetails",
  components: {
      SidebarMenu,
      ShopListings,
  },
  props: {
  },

  data() {
    return {
      showScheduleForm: false,
      items: ShopModel.getShopItems(),
      currentClicked: this.getCategory(),
      menu: [
      {
          header: true,
          title: 'Select a Category',
          hiddenOnCollapse: true
      },
      {
          title: 'Strings',
          icon: 'fa fa-guitar '
      },
      {
          // href: '/',
          title: 'Woodwinds',
          icon: 'fa fa-thermometer-full'
      },
      {
          // href: '/',
          title: 'Brass',
          icon: 'fa fa-bell'
      },
      {
          title: 'Keys',
          icon: 'fa fa-ruler-horizontal'
      },
      {
          title: 'Percussion',
          icon: 'fa fa-drum'
      },
      
      {
          title: 'Accessories',
          icon: 'fa fa-music'
      },
      {
          title: 'Hot Deals',
          icon: 'fa fa-dollar-sign'
      }
      ],
      
    }
  },
  methods: {
    onCategoryClick(event, item)
    {
      console.log("Just clicked ", item.title);
      this.currentClicked = item.title;
      console.log(this.currentClicked);
      this.$modal.show('hello-world');
    },
    getCategory() {
      // debugger;
      console.log("current category:",  this.$store.state.currentCategory)
      return this.$store.state.currentCategory;
    }
  },
  beforeMount() {
    this.currentClicked = this.getCategory();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
    text-align: left;
    margin: 0 50px;
}

.modal {
        background-color: rgba(0, 0, 0, 0.7);
    }
</style>