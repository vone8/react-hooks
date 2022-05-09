import React, { useReducer } from "react";
import "./App.css";
import HookCounter from "./components/HookCounter/HookCounter";
import HookCounterPrevState from "./components/HookCounterPrevState/HookCounterPrevState";
import HookUseStateWithObj from "./components/HookUseStateWithObj/HookUseStateWithObj";
import HookUseStateWithArray from "./components/HookUseStateWithArray/HookUseStateWithArray";
import ConditionallyRunEffects from "./components/ConditionallyRunEffects/ConditionallyRunEffects";
import RunEffectsOnlyOnce from "./components/RunEffectsOnlyOnce/RunEffectsOnlyOnce";
import MouseContainer from "./components/MouseContainer/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter/IntervalHookCounter";
import DataFetching from "./components/FetchingDataWithUseEffect/DataFetching";
import UseContextC from "./components/ContextDemo/UseContextC";
import ReducerCounter from "./components/ReducerCounter/ReducerCounter";
import ReducerCounter2 from "./components/ReducerCounter/ReducerCounter2";
import ReducerCounter3 from "./components/ReducerCounter/ReducerCounter3";
import DataFetchingTwo from "./components/FetchingDataWithUseEffect/DataFetchingTwo";
import GlobalComponentA from "./components/GlobalStateManagement/GlobalComponentA";
import GlobalComponentB from "./components/GlobalStateManagement/GlobalComponentB";
import GlobalComponentC from "./components/GlobalStateManagement/GlobalComponentC";
import DataFetchingUsingReducer from "./components/FetchingDataWithUseEffect/DataFetchingUsingReducer";
export const userContext = React.createContext();
export const channelContext = React.createContext();
export const countContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return initialState;
		default:
			return state;
	}
};

function App() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<countContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<div className="App">
				{/* <HookCounter /> */}
				{/* <HookCounterPrevState /> */}
				{/* <HookUseStateWithObj /> */}
				{/* <HookUseStateWithArray /> */}
				{/* <ConditionallyRunEffects /> */}
				{/* <RunEffectsOnlyOnce /> */}
				{/* <MouseContainer /> */}
				{/* <IntervalHookCounter /> */}
				{/* <DataFetching /> */}
				{/* <userContext.Provider value={"Vijay"}>
				<channelContext.Provider value="V.One8">
					<UseContextC />
				</channelContext.Provider>
			</userContext.Provider> */}
				{/* <ReducerCounter /> */}
				{/* <ReducerCounter2 /> */}
				{/* <ReducerCounter3 /> */}
				{/* <DataFetchingTwo /> */}
				<DataFetchingUsingReducer />

				<p>Count: {count}</p>
				<GlobalComponentA />
				<GlobalComponentB />
				<GlobalComponentC />
			</div>
		</countContext.Provider>
	);
}

export default App;
