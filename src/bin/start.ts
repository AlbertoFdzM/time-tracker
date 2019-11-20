import { App } from '../App';
import { AppConfig } from '../AppConfig';

const isDebugEnabled = /--debug/.test(process.argv[1]);
const config: AppConfig = {
  isDebugEnabled
};

const app = new App(config);
app.start();
