import React from 'react';
import { connect } from 'react-redux';


const About = props => (
  <div>
    <h1>About Us</h1>
    <p>
      Counter: {props.count}<br/>
      What about us?<br/>
      What about all the times you said you had the answers?<br/>
      What about us?<br/>
      What about all the broken happy ever afters?
    </p>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
});

export default connect(
  mapStateToProps,
  null,
)(About);
