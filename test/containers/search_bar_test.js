import { renderComponent , expect } from '../test_helper';
import SearchBar from '../../src/containers/search_bar';

describe('SearchBar' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchBar);
  });

  it('renders search input text field', () => {
    expect(component.find('input')).to.exist;
  });

  it('renders search submit button', () => {
    expect(component.find('button')).to.exist;
  });



});
