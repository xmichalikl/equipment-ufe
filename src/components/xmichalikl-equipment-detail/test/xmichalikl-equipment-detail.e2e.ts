import { newE2EPage } from '@stencil/core/testing';

describe('xmichalikl-equipment-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmichalikl-equipment-detail></xmichalikl-equipment-detail>');

    const element = await page.find('xmichalikl-equipment-detail');
    expect(element).toHaveClass('hydrated');
  });
});
