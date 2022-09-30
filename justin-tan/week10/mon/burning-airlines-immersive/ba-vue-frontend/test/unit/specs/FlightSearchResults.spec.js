import Vue from 'vue';
import FlightSearchResults from '@/components/FlightSearchResults';
import { mount } from '@vue/test-utils';
import axios from 'axios'
import sinonChai from 'sinon-chai';

const BASE_URL = 'http://localhost:3000';

const mockResults = [
  {flight_number: "BA256"},
  {flight_number: "BA512"}
]

sinon.stub(axios, 'get')
  .withArgs(`${BASE_URL}/flights/search/SYD/MEL`)
  .returns(Promise.resolve({
    data: {mockResults}
  })
)


// TODO: how to import and fake axios here?
// remember that axios.get() returns not data, but a promise
// that RESOLVES to the data.... Promise.resolve({ data: {} })

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

  it('should render a list of matching flights', async () => {


    // 1. it should not show the loading message once the data has arrived
    // 2. it should call our faked axios.get with a URL that includes the origin and destination params passed from the search component
    // 3. it should show a div for each flight which includes the flight number
    
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


    // const firstSearchResult = wrapper.findAll('router-link')
    // console.log(firstSearchResult)

  })

  // it('should show an error message if the server responds with an error', () => {

  // })

  // it('should push the clicked flight results to the router as a show route', () => {

  // })



})