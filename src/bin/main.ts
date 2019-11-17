import Electron from "electron";

import { App } from "../App";

const app = new App();

Electron.app.on("ready", app.onReady);
