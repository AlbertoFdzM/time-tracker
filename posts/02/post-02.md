# Build an App with Electron and TypeScript - Windows and Navigation

This article is part of a [post series about developing apps with Electron and TypeScript](https://github.com/AlbertoFdzM/time-tracker) and covers **how to handle windows and manage navigation when developing an Electron app**.

## MacOS windows special case

Now when the Electron app starts it opens a window, and when this window is closed, the app quits. This behavior is normal except for MacOS applications, they usually don't quit when their window is closed. To reproduce this functionality the `App` module needs change.

**`/src/App.ts`**
```typescript
// ...

class App {
  //...
  public start(): void {
    // ...

    Electron.app.on('window-all-closed', this.onWindowAllClosed.bind(this));
  }

  // ...

  /**
   * Callback for Electron.App "window-all-closed" event
   * https://electronjs.org/docs/api/app#event-window-all-closed
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
```

Now if the app runs, in a MacOS, it will not quit when its windows are closed unless <kbd>Cmd</kbd> + <kbd>Q</kbd> is pressed.