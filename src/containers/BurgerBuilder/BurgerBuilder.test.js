import React from "react";
import { BurgerBuilder } from "./BurgerBuilder";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import buildControls from "../../components/Burger/BuildControls/BuildControls";
configure({ adapter: new Adapter() });
describe("<BurgerBulder/>,", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });

  it("should render <BuildControls/> when receiving ingredients", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(buildControls)).toHaveLength(1);
  });
});