import { combineReducers } from 'redux';
import Errors from './errors';
import Messages from './messages';
import Taxon from './taxon';

export default combineReducers({
  Errors,
  Messages,
  Taxon,
});
