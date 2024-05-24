import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { Equipment, EquipmentListApiFactory } from 'src/api/equipment';

@Component({
  tag: 'xmichalikl-equipment-list',
  styleUrl: 'xmichalikl-equipment-list.css',
  shadow: true,
})
export class XmichaliklEquipmentList {
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;

  @State() errorMessage: string;

  @Event({ eventName: 'equipment-detail' }) equipmentDetail: EventEmitter<string>;
  @Event({ eventName: 'go-back' }) goBack: EventEmitter<string>;

  equipmentList: Equipment[];

  async componentWillLoad() {
    this.equipmentList = await this.getEquipmentListAsync();
  }

  private async getEquipmentListAsync(): Promise<Equipment[]> {
    try {
      const response = await EquipmentListApiFactory(undefined, this.apiBase).getEquipmentList(this.ambulanceId);
      if (response.status < 299) {
        return response.data;
      } else {
        this.errorMessage = `Cannot retrieve list of equipment: ${response.statusText}`;
      }
    } catch (err: any) {
      this.errorMessage = `Cannot retrieve list of equipment: ${err.message || 'unknown'}`;
    }
    return [];
  }

  render() {
    return (
      <Host>
        <h1 class="title">Zoznam vybavenia</h1>
        {this.errorMessage ? (
          <h3 class="error">{this.errorMessage}</h3>
        ) : (
          <div>
            <h3 class="subtitle">(Ambulancia {this.ambulanceId})</h3>
            <md-list>
              {this.equipmentList.map((equipment, idx) => (
                <div>
                  <md-list-item interactive onClick={() => this.equipmentDetail.emit(`${this.ambulanceId}:${equipment.id}`)}>
                    {equipment.name}
                  </md-list-item>
                  {idx < this.equipmentList.length - 1 ? <md-divider></md-divider> : null}
                </div>
              ))}
            </md-list>

            <div class="actions">
              <md-filled-button class="action-button" onClick={() => this.equipmentDetail.emit(`${this.ambulanceId}:`)}>
                Pridať
              </md-filled-button>
              <md-outlined-button class="action-button" onClick={() => this.goBack.emit('')}>
                Späť
              </md-outlined-button>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
