import { newE2EPage } from '@stencil/core/testing';

describe('xmichalikl-equipment-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmichalikl-equipment-list></xmichalikl-equipment-list>');

    const element = await page.find('xmichalikl-equipment-list');
    expect(element).toHaveClass('hydrated');
  });
});
