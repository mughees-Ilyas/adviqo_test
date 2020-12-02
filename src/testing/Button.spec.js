import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import {Button} from "../styled/Button";

test('button test with create', () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('button check with render', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
})