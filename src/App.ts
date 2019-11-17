import { BrowserWindow } from "electron";
export class App {
  public onReady(): void {
    const options: Electron.BrowserWindowConstructorOptions = {
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
      width: 800,
    };

    const window = new BrowserWindow(options);

    window.loadFile("index.html");
  }
}
