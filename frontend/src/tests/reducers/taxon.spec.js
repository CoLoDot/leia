import reducer from '../../reducers/taxon';
import { GET_TAXON } from '../../actions/types';

describe('Taxon reducer', () => {
  it('should return getTaxon payload', () => {
    expect(
      reducer([], {
        type: GET_TAXON,
        payload: { id:1,
            page_id:"http://www.wikidata.org/entity/Q305696",
            binomial_name:"Heteropsomys insulans",
            common_name:"Insular cave rat",
            taxon_superior:"Heteropsomys",
            taxonomic_rank:"species",
            endemic_of:"",
            picture:""},
      }),
    ).toEqual({
      taxon: {id:1,
        page_id:"http://www.wikidata.org/entity/Q305696",
        binomial_name:"Heteropsomys insulans",
        common_name:"Insular cave rat",
        taxon_superior:"Heteropsomys",
        taxonomic_rank:"species",
        endemic_of:"",
        picture:""},
    });
    });
});
