import Vue from "vue";
import { mount } from '@vue/test-utils';

import FlightSearch from '@/components/FlightSearch';
import sinon from "sinon";

/*
    * Karma is our test runner--it sets up ther test environment., loads the config, plugins and assertion libraries, finds all the .spec.js files and runs the decribe and 'it' examples defined in our specs, and outpus
    a report on the seults; also watches for changes

        Alternatives: 
        - Jest
        - Jasmine

    *Chai is an 'assertion library', which gives us the test assertion syntax like expect(x).to.eqaul(y)

    *vue-test-utils - is an adapter for mounting components within a headless / test browser environemnt, and also gives the DOM query methonds
    for finiding elements within the wrapped DOM e.gg.
        wrapper.findAll('option')
    It also allows us to 'interact' with our mouted component
    by trigggering clicks and other user events
    and lets us wait for the results.



    *Sinon is a 'mock library' , allowing us to make mock/stubs  so we can provide fake versions of fucntions like
    $this.router.push(), which our component is epexcting
    to exist, and make assertions about how those functiuons were called -a.k.a "mocking"
*/


describe('FlightSearch.vue', () => {

    


    it('should render a search form', () => {

        //Mount our component on to the DOM
        const wrapper = mount(FlightSearch)

        //Make assertions about what the component should show on the screen
        expect( wrapper.text() ).to.contain('Search Flights'); // 'smoke test'

        //wrapper.text prints the text from a file.
        // you can also use wrapper.html
        const options = wrapper.findAll('option');
        // expect( options.at(1).text()).to.equal('SYD')
        // expect( options.at(7).text()).to.equal('MEL')
        expect(options.length ).to.equal(10);

            

        const button = wrapper.find('button');
        //the element below refers to the DOM node item
        expect( button.element.tagName).to.equal('BUTTON')

    });

    it('should navigate to the search results route', async() => {

        const $router = {
            push: sinon.spy() //a spy is a mock fake function that keeps track of whether it was called, and what arguments it was called with.
        
        
        }; //$router


        const wrapper = mount(FlightSearch, {
            mocks: {
                //Vue-test-utils lets us define whatever faked ('mocked') 
                //methods or properties we wat to make available
                //to the component instance (the 'this' variable)
                $router: $router //the sinon object from above
            }
         });

        //Select from the dropdows, and WAIT until Vue has 
        //had a chance to uppdtate its state --the .triger()
        //methond returns a promise, so we ant to wait
        //until the promise resolves before we continue to 
        //test the page

        // const wrapper = mount(FlightSearch);
        // const options = wrapper.findAll('option');
        // await options.at(1).setSelected() //this returns a promise
        // await options.at(5).setSelected() //select dest MEL

        //the await is needed here because
        //we have to wait for the selection 
        //to be made (from the dropdown)
        await wrapper.find('select.origin option[value="SYD"]').setSelected()

        await wrapper.find('select.destination option[value="MEL"]').setSelected() //setSelected is acting as though a user selected it.


        const button = wrapper.find('button')
        await button.trigger('click');

        //assert that the mocked router 
        //has been called once
        
        // expect( $router.push).to.have.been.called;
        expect( $router.push).to.have.been.calledWith({
            name: 'SearchResults',
            params: {
                origin: 'SYD',
                destination: 'MEL'
            }

        });



        //What should check that the componenet tried to 
        // navigate to a new frontend route, and that
        //the route params use the origin and destination
        // we selected above .

        //Here we need to mock the router. 


    });

    //HW: 
    it('should show a validation error instead of pushing to a route when fields are left blank', async()=> {
        const $router = {
            push: sinon.spy() //a spy is a mock fake function that keeps track of whether it was called, and what arguments it was called with.
        
        
        }; //$router


        const wrapper = mount(FlightSearch, {
            mocks: {
                //Vue-test-utils lets us define whatever faked ('mocked') 
                //methods or properties we wat to make available
                //to the component instance (the 'this' variable)
                $router: $router //the sinon object from above
            }
         });

        //Select from the dropdows, and WAIT until Vue has 
        //had a chance to uppdtate its state --the .triger()
        //methond returns a promise, so we ant to wait
        //until the promise resolves before we continue to 
        //test the page

        // const wrapper = mount(FlightSearch);
        // const options = wrapper.findAll('option');
        // await options.at(1).setSelected() //this returns a promise
        // await options.at(5).setSelected() //select dest MEL

        //the await is needed here because
        //we have to wait for the selection 
        //to be made (from the dropdown)
        await wrapper.find('select.origin option[value=""]').setSelected()

        await wrapper.find('select.destination option[value="MEL"]').setSelected() //setSelected is acting as though a user selected it.


        const button = wrapper.find('button')
        await button.trigger('click');
        
        expect( $router.push).to.not.have.been.called

    });


}) //describe Flightsearch