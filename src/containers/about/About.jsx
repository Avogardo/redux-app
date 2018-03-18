import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goHome } from '../../modules/routerActions';


const About = props => (
  <div>
    <h1>About Us</h1>
    <p>
      Counter: { props.count }<br/>
      What about us?<br/>
      What about all the times you said you had the answers?<br/>
      What about us?<br/>
      What about all the broken happy ever afters?
    </p>
    <button onClick={() => props.goHome()}>
      Go home using redux
    </button>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  goHome: () => goHome(),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
