import { newSpecPage } from '@stencil/core/testing';
import { XmichaliklAmbulanceList } from '../xmichalikl-ambulance-list';

describe('xmichalikl-ambulance-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmichaliklAmbulanceList],
      html: `<xmichalikl-ambulance-list></xmichalikl-ambulance-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xmichalikl-ambulance-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmichalikl-ambulance-list>
    `);
  });
});
