import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'xmichalikl-equipment-detail',
  styleUrl: 'xmichalikl-equipment-detail.css',
  shadow: true,
})
export class XmichaliklEquipmentDetail {
  @Prop() equipmentId: string;
  equipment: any = {};

  componentWillLoad() {
    if (this.equipmentId) {
      this.equipment = {
        name: 'Svetlo',
        availability: 'available',
        lastInspectionDate: new Date(),
        technicalCondition: 3,
        inspectionInterval: 6,
      };
    }
  }

  handleInput(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    return target.value;
  }

  render() {
    return (
      <Host>
        <div class="title">
          {this.equipmentId ? <h1>Podrobnosti vybavenia</h1> : <h1>Pridanie vybavenia</h1>}
          <h3>(Ambulancia 1)</h3>
        </div>

        <div id="equipment-detail-form">
          <div class="form-field">
            <md-outlined-text-field
              label="Názov vybavenia"
              value={this.equipment?.name}
              onInput={(ev: InputEvent) => {
                this.equipment.name = this.handleInput(ev);
              }}
            ></md-outlined-text-field>
          </div>

          <div class="form-field">
            <md-outlined-select
              value={this.equipment?.availability}
              label="Dostupnosť"
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
              valueAsDate={this.equipment?.lastInspectionDate}
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
                value={this.equipment?.technicalCondition}
                onInput={(ev: InputEvent) => {
                  this.equipment.technicalCondition = this.handleInput(ev);
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
                    name="animals"
                    value="1"
                    touch-target="wrapper"
                    checked={this.equipment?.inspectionInterval === 1}
                    onInput={() => {
                      this.equipment.inspectionInterval = 1;
                    }}
                  ></md-radio>
                  <label>1 mesiac</label>
                </div>

                <div class="form-row">
                  <md-radio
                    name="animals"
                    value="3"
                    touch-target="wrapper"
                    checked={this.equipment?.inspectionInterval === 3}
                    onInput={() => {
                      this.equipment.inspectionInterval = 3;
                    }}
                  ></md-radio>
                  <label>3 mesiace</label>
                </div>

                <div class="form-row">
                  <md-radio
                    name="animals"
                    value="6"
                    touch-target="wrapper"
                    checked={this.equipment?.inspectionInterval === 6}
                    onInput={() => {
                      this.equipment.inspectionInterval = 6;
                    }}
                  ></md-radio>
                  <label>6 mesiacov</label>
                </div>

                <div class="form-row">
                  <md-radio
                    name="animals"
                    value="12"
                    touch-target="wrapper"
                    checked={this.equipment?.inspectionInterval === 12}
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
              <md-filled-button class="form-button">Uložiť</md-filled-button>
              <md-filled-tonal-button class="form-button">Odstrániť</md-filled-tonal-button>
            </div>
          ) : (
            <div class="form-actions">
              <md-filled-button class="form-button" onClick={() => {}}>
                Vytvoriť
              </md-filled-button>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
