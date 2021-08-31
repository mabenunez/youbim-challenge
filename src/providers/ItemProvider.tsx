import React, { createContext, ReactNode, useState } from "react";
// import { withRouter, RouteComponentProps } from 'react-router';

export type Item = {
  code: string;
  description: string;
  price: number;
  type: boolean; //convertir a enum por si llegan mas opcionees
  order: number;
  firstLevel: boolean;
  parent: string | undefined; //null?
  id: string;
};

export type ItemsContextValue = {
  items: Array<Item>;
  setItems: (state: Item) => void;
};

export const ItemsContext = createContext<ItemsContextValue>({
  items: [],
  setItems: (item: Item) => [],
});

type State = {
  items: Array<Item> | [];
};

type Props = {
  children: ReactNode;
};
function ItemProviderComponent(props: Props) {
  const [state, setState] = useState<State>({
    items: [],
  });

  const setItems = (item: Item) => {
    setState({
      ...state,
      items: [...state.items, item],
    });
  };

  return (
    <ItemsContext.Provider
      value={{
        items: state.items,
        setItems: setItems,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
}

export const ItemProvider = ItemProviderComponent;

// export const UserProvider = withRouter(UserProviderComponent);