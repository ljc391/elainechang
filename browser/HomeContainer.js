import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = function (state) {
  return {

  };
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const HomeContainer = componentCreator(Home);
export default HomeContainer;