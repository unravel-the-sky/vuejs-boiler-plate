<template>
<div class="container">
    Faq pane here..
    <div @click="openFaqModal('simulationInfo')" class="ui fluid small submit button">
        <!-- {{getMoreInformationTitle}} -->
        Add a question
    </div>

    <question-modal v-bind:info="modalTypeData" v-show="showProductModal" @close="showProductModal = false"></question-modal>
</div>
    
</template>

<style scoped>
</style>

<script>
import ProductModal from './ProductModal.vue'
import Vue from 'vue'
Vue.component('product-modal', ProductModal)

export default {
  props: {},
  data() {
    return {
      showProductModal: false,
      modalTypeData: null
    };
  },
  methods: {
    openFaqModal(modelType) {
      this.showProductModal = true;
      this.modalTypeData = {
        title: 'Add a question'
      };
    }
  }
};
</script>
