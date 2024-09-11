import { createSSRApp } from 'vue'
import { createYmaps } from 'vue-yandex-maps'
import App from './App.vue'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)

  app.use(
    createYmaps({
      apikey: import.meta.env.VITE_YANDEX_MAP_KEY,
    }),
  )
  
  return { app }
}
