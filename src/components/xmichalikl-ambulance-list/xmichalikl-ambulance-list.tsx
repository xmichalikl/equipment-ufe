import { Component, Host, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { Ambulance, AmbulanceListApiFactory } from 'src/api/equipment';

@Component({
  tag: 'xmichalikl-ambulance-list',
  styleUrl: 'xmichalikl-ambulance-list.css',
  shadow: true,
})
export class XmichaliklAmbulanceList {
  @Prop() apiBase: string;

  @State() errorMessage: string;

  @Event({ eventName: 'ambulance-detail' }) ambulanceDetail: EventEmitter<string>;

  ambulanceList: Ambulance[];

  async componentWillLoad() {
    this.ambulanceList = await this.getAmbulanceListAsync();
  }

  private async getAmbulanceListAsync(): Promise<Ambulance[]> {
    try {
      const response = await AmbulanceListApiFactory(undefined, this.apiBase).getAmbulanceList();
      if (response.status < 299) {
        return response.data;
      } else {
        this.errorMessage = `Cannot retrieve list of ambulances: ${response.statusText}`;
      }
    } catch (err: any) {
      this.errorMessage = `Cannot retrieve list of ambulances: ${err.message || 'unknown'}`;
    }
    return [];
  }

  render() {
    return (
      <Host>
        <h1>Zoznam ambulancií</h1>
        {this.errorMessage ? (
          <h3 class="error">{this.errorMessage}</h3>
        ) : (
          <md-list>
            {this.ambulanceList.map((ambulance, idx) => (
              <div>
                <md-list-item interactive onClick={() => this.ambulanceDetail.emit(ambulance.id)}>
                  {ambulance.name}
                </md-list-item>
                {idx < this.ambulanceList.length - 1 ? <md-divider></md-divider> : null}
              </div>
            ))}
          </md-list>
        )}
      </Host>
    );
  }
}
