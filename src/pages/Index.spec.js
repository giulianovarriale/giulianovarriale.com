import { shallowMount } from '@vue/test-utils'
import Index from './Index.vue';

describe('Index', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(Index);
    expect(wrapper.element).toMatchSnapshot();
  });
});
