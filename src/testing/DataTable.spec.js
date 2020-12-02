import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import DataTable from "../components/DataTable";

test('table test with create', () => {
    const tree = renderer.create(<DataTable title="Current Advisor Table"
                                            columns={
                                                [
                                                    { label: 'Name',  prop: 'name'},
                                                    { label: 'Status',  prop: 'status' },
                                                    { label: 'Language',  prop: 'language' },
                                                    { label: 'Reviews',  prop: 'reviews' }

                                                ]
                                            }
                                            rows={[]}/>).toJSON()
    expect(tree).toMatchSnapshot()
})

