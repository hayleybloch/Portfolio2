import { LocalWindowCompositor } from "@/components/WindowManagement/LocalWindowCompositor";
import { WindowContext, Window } from "@/components/WindowManagement/WindowCompositor";
import { ApplicationEvent, ApplicationOpenEvent } from "../ApplicationEvents";
import { Application, ApplicationConfig, MenuEntry } from "../ApplicationManager";
import { LocalApplicationManager } from "../LocalApplicationManager";
import dynamic from 'next/dynamic';
import getPublicPath from '@/lib/getPublicPath';
import { SystemAPIs } from "@/components/OperatingSystem";

const View = dynamic(() => import('./AboutView'));

export class AboutConfig implements ApplicationConfig {
  public readonly displayName = 'About';
  public readonly dockPriority = null;
  public readonly path = '/Applications/';
  public readonly appName = 'About.app';
  public readonly appIcon = { src: getPublicPath('/icons/about-app.png'), alt: 'About' };
  public readonly entrypoint = (
    compositor: LocalWindowCompositor,
    manager: LocalApplicationManager,
    apis: SystemAPIs
  ) => new AboutApplication(compositor, manager, apis);
}

export const aboutConfig = new AboutConfig();

export class AboutApplication extends Application {
  config(): ApplicationConfig {
    return aboutConfig;
  }

  menuEntries(): MenuEntry[] {
    return [{
      displayOptions: { boldText: true },
      name: 'About',
      items: []
    }]
  }

  private createNewWindow(event: ApplicationOpenEvent): Window {
    const y       = 50;
    const width   = window.innerWidth * 0.85;
    const height  = window.innerHeight * 0.85 - y;
    const x       = (window.innerWidth - width) / 2;

    console.log('[About] Creating window with dimensions:', { x, y, width, height });
    const win = this.compositor.open({
      x, y,
      height,
      width,
      title: "About",
      application: this,
      args: event.args,
      generator: () => { return View; }
    });
    console.log('[About] Window created:', win);
    return win;
  }

  on(event: ApplicationEvent, windowContext?: WindowContext): void {
    this.baseHandler(event, windowContext);

    console.log('[About] Event received:', event.kind);

    if (event.kind === 'about-open-contact-event') {
      this.manager.open('/Applications/Contact.app');
    }

    if (event.kind === 'application-open') {
      console.log('[About] Opening About window...');
      this.createNewWindow(event);
    };

    if (event.kind === 'application-quit') {
      if (!windowContext) { return; }
    }
  }
}
