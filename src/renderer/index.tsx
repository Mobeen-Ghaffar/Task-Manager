import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store';
const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
  // <div>
  //   <Apps></Apps>
  <Provider store={store}>
    <App/>
  </Provider>

);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
