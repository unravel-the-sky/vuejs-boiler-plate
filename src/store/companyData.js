import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    companyName: 'unknown company',
    companyNameKey: 'unknown name key',
    companyPrimaryColor: '#ffffff',
    supportedLocales: 'unknown',
    selectedLocale: 'unknown',
    productInfoPaneOpen: false,
    userPlatform: 'unknown',
    products: []
  },
  getters:{
    getProductsWithLocale: (state) =>  {
      state.products.forEach(product => {
        product.title = product.titles[state.selectedLocale.code]
      });
      return state.products.filter(product => product.active)
    },
    getActiveProducts: state => {
      return state.products.filter(product => product.active)
    }
  },
  mutations: {
    updateCompany(state, data) {
      state.companyName = data.companyName
      state.companyNameKey = data.companyNameKey
    },
    updateCompanyPrimaryColor(state, companyColor){
      state.companyPrimaryColor = companyColor
    },
    updateSupportedLocales(state, supportedLocales){
      state.supportedLocales = supportedLocales
    },
    updateSelectedLocale(state, selectedLocale){
      state.selectedLocale = selectedLocale
    },
    toggleProductInfoPaneState(state, value){
      state.productInfoPaneOpen = value
    },
    setUserPlatform(state, platform){
      state.userPlatform = platform
    },
    updateProducts(state, products){
      state.products = products
    }
  }
});

export default store
