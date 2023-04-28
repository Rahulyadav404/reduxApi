const redux = require('redux');
const reduxLogger = require('redux-logger');



const createStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

 const applymiddleware =redux.applyMiddleware
const logger = reduxLogger.createLogger()
// action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: ' First redux  action ',
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: 'buy ice cream',
  };
}

// (previousState, action) = > newState
const initialCakeState = {
  numOfCake: 10,
};
const initialIceCreamState = {
  numberOfIceCream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default: return state
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};


const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream : iceCreamReducer,
})
const store = createStore(rootReducer, applymiddleware(logger));
const unsubscribe = store.subscribe(() =>{});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
