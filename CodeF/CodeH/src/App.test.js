

import Adapter from 'enzyme-adapter-react-16';
import {configure,shallow} from 'enzyme';
import React from 'react';
import App from './App';
configure({adapter:new Adapter()});
describe("<App/>",()=>{
    it("Check <App/> is Present",
    ()=>{   const wrapper = shallow(<App/>);
expect(wrapper.find(App));
});

it("Check <App/> Props is Present",()=>{    
    const wrapper = shallow(<App a="5" b="2"/>);


expect(wrapper.contains(<h2>Sum is 10</h2>));
});

});
