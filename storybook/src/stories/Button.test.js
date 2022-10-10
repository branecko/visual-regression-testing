import { Button } from './Button';
import renderer from 'react-test-renderer'

test('Button renders correctly', () => {
  const btn = renderer
    .create(<Button label={'Submit'} />)
    .toJSON();
  expect(btn).toMatchSnapshot();
});