import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter/counter';
import { getListAsync, getDataRequested } from '../../modules/api/apiActions';
import { goToAbout } from '../../modules/routerActions';



class Home extends React.Component {
  componentDidMount() {
    const { getDataRequested } = this.props;
    getDataRequested();
  }

  render() {
    const {
      count,
      list,
      increment,
      isIncrementing,
      incrementAsync,
      decrement,
      isDecrementing,
      decrementAsync,
      changePage,
      getListAsync,
      isLoadingTitle,
      isLoading,
      isError,
      repositories,
    } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>Count: {count}</p>
        <p>Data: {list.a}</p>

        <p>
          <button onClick={increment} disabled={isIncrementing}>Increment</button>
          <button
            onClick={incrementAsync}
            disabled={isIncrementing}
            style={{cursor: isIncrementing ? 'wait' : 'default'}}
          >
            Increment Async
          </button>
        </p>

        <p>
          <button onClick={decrement} disabled={isDecrementing}>Decrementing</button>
          <button
            onClick={decrementAsync}
            disabled={isDecrementing}
            style={{cursor: isDecrementing ? 'wait' : 'default'}}
          >
            Decrement Async
          </button>
        </p>

        <p>
          <button onClick={() => changePage()}>
            Go to about page via redux
          </button>
        </p>

        <p>
          <button
            onClick={getListAsync}
            disabled={isLoadingTitle}
            style={{cursor: isLoadingTitle ? 'wait' : 'default'}}
          >
            Get data
          </button>
        </p>

        <div>
          {!isLoading && !isError ? repositories.map((item, index) =>
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
  }
};

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
