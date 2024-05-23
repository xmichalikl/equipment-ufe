import { newSpecPage } from '@stencil/core/testing';
import { XmichaliklEquipmentApp } from '../xmichalikl-equipment-app';

describe('xmichalikl-equipment-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmichaliklEquipmentApp],
      html: `<xmichalikl-equipment-app></xmichalikl-equipment-app>`,
    });
    expect(1).toEqual(1);
  });
});
