import { Router } from 'vue-router'
import { Store } from 'vuex'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store
    $router: Router
  }
}
