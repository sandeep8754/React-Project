import { render } from '@testing-library/react';
import Greeting from './Greeting';
import {  create } from 'react-test-renderer';
test('matches the snapshot', () => {
   const component = create(<Greeting name="john"/>)
   
   let tree = component.toJSON();
    expect (tree).toMatchSnapshot();
});
