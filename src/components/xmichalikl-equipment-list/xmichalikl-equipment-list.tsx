import { Component, Event, EventEmitter, Host, h } from '@stencil/core';

@Component({
  tag: 'xmichalikl-equipment-list',
  styleUrl: 'xmichalikl-equipment-list.css',
  shadow: true,
})
export class XmichaliklEquipmentList {
  @Event({ eventName: 'equipment-detail' }) equipmentDetail: EventEmitter<string>;
  @Event({ eventName: 'equipment-add' }) equipmentAdd: EventEmitter<string>;

  equipmentList = [...new Array(2)];

  render() {
    return (
      <Host>
        <div class="title">
          <h1>Zoznam vybavenia</h1>
          <h3>(Ambulancia 1)</h3>
        </div>

        <md-list>
          {this.equipmentList.map((el, idx) => (
            <div>
              <md-list-item interactive onClick={() => this.equipmentDetail.emit(`equipment-${idx + 1}`)}>
                {`Vybavenie ${idx + 1}`}
              </md-list-item>
              {idx < this.equipmentList.length - 1 ? <md-divider></md-divider> : null}
            </div>
          ))}
        </md-list>

        <div class="actions">
          <md-filled-button onClick={() => this.equipmentDetail.emit('')}>Pridať</md-filled-button>
        </div>
      </Host>
    );
  }
}
