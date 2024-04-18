// here hmare jitne bhi reducer hai na use yha pr add krenge combined reducers ke help se

import { combineReducers } from 'redux';
import {cartreducer} from "./reducer"

const rootreducer=combineReducers({
    cartreducer
})

export default rootreducer