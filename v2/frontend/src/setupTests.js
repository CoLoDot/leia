/* eslint-disable import/no-extraneous-dependencies */
import * as enzyme from 'enzyme';

const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
