import Vue from 'vue';
import { mount } from '@vue/test-utils';

/*
karma - "test runner", sets up test environment, loads config, loads plugins (ie coverage) and assertion libraries, finds all the .spec.js files, and runs the 'describe' and 'it' examples defined in our specs, and outputs a report on the results; also watches for changes

Alternatives:
- Jest (Facebook)
- Jasmine

Chai - "assertion library", gives us the test assertion syntax like expect(x).to.equal(y)
Alternatives:
- mocha

vue-test-utils - adapter for mounting components within a headless /test browser environment, and also gives DOM query methods for finding elements within the "wrapped" DOM, eg.
  wrapper.findAll('option)
It also us "interact" with our mounted component by triggering clicks and other user events, and lets us wait for the results

sinon - "mock library", i.e. it lets us create mocks/stubs so we can provide fake versions of functions like "this.$router.push()" which our component is expecting to exist, and make assertions about how those functions were called - a.k.a "mocking"


*/

import FlightSearch from '@/components/FlightSearch';
import sinonChai from 'sinon-chai';

describe('FlightSearch.vue', () => {

  it('should render a search form', () => {

    // Mount our component into the headless browser DOM
    const wrapper = mount(FlightSearch)

    // Make assertions about what the component should
    // show on the screen

    // console.log( wrapper.text() );

    expect( wrapper.text() ).to.contain('Search Flights')
    // expect( wrapper.find('h1').text() ).to.contain('Search Flights')

    const options = wrapper.findAll('option')

    expect( options.at(1).text() ).to.equal('Sydney')
    expect( options.length ).to.equal( 10 )

    const button = wrapper.find('button')
    expect( button.element.tagName ).to.equal('BUTTON')

  })

  it('should navigate to the search results route', async () => {


    const $router = {

      push: sinon.spy() // a spy is a mock (fake function) that keeps track of whether/how it was called
    }

    const wrapper = mount(FlightSearch, {
      mocks: {
        // Vue-test-utils lets us define whatever faked methods
        // or properties we want to make available to the
        // component instance (the 'this' variable)
        $router: $router // push
         // $router
      } // mocks
    });
    // const options = wrapper.findAll('option');
    const button = wrapper.find('button')

    // Select from the dropdowns, and WAIT until VUE has had
    // a change to update its state - the .trigger()
    // method returns a promise. so we want to wait until
    // the promise resolves before we continue testing the
    // page
    // await options.at(1).setSelected(); // Select origin Syd
    // await options.at(7).setSelected(); // Select dest MEL


    await wrapper.find('select.origin option[value="SYD"]').setSelected()
    
    await wrapper.find('select.destination option[value="MEL"]').setSelected()

    await button.trigger('click');

    // Assert that the component did actually run the router 
    // push function when the form submit button was clicked
    // this is the real purpose of the mocked sinon.spy()-
    // to let us check that the function was called, and also
    // check the arguments it was given
    // expect( $router.push ).to.have.been.called;

    expect( $router.push ).to.have.been.calledWith({
      name: 'SearchResults',
      params: {
        origin: 'SYD',
        destination: 'MEL'
      }
    })

    // What should happen after that?
    // We need to check that the component tried to navigate to
    // a new frontend route, AND that the route params use the 
    // origin and destination we selected above from the dropdowns

  });

  it('should show a validation error instead of pushing to the search results when fields are left blank', async () => {

    const wrapper = mount(FlightSearch)

    const button = wrapper.find('button')
    
    await wrapper.find('select.origin option[value=""]').setSelected()

    await wrapper.find('select.destination option[value=""]').setSelected()
    
    await button.trigger('click');
    
    // .error class div should appear after button is clicked
    const errorMessage = wrapper.find('.error')

    // expect div with error message to show
    expect(errorMessage.text()).to.equal("Please select origin and destination")
  })

}) // describe FlightSearch
