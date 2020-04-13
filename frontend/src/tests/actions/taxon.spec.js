/* eslint-disable no-undef */
import moxios from 'moxios';
import expect from 'expect';
import { GET_TAXON } from '../../actions/types';
import { returnErrors } from '../../actions/errors';
import { getTaxon } from '../../actions/taxon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getTaxon action', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_TAXON after successfuly fetching taxon from api', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      const mockTaxon = {
          id:1,
          page_id:"http://www.wikidata.org/entity/Q305696",
          binomial_name:"Heteropsomys insulans",
          common_name:"Insular cave rat",
          taxon_superior:"Heteropsomys",
          taxonomic_rank:"species",
          endemic_of:"",
          picture:""
        }

      request.respondWith({
        status: 200,
        response: mockTaxon
      });
    });

    const expectedActions = [
      { type: GET_TAXON, payload: {
          id:1,
          page_id:"http://www.wikidata.org/entity/Q305696",
          binomial_name:"Heteropsomys insulans",
          common_name:"Insular cave rat",
          taxon_superior:"Heteropsomys",
          taxonomic_rank:"species",
          endemic_of:"",
          picture:""
        } },
    ];

    const store = mockStore({ taxon: {} })

    return store.dispatch(getTaxon()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
});
});