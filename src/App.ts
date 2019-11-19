import Electron from "electron";
import path from "path"; // NodeJS path module

/**
 * @description Main module for the project
 */
export class App {
  /**
   * @description starts the app
   */
  public start(): void {
    Electron.app.on("ready", this.onReady);
  }

  /**
   * @description callback for Electron.App "ready" event
   */
  private onReady(): void {
    const options: Electron.BrowserWindowConstructorOptions = {
      webPreferences: {
        nodeIntegration: true,
      },
    };

    const window = new Electron.BrowserWindow(options);

    window.loadFile(path.join(__dirname, "../index.html"));
  }
}
