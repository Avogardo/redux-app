import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter/actions';
import { getListAsync, getDataRequested } from '../../modules/api/actions';
import { goToAbout } from '../../modules/routerActions';


const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>
    <p>Data: {props.list.a}</p>

    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
      <button
        onClick={props.incrementAsync}
        disabled={props.isIncrementing}
        style={{cursor: props.isIncrementing ? 'wait' : 'default'}}
      >
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
      <button
        onClick={props.decrementAsync}
        disabled={props.isDecrementing}
        style={{cursor: props.isDecrementing ? 'wait' : 'default'}}
      >
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>

    <p>
      <button
        onClick={() => {props.getListAsync(); props.getDataRequested()}}
        disabled={props.isLoadingTitle}
        style={{cursor: props.isLoadingTitle ? 'wait' : 'default'}}
      >
        Get data
      </button>
    </p>

    <div>
      {!props.isLoading && !props.isError ? props.repositories.map((item, index) =>
        <div key={index}>
          {item.name}
        </div>
      )
      :
      <span>loading...</span>
    }
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
  list: state.api.list,
  isLoadingTitle: state.api.isLoadingTitle,
  isLoading: state.api.isLoading,
  isError: state.api.isError,
  repositories: state.api.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => goToAbout(),
  getListAsync,
  getDataRequested: () => dispatch(getDataRequested()),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
