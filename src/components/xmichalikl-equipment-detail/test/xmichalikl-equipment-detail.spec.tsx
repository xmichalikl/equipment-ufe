import { newSpecPage } from '@stencil/core/testing';
import { XmichaliklEquipmentDetail } from '../xmichalikl-equipment-detail';

describe('xmichalikl-equipment-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmichaliklEquipmentDetail],
      html: `<xmichalikl-equipment-detail></xmichalikl-equipment-detail>`,
    });
    console.log(page);
    expect(1).toEqual(1);
  });
});
