import Vue from 'vue';
import FlightSearchResults from '@/components/FlightSearchResults';
import { mount } from '@vue/test-utils';
import axios from 'axios'
import sinonChai from 'sinon-chai';

const BASE_URL = 'http://localhost:3000';

// TODO: how to import and fake axios here?
// remember that axios.get() returns not data, but a promise
// that RESOLVES to the data.... Promise.resolve({ data: {} })

const mockResults = [
  { flight_number: "BA256",
    id: 1, 
    airplane: { name: "747" }
  },
  { flight_number: "BA512",
    id: 2, 
    airplane: { name: "747" }
  }
]

sinon.stub(axios, 'get')
  // .withArgs(`${BASE_URL}/flights/search/SYD/MEL`)
  .returns(Promise.resolve({
    data: {mockResults}
  })
)

describe('FlightSearchResults', () => {

  it('should render without errors', () => {

    // mount component with mock props. must be propsData??
    const wrapper = mount(FlightSearchResults, {
      propsData: {
          origin: "SYD",
          destination: "MEL"
      }
    })

    expect(wrapper.props('origin')).to.equal('SYD')

    const heading = wrapper.find('h2')

    expect( heading.text() ).to.contain(`Search Results for SYD to MEL`)

  });

  it('should render a list of matching flights', () => {


    // 1. it should not show the loading message once the data has arrived
    // 2. it should call our faked axios.get with a URL that includes the origin and destination params passed from the search component
    // 3. it should show a div for each flight which includes the flight number

    // ALTERNATIVE ... ???
    // axios.get(SOME_URL).then(processResults)
    // expect ('processResults to whichever). () => {
      // const flights = [{}, {}]
      // Test the results (response) instead of the axios function
    //} Joel suggestion

    
    const wrapper = mount(FlightSearchResults, {
      propsData: {
        origin: "SYD",
        destination: "MEL"
      },

      data(){
        return{
          loading: false,
          flights: mockResults
        }
      }
    })

    expect(wrapper.classes('.loading')).to.equal(false)

    expect(axios.get).to.have.been.called
    expect(axios.get).to.have.been.calledWith(`${BASE_URL}/flights/search/SYD/MEL`)

    const searchResults = wrapper.findAll('router-link')
    // console.log(searchResults)
    expect(searchResults.length).to.equal(2)
    expect(searchResults.at(0).text()).to.equal("BA256")
    expect(searchResults.at(1).text()).to.equal("BA512")

  })

  it('should show an error message if the server responds with an error', () => {

    const wrapper = mount(FlightSearchResults, {
      
      data(){
        return{
          loading: false,
          error: !null
        }
      }
    })

    const errorDiv = wrapper.find('.error')
    expect(errorDiv.text()).to.equal('We were unable to process your flight search. Please try again shortly.')

  })

  it('should push the clicked flight results to the router as a show route', async () => {

    // const $router = {
    //   push: sinon.spy()
    // }

    const wrapper = mount(FlightSearchResults, {
      propsData: {
        origin: "SYD",
        destination: "MEL"
      },
      // mocks: {
      //   $router: $router
      // },

      data(){
        return{
          loading: false,
          flights: mockResults
        }
      }
    })

    const showFlightLinks = wrapper.findAll('router-link')
    const firstLink = showFlightLinks.at(0)
    expect(firstLink.text()).to.equal('BA256')

    // await firstLink.trigger('click')
    // expect( $router.push ).to.have.been.called
    // expect( $router.path ).to.have.been.calledWith({
    //   name: 'ShowFlight',
    //   path: '/flights/1'
    // })
    expect(firstLink.attributes('to')).to.equal('/flights/1')
    // is this the right way to test router-link??
    
  })

})