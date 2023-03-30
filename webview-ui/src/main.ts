import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

window.addEventListener('message', (event) => {
  const message = event.data
  switch (message.command) {
    case 'setMessage': {
      console.log({ message })
      break
    }
    default:
      break
  }
})
