import { newSpecPage } from '@stencil/core/testing';
import { XmichaliklAmbulanceList } from '../xmichalikl-ambulance-list';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Ambulance } from 'src/api/equipment';

describe('xmichalikl-ambulance-list', () => {
  const sampleEntries: Ambulance[] = [
    {
      id: '12345',
      name: 'Ambulancia 1',
      equipment: [],
    },
    {
      id: '12345',
      name: 'Ambulancia 2',
      equipment: [],
    },
  ];

  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });
  afterEach(() => {
    mock.reset();
  });

  it('renders sample entries', async () => {
    mock.onGet().reply(200, sampleEntries);

    const page = await newSpecPage({
      components: [XmichaliklAmbulanceList],
      html: `<xmichalikl-ambulance-list api-base="http://test/api"></xmichalikl-ambulance-list>`,
    });

    const ambulanceList = page.rootInstance as XmichaliklAmbulanceList;
    const expectedAmbulances = ambulanceList?.ambulanceList?.length;
    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    // use sample entries as expectation
    expect(expectedAmbulances).toEqual(sampleEntries.length);
    expect(items.length).toEqual(expectedAmbulances);
  });

  it('renders error message on network issues', async () => {
    mock.onGet().networkError();
    const page = await newSpecPage({
      components: [XmichaliklAmbulanceList],
      html: `<xmichalikl-ambulance-list api-base="http://test/api"></xmichalikl-ambulance-list>`,
    });

    const ambulanceList = page.rootInstance as XmichaliklAmbulanceList;
    const expectedAmbulances = ambulanceList?.ambulanceList?.length;

    const errorMessage = page.root.shadowRoot.querySelectorAll('.error');
    const items = page.root.shadowRoot.querySelectorAll('md-list-item');

    expect(errorMessage.length).toBeGreaterThanOrEqual(1);
    expect(expectedAmbulances).toEqual(0);
    expect(items.length).toEqual(expectedAmbulances);
  });
});
