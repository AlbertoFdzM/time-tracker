import path from "path";
import { BrowserWindow } from "electron";

export class App {
  /**
   * @description callback for Electron.App "ready" event
   */
  public onReady(): void {
    const options: Electron.BrowserWindowConstructorOptions = {
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
      width: 800,
    };

    const window = new BrowserWindow(options);

    window.loadFile(path.join(__dirname, "../index.html"));
  }
}
