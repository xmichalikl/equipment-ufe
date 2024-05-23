import { Component, Host, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'xmichalikl-ambulance-list',
  styleUrl: 'xmichalikl-ambulance-list.css',
  shadow: true,
})
export class XmichaliklAmbulanceList {
  @Event({ eventName: 'ambulance-detail' }) ambulanceDetail: EventEmitter<string>;
  ambulanceList = [...new Array(3)];

  render() {
    return (
      <Host>
        <div id="ambulance-list">
          <h1>Zoznam ambulancií</h1>
          <md-list>
            {this.ambulanceList.map((el, idx) => (
              <div>
                <md-list-item interactive onClick={() => this.ambulanceDetail.emit(`ambulance-${idx + 1}`)}>
                  {`Ambulancia ${idx + 1}`}
                </md-list-item>
                {idx < this.ambulanceList.length - 1 ? <md-divider></md-divider> : null}
              </div>
            ))}
          </md-list>
        </div>
      </Host>
    );
  }
}
