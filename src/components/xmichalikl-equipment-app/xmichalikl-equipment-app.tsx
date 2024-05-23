import { Component, Host, Prop, State, h } from '@stencil/core';

declare global {
  interface Window {
    navigation: any;
  }
}

@Component({
  tag: 'xmichalikl-equipment-app',
  styleUrl: 'xmichalikl-equipment-app.css',
  shadow: true,
})
export class XmichaliklEquipmentApp {
  @State() private relativePath = '';
  @Prop() basePath: string = '';

  componentWillLoad() {
    const baseUri = new URL(this.basePath, document.baseURI || '/').pathname;

    const toRelative = (path: string) => {
      if (path.startsWith(baseUri)) this.relativePath = path.slice(baseUri.length);
      else this.relativePath = '';
    };

    window.navigation?.addEventListener('navigate', (ev: Event) => {
      if ((ev as any).canIntercept) (ev as any).intercept();
      let path = new URL((ev as any).destination.url).pathname;
      toRelative(path);
    });

    toRelative(location.pathname);
  }

  navigate(path: string) {
    const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
    window.navigation.navigate(absolute);
  }

  render() {
    const [path, id] = this.relativePath.split('/');

    return (
      <Host>
        {path === 'ambulance-list' ? (
          <xmichalikl-ambulance-list onAmbulance-detail={(event: CustomEvent<string>) => this.navigate(`equipment-list/${event.detail}`)}></xmichalikl-ambulance-list>
        ) : path === 'equipment-list' ? (
          <xmichalikl-equipment-list onEquipment-detail={(event: CustomEvent<string>) => this.navigate(`equipment-detail/${event.detail}`)}></xmichalikl-equipment-list>
        ) : path === 'equipment-detail' ? (
          <xmichalikl-equipment-detail equipmentId={id ?? ''}></xmichalikl-equipment-detail>
        ) : null}
      </Host>
    );
  }
}
