import { newSpecPage } from '@stencil/core/testing';
import { XmichaliklEquipmentApp } from '../xmichalikl-equipment-app';

describe('xmichalikl-equipment-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmichaliklEquipmentApp],
      html: `<xmichalikl-equipment-app></xmichalikl-equipment-app>`,
    });
    expect(page.root).toEqualHtml(`
      <xmichalikl-equipment-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmichalikl-equipment-app>
    `);
  });
});
