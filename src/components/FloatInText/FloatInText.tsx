import React from 'react';

import { Transition } from '@headlessui/react';

interface FloatInTextProps {
	texts: string[];
	className: string;
	endingText: string;
}

interface State {
	show: boolean;
	txtIdx: number;
}

enum ActionTypes {
	PHASE_IN = 'phaseIn',
	PHASE_OUT = 'phaseOut',
	NEXT_WORD = 'nextWord',
	TOGGLE = 'toggle',
	SET_FINAL = 'setFinal'
}

type Action = {
	type: ActionTypes;
	payload?: any;
}

const initialState: State = {
	show: false,
	txtIdx: 0,
}

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case ActionTypes.SET_FINAL:
			return {
				...state,
				show: true,
				txtIdx: action.payload.finalIdx
			}
		case ActionTypes.PHASE_IN:
			return {
				...state,
				show: true,
			}
		case ActionTypes.PHASE_OUT:
			return {
				...state,
				show: false,
			}
		case ActionTypes.NEXT_WORD:
			return {
				...state,
				txtIdx: state.txtIdx + 1,
			}
		case ActionTypes.TOGGLE:
			return {
				...state,
				show: !state.show
			}
		default:		
			return state;
	}
}

const FloatInText: React.FC<FloatInTextProps> = (props) => {
	const { texts, className, endingText } = props;
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const timeouts = React.useRef<NodeJS.Timeout[]>([]);

	React.useEffect(() => {
		const timeoutID = setTimeout(function cycleShow() {
			dispatch({
				type: ActionTypes.TOGGLE
			})

			const innerID = setTimeout(cycleShow, 1000);
			timeouts.current = [...timeouts.current, innerID]

		}, 1000)

		if (!timeouts.current.includes(timeoutID)) {
			timeouts.current = [...timeouts.current, timeoutID]
		}
	}, [])
	
	React.useEffect(() => {
		const timeoutID = setTimeout(function cycleWord() {
			dispatch({
				type: ActionTypes.NEXT_WORD
			})

			const innerID = setTimeout(cycleWord, 2350)
			timeouts.current = [...timeouts.current, innerID]

		}, 2350)

		if (!timeouts.current.includes(timeoutID)) {
			timeouts.current = [...timeouts.current, timeoutID]
		}
	}, [])

	React.useEffect(() => {
		return clearAllTimeouts; 
	}, [])

	React.useEffect(() => {
		if (state.txtIdx === texts.length) {
			clearAllTimeouts();
			const finalIdx = texts.indexOf(endingText);

			if (finalIdx === -1) {
				throw new Error(
					`Improper use of FloatInText Component, endingText must be in
					texts array`
				)
			}

			dispatch({
				type: ActionTypes.SET_FINAL,
				payload: {
					finalIdx
				}
			})
		}
	}, [state.txtIdx])

	const clearAllTimeouts = (): void => {
		timeouts.current.forEach(timeOutID => {
			clearTimeout(timeOutID);
		})
	};

	return (
		<div className='min-h-[120px]'>
			<Transition
				appear={true}
				show={state.show}
				enter="transition-all duration-[500ms]"
				enterFrom="translate-y-[-50px] opacity-0"
				enterTo="translate-y-0 opacity-100"
				leave="transition-all duration-[500ms]"
				leaveFrom="translate-y-0 opacity-100"
				leaveTo="translate-y-[50px] opacity-0"
			>
				<span className={className}>{texts[state.txtIdx]}</span>
			</Transition>
		</div>
	);
};

export default FloatInText;
