import Electron from 'electron';
import path from 'path'; // NodeJS path module
import ElectronDebug from 'electron-debug';
import { AppConfig } from './AppConfig';

/**
 * Main module for the project
 */
export class App {
  private mainWindow: Electron.BrowserWindow | null = null;

  constructor(private config: AppConfig) {}

  /**
   * Starts the app
   */
  public start(): void {
    if (this.config.isDebugEnabled) {
      // https://www.typescriptlang.org/docs/handbook/modules.html#optional-module-loading-and-other-advanced-loading-scenarios
      const electronDebug: typeof ElectronDebug = require('electron-debug');

      electronDebug();
    }

    Electron.app.on('ready', this.onReady.bind(this));

    Electron.app.on('window-all-closed', this.onWindowAllClosed.bind(this));
  }

  /**
   * Callback for Electron.App "ready" event
   * https://electronjs.org/docs/api/app#event-ready
   */
  private async onReady(): Promise<void> {
    const options: Electron.BrowserWindowConstructorOptions = {
      webPreferences: {
        nodeIntegration: true
      }
    };

    this.mainWindow = new Electron.BrowserWindow(options);

    await this.mainWindow.loadFile(path.join(__dirname, '../index.html'));
  }

  /**
   * Callback for Electron.App "window-all-closed" event
   *
   * Quits the app unless current operative system is macOS, it doesn't quit apps
   * when all windows are closed
   * https://nodejs.org/docs/latest-v12.x/api/process.html#process_process_platform
   */
  private onWindowAllClosed(): void {
    if (process.platform !== 'darwin') {
      Electron.app.quit();
    }
  }
}
