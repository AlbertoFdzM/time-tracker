import { App } from '../App';
import { AppConfig } from '../AppConfig';

const isDebugEnabled = process.env.DEBUG_ENABLED === 'true';
const config: AppConfig = {
  isDebugEnabled
};

const app = new App(config);
app.start();
