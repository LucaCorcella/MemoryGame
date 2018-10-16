import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mount } from 'enzyme';

import App from './App';
import CardGrid from './components/cardGrid';
import Card from './components/card';
import Header from './components/header'
import generateCards from './data/cards';


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe("app and Header component", () => {
    it('renders three CardGrid components', () => {
        const wrapper = shallow(<App />);
        const wrapper1 = shallow(<Header />);

    });


    it('cards grid test', () => {
        let cards = generateCards();
        const wrapper = shallow(<CardGrid cards={cards} />);
    });


    it('simulates click flip events', () => {
        const onButtonClick = sinon.spy();
        const wrapper = mount((
            <Card key={1} card={{
                id : 0,
                rel : 1,
                flipped : false,
                url : `https://qph.fs.quoracdn.net/main-qimg-3879c19f1047fbbe32fa0f8c835a1b3b-c`,
                name:'massive attack cover',
                discovered : false
            }} flip={onButtonClick} />
        ));

    });
});
