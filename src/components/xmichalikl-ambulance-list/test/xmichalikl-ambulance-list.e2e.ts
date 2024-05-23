import { newE2EPage } from '@stencil/core/testing';

describe('xmichalikl-ambulance-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmichalikl-ambulance-list></xmichalikl-ambulance-list>');

    const element = await page.find('xmichalikl-ambulance-list');
    expect(element).toHaveClass('hydrated');
  });
});
