import { newE2EPage } from '@stencil/core/testing';

describe('xmichalikl-equipment-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmichalikl-equipment-app></xmichalikl-equipment-app>');

    const element = await page.find('xmichalikl-equipment-app');
    expect(element).toHaveClass('hydrated');
  });
});
