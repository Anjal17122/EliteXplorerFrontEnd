import { createGlobalState, createStore } from "react-hooks-global-state";

const { useGlobalState } = createGlobalState({
  refreshPost: true,
});

export { useGlobalState };
export enum Ac {
  setDisableButton = "setDisableButton",
}

type ActionsG = {
  type: Ac.setDisableButton;
  payload: boolean;
};

interface IStateG {
  disabled: boolean;
}

const reducer = (state: IStateG, action: ActionsG) => {
  switch (action.type) {
    case Ac.setDisableButton:
      return { ...state, disabled: action.payload };
    default:
      return state;
  }
};

const initialState: IStateG = {
  disabled: false,
};

export const { dispatch, getState, useStoreState } = createStore(
  reducer,
  initialState
);
export function useStoreGlobal() {
  const disabled = useStoreState("disabled");

  return {
    disabled,
  };
}
