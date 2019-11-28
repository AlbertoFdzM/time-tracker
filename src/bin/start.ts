import { App } from '../App';
import { AppConfig } from '../AppConfig';

const isDebugEnabled: boolean = process.env.DEBUG_ENABLED === 'true';
const config: AppConfig = {
  isDebugEnabled
};

const app: App = new App(config);
app.start();
