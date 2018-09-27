import React from 'react'
import { myWordsListItem } from './myWordsListItem'
import { shallow } from 'enzyme'

const props= {word: {word: "Enzyme"}}

describe('Word List Item', ()=>{
  const wrapper = shallow(<myWordsListItem {...props} />)
  it('Displays the current word', ()=> {
    expect(wrapper.find('div')).toEqual(1)
  })
})
