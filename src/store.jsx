
import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have a rootReducer defined

const store = createStore(rootReducer); // Create Redux store with rootReducer

export default store;
