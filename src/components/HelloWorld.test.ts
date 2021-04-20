import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/vue';

import HelloWorld from './HelloWorld.vue';

describe('HelloWorld', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3';
    render(HelloWorld, { props: { msg } });

    const element = screen.getByText(msg);
    expect(element).toBeInTheDocument();
  });
});
