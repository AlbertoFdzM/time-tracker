import Electron from 'electron';
import path from 'path'; // NodeJS path module
import { AppConfig } from './AppConfig';

/**
 * Main module for the project
 */
export class App {
  constructor(private config: AppConfig) {}

  /**
   * Starts the app
   */
  public start(): void {
    Electron.app.on('ready', this.onReady.bind(this));
  }

  /**
   * Callback for Electron.App "ready" event
   */
  private async onReady(): Promise<void> {
    const options: Electron.BrowserWindowConstructorOptions = {
      webPreferences: {
        nodeIntegration: true
      }
    };

    const window = new Electron.BrowserWindow(options);

    await window.loadFile(path.join(__dirname, '../index.html'));
  }
}
