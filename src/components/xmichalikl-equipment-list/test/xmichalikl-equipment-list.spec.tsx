import { newSpecPage } from '@stencil/core/testing';
import { XmichaliklEquipmentList } from '../xmichalikl-equipment-list';

describe('xmichalikl-equipment-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmichaliklEquipmentList],
      html: `<xmichalikl-equipment-list></xmichalikl-equipment-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xmichalikl-equipment-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmichalikl-equipment-list>
    `);
  });
});
