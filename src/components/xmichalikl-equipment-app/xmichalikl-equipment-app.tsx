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
  @Prop() apiBase: string;

  componentWillLoad() {
    const baseUri = new URL(this.basePath, document.baseURI || '/').pathname;

    const toRelative = (path: string) => {
      if (path === '/') this.relativePath = baseUri.replace(/\//g, '');
      else if (path.startsWith(baseUri)) this.relativePath = path.slice(baseUri.length);
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

    console.log('path', `'${path}'`);
    console.log('id', `'${id}'`);

    return (
      <Host>
        {path === 'ambulance-list' ? (
          <xmichalikl-ambulance-list
            api-base={this.apiBase}
            onAmbulance-detail={(event: CustomEvent<string>) => this.navigate(`equipment-list/${event.detail}`)}
          ></xmichalikl-ambulance-list>
        ) : path === 'equipment-list' ? (
          <xmichalikl-equipment-list
            apiBase={this.apiBase}
            ambulanceId={id ?? ''}
            onEquipment-detail={(event: CustomEvent<string>) => this.navigate(`equipment-detail/${event.detail}`)}
            onGo-back={() => this.navigate(`ambulance-list`)}
          ></xmichalikl-equipment-list>
        ) : path === 'equipment-detail' ? (
          <xmichalikl-equipment-detail
            apiBase={this.apiBase}
            ambulanceId={id.split(':')[0] ?? ''}
            equipmentId={id.split(':')[1] ?? ''}
            onEquipment-update={(event: CustomEvent<string>) => this.navigate(`equipment-list/${event.detail}`)}
          ></xmichalikl-equipment-detail>
        ) : (
          <div class="error">
            <h1>Page not found</h1>
          </div>
        )}
      </Host>
    );
  }
}
