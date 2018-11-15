import chai from 'chai'
import sinonChai from 'sinon-chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

chai.use(sinonChai);
configure({ adapter: new Adapter() });
