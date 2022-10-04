
import vue from 'vue';
import { mount } from '@vue/test-utils'; // @vue getting from node folders

/*
    karma - 'test runner', sets up test environment, loads config, loads plugins (i.e. coverage)and assertion libraries, finds all the .spec.js files, and runs the 'describe' and 'it' examples defined in our specs and outpuets a report on the results; also watches for changes

    Alternatives:
    - Jest (Facebook)
    - Jasmine

    chai - 'assertion library', gives us the test assertion syntac like expect(x).to.equal(y)
            Alternatives:
            - mocha

    vue-test-utils - adapter for mounting components within a headless/test browser environement, and also gives DOM query methods for finding elements within the 'wrapped' DOM, e.g.
        wrapper.findAll('option')
    It also us 'interact' with our mounted component by triggering clicks and other user events, and lets us wait for the results

    sinon - 'mock libary', i.e. it lets us create mocks/stubs so we can provide fake versions of functions like 'this.&router.push()' which our component is expecting to exist, and make assertions about how those functions were called - a.k.a. 'mocking'



*/



import FlightSearch from '@/components/FlightSearch'; //@ means getting top of the source tree like ../../../
import sinonChai from 'sinon-chai';



describe('FlightSearch.vue', () => {

    // when im at this component, does it work?
    it('should render a search form', () => {
        // this is not testing on user interaction yet
        // wrapper is provided by the mount
        // Mount our component into the headless browser DOM
        const wrapper = mount(FlightSearch)

        // we are suppose to treat the component as a blackbox. 
        // make assertions about the component should show on the screen 
        console.log(wrapper.text());

        expect(wrapper.text()).to.contain('Search Flights') // this is a smoke test. a very simple test
        // expect(wrapper.text('h1')).to.contain('Search Flights') 

        const options = wrapper.findAll('option'); // e.g. document.querySelectorAll()
        expect(options.at(1).text()).to.equal('Sydney')
        expect(options.length).to.equal(10); // e.g. 10 options in total

        const button = wrapper.find('button');
        expect(button.element.tagName).to.equal('BUTTON') // .element - the raw DOM node. how you can get into DOM node

    })

    it('should navigate to the search results route', async () => {
        // test the component as a black box
        // inputs (user events)  through component (a black box) and what's the outputs (pushes a route)
        // NEVER ask what's in state in the component! It's the internal documentation detail

        // faking the router because real router will be tedious. we are only testing partial stuff


        const $router = {
            push: sinon.spy()
            // a spy is a moke (fake function) that keeps track of whether/how it was called. 
        }

        const wrapper = mount(FlightSearch, {
            mocks: {
                // Vue-test-utils lets us define whatever faked methods
                // or properties we want to make available to the 
                // component instance ( the 'this' variable)
                // $router: {
                //     push: function (args) {
                //         console.log('FAKE ROUTER PUSH HAPPENED!', args);
                //     }
                // }
                $router: $router // use the sinon.spy() from above
            }
        });
        // const options = wrapper.findAll('option');
        const button = wrapper.find('button');
        // Select from the dropdowns, and WATI until Vue has had
        // a change to update its state - the .trigger()
        // method returns a promise, so we want to wait until
        // the promise resolves before we continue testing the page
        // await options.at(1).setSelected(); // Select origin SYD
        // await options.at(7).setSelected(); // Select dest MEL

        // select.origin is a css selecter
        // document.querySelector('select.origin option')

        await wrapper.find('select.origin option[value="SYD"]').setSelected();

        await wrapper.find('select.destination option[value="MEL"]').setSelected();


        await button.trigger('click');
        // assert tthat the component did actually run the router
        // push function when the form submit button was called
        // this is the real purpose of the mocked sinon spy() = 
        // to let us check that the function was called, and also
        // check the arguments it was given 
        // expect($router.push).to.have.been.called;

        expect($router.push).to.have.been.calledWith({
            name: 'SearchResults',
            params: {
                origin: 'SYD',
                destination: 'MEL'
            }
        })

        // what should happen after that?
        // we need to check that the component try to navigate to a new frontend route
        // and that the route params use the origin and destination we selected 
        // above from the dropdowns. 

    })

    it('should show a validation error instead of pushing to the search results when field origin is left blank', async () => {
        const wrapper = mount(FlightSearch)

        await wrapper.find('select.origin option[value=""]').setSelected();
        // await wrapper.find('select.destination option[value=""]').setSelected();

        const button = wrapper.find('button');

        await button.trigger('click');

        expect(wrapper.classes()).toContain('error')
        expect(wrapper.classes('error')).toBe(true)

    })

})