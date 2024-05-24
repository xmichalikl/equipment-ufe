import { Component, EventEmitter, Host, Prop, Event, h, State } from '@stencil/core';
import { Equipment, EquipmentApiFactory } from 'src/api/equipment';

@Component({
  tag: 'xmichalikl-equipment-detail',
  styleUrl: 'xmichalikl-equipment-detail.css',
  shadow: true,
})
export class XmichaliklEquipmentDetail {
  @Prop() apiBase: string;

  @Prop() ambulanceId: string;
  @Prop() equipmentId: string;

  @State() errorMessage: string;
  @State() valid: boolean;

  @Event({ eventName: 'equipment-update' }) equipmentUpdate: EventEmitter<string>;

  private equipment: Equipment;

  private async componentWillLoad() {
    this.equipment = await this.getEquipmentAsync();
  }

  private async getEquipmentAsync(): Promise<Equipment> {
    if (!this.equipmentId) {
      this.valid = false;
      return {
        id: '@new',
        name: '',
        availability: '',
        lastInspectionDate: new Date().toISOString(),
        technicalCondition: 1,
        inspectionInterval: 1,
      };
    } else {
      try {
        const response = await EquipmentApiFactory(undefined, this.apiBase).getEquipmentById(this.ambulanceId, this.equipmentId);
        if (response.status < 299) {
          this.valid = true;
          return response.data;
        } else {
          this.errorMessage = `Cannot retrieve details of equipment: ${response.statusText}`;
        }
      } catch (err: any) {
        this.errorMessage = `Cannot retrieve details of equipment: ${err.message || 'unknown'}`;
      }
    }
  }

  private async updateEquipment() {
    try {
      const api = await EquipmentApiFactory(undefined, this.apiBase);
      const response = this.equipmentId
        ? await api.updateEquipmentById(this.ambulanceId, this.equipmentId, this.equipment)
        : await api.createEquipment(this.ambulanceId, this.equipment);

      console.log(response);
      if (response.status < 299) {
        //this.equipmentUpdate.emit(this.ambulanceId);
      } else {
        this.errorMessage = `Cannot store entry: ${response.statusText}`;
      }
    } catch (err: any) {
      this.errorMessage = `Cannot store entry: ${err.message || 'unknown'}`;
    }
  }

  private async deleteEquipment() {
    try {
      const response = await EquipmentApiFactory(undefined, this.apiBase).deleteEquipmentById(this.ambulanceId, this.equipmentId);
      console.log(response);
      if (response.status < 299) {
        //this.equipmentUpdate.emit(this.ambulanceId);
      } else {
        this.errorMessage = `Cannot delete entry: ${response.statusText}`;
      }
    } catch (err: any) {
      this.errorMessage = `Cannot delete entry: ${err.message || 'unknown'}`;
    }
  }

  private handleInput(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    return target.value;
  }

  private checkValidity() {
    let validForm = true;
    Object.values(this.equipment).forEach(value => {
      if (!value) validForm = false;
    });
    this.valid = validForm;
  }

  render() {
    return (
      <Host>
        {this.equipmentId ? <h1 class="title">Podrobnosti vybavenia</h1> : <h1 class="title">Pridanie vybavenia</h1>}
        {this.errorMessage ? (
          <h3 class="error">{this.errorMessage}</h3>
        ) : !this.equipment ? (
          <h3 class="info">Načítavanie...</h3>
        ) : (
          <div>
            <h3 class="subtitle"> {this.equipment.id === '@new' ? '(Nové vybavenie)' : `(Vybavenie ${this.equipment.id})`}</h3>
            <form onInput={() => this.checkValidity()}>
              <div class="form-field">
                <md-outlined-text-field
                  label="Názov vybavenia"
                  required
                  value={this.equipment.name}
                  onInput={(ev: InputEvent) => {
                    this.equipment.name = this.handleInput(ev);
                  }}
                ></md-outlined-text-field>
              </div>

              <div class="form-field">
                <md-outlined-select
                  label="Dostupnosť"
                  required
                  value={this.equipment.availability}
                  onInput={(ev: InputEvent) => {
                    this.equipment.availability = this.handleInput(ev);
                  }}
                >
                  <md-select-option value="available">
                    <div slot="headline">Dostupné</div>
                  </md-select-option>
                  <md-select-option value="maintenance">
                    <div slot="headline">Údržba</div>
                  </md-select-option>
                  <md-select-option value="discarded">
                    <div slot="headline">Vyradené</div>
                  </md-select-option>
                </md-outlined-select>
              </div>

              <div class="form-field">
                <md-outlined-text-field
                  label="Dátum poslednej kontroly"
                  type="date"
                  required
                  valueAsDate={new Date(this.equipment.lastInspectionDate)}
                  onInput={(ev: InputEvent) => {
                    this.equipment.lastInspectionDate = new Date(this.handleInput(ev)).toISOString();
                  }}
                ></md-outlined-text-field>
              </div>

              <div class="form-field">
                <div class="form-row">
                  <label>Technický stav</label>
                  <md-slider
                    labeled
                    ticks
                    step="1"
                    min="1"
                    max="5"
                    value={this.equipment.technicalCondition}
                    onInput={(ev: InputEvent) => {
                      this.equipment.technicalCondition = parseInt(this.handleInput(ev));
                    }}
                  ></md-slider>
                </div>
              </div>

              <div class="form-field">
                <div class="form-row">
                  <label>Interval kontroly</label>

                  <div class="form-radios">
                    <div class="form-row">
                      <md-radio
                        value="1"
                        touch-target="wrapper"
                        checked={this.equipment.inspectionInterval === 1}
                        onInput={() => {
                          this.equipment.inspectionInterval = 1;
                        }}
                      ></md-radio>
                      <label>1 mesiac</label>
                    </div>

                    <div class="form-row">
                      <md-radio
                        value="3"
                        touch-target="wrapper"
                        checked={this.equipment.inspectionInterval === 3}
                        onInput={() => {
                          this.equipment.inspectionInterval = 3;
                        }}
                      ></md-radio>
                      <label>3 mesiace</label>
                    </div>

                    <div class="form-row">
                      <md-radio
                        value="6"
                        touch-target="wrapper"
                        checked={this.equipment.inspectionInterval === 6}
                        onInput={() => {
                          this.equipment.inspectionInterval = 6;
                        }}
                      ></md-radio>
                      <label>6 mesiacov</label>
                    </div>

                    <div class="form-row">
                      <md-radio
                        value="12"
                        touch-target="wrapper"
                        checked={this.equipment.inspectionInterval === 12}
                        onInput={() => {
                          this.equipment.inspectionInterval = 12;
                        }}
                      ></md-radio>
                      <label>12 mesiacov</label>
                    </div>
                  </div>
                </div>
              </div>

              {this.equipmentId ? (
                <div class="form-actions">
                  <md-filled-button class="form-button" disabled={!this.valid} onClick={() => this.updateEquipment()}>
                    Uložiť
                  </md-filled-button>
                  <md-filled-tonal-button class="form-button" onClick={() => this.deleteEquipment()}>
                    Odstrániť
                  </md-filled-tonal-button>
                  <md-outlined-button class="form-button" onClick={() => this.equipmentUpdate.emit(this.ambulanceId)}>
                    Zrušiť
                  </md-outlined-button>
                </div>
              ) : (
                <div class="form-actions">
                  <md-filled-button class="form-button" disabled={!this.valid} onClick={() => this.updateEquipment()}>
                    Vytvoriť
                  </md-filled-button>
                  <md-outlined-button class="form-button" onClick={() => this.equipmentUpdate.emit(this.ambulanceId)}>
                    Zrušiť
                  </md-outlined-button>
                </div>
              )}
            </form>
          </div>
        )}
      </Host>
    );
  }
}
