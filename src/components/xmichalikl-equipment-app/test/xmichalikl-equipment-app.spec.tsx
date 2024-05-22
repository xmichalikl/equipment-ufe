import { newSpecPage } from '@stencil/core/testing';
import { XmichaliklEquipmentApp } from '../xmichalikl-equipment-app';

describe('xmichalikl-equipment-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmichaliklEquipmentApp],
      html: `<xmichalikl-equipment-app></xmichalikl-equipment-app>`,
    });

    const app = page.rootInstance as XmichaliklEquipmentApp;
    const expectedPatients = app?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
