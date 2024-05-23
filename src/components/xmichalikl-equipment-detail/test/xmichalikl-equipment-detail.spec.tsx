import { newSpecPage } from '@stencil/core/testing';
import { XmichaliklEquipmentDetail } from '../xmichalikl-equipment-detail';

describe('xmichalikl-equipment-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmichaliklEquipmentDetail],
      html: `<xmichalikl-equipment-detail></xmichalikl-equipment-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <xmichalikl-equipment-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmichalikl-equipment-detail>
    `);
  });
});
