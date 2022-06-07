import { createApp } from 'vue'
//import axios from 'axios' //https://jsonplaceholder.typicode.com/users
import App from './App.vue'

const app = createApp(App)

// To avoid an issue "Renderers can obtain access to random bluetooth device without permission in Electron" I pass the resolving code as it is.
// Link to the issue and resolve: https://github.com/advisories/GHSA-3p22-ghq8-v749
/*
app.addEventListener('web-contents-created', (event, webContents) => {
  webContents.on('select-bluetooth-device', (event, devices, callback) => {
    // Prevent default behavior
    event.preventDefault();
    // Cancel the request
    callback('');
  });
});
*/

app.mount('#app')
