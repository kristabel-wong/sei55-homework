import Vue from "vue";
import { mount } from '@vue/test-utils';
import axios from 'axios';
import FlightSearchResults from '@/components/FlightSearchResults';
import sinon from "sinon";

//promise.resolve({ data: {} })

const BASE_URL = 'http://localhost:3000';

describe( "FlightSearchResults.vue", () => {

    it('should render without errors', ()=> {
        
        //Mount the specific component
        const wrapper = mount(FlightSearchResults)

        //Check whether the error message has fired
        expect( wrapper.text() ).to.not.contain('We were unable to process your flights.');

        //Check whether the page is displaying 
        expect( wrapper.text() ).to.contain('Flight Search Results')

    })


    it('should render a list of matching flights', async() => {
        
        
       ;
        //This replaces axios.get with stub
        
           const stub = sinon.stub(axios, "get").callsFake(()=> Promise.resolve({status: 200}));

        

        afterEach(() =>{
            stub.restore()
        })

       

       

        const wrapper = mount(FlightSearchResults, {
            mocks: {
                //Vue-test-utils lets us define whatever faked ('mocked') 
                //methods or properties we want to make available
                //to the component instance (the 'this' variable)
                axios: stub //the sinon object from above
            },
            propsData: {
                origin: 'SYD',
                destination: 'MEL'
        
            },

            data() {
                return {
                    flights: [{
                        airplane: {
                            name: 'Buzz'
                        },
                        origin: 'SYD',
                        destination: 'MEL',
                        flight_number: 'BA256', 
                        departure_date_formatted: "01 March 2022",
                        id: 1

                    }],
                    loading: false
                }
            }
        });

       
        
        //Does the page make an axios request on mount?
        expect(stub).to.have.been.called

        

        //1. It should not show a loading message once the data has arrived
        // expect(wrapper.text()).to.not.include("Loading")

        expect(wrapper.text()).to.not.include("Loading")

      
         

        // 2. It should call our faked axios.get() with a url that includes the origin and destination
        expect(stub).to.have.been.calledWith('http://localhost:3000/flights/search/SYD/MEL')
        
        

        //3. It should show a div for each flight which includes the flight number
        // Promise.resolve(stub).then(
        expect(wrapper.text()).to.include("BA256")
        // )

        //unwrap the spy
        
        
        
    });

    it('should show an error message if the server responds with an error', async() => {
         
        // //This replaces axios.get with stub
        
        // const errorStub =  sinon.stub(axios, "get").resolves({status: 500})

        //Or
        const errorStub = sinon.stub(axios, "get").callsFake(()=> Promise.resolve({status: 500}));


        //this shouldn't matter, because the stub will always return a 500??
        const test = await axios.get('http://localhost:3000/flights/search/SYD/MMM')

              

       

        // afterEach(() =>{
        //     errorStub.restore()
        // })


        const wrapper = mount(FlightSearchResults, {
            mocks: {
                axios: errorStub
            }
        })

        //check that the error message is showing.

        // assert.deepEqual(test, {status:500})

        //the 500 error in the stub on mount should trigger err??
        expect(wrapper.text()).to.include("We were unable to process your flights")



    })

    it('should push the clicked flight result to the router as a show route, ', ()=> {})



}) //end FlightSearchResult