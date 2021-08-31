import React, { createContext, ReactNode, useState } from "react";

export enum TypeOptions {
  single = "Single",
  multiple = "Multiple",
}

export type Item = {
  code: string;
  description: string;
  price: number;
  type: TypeOptions;
  order: number;
  firstLevel: boolean;
  parent: string | undefined;
  id: string;
};

export type ItemsContextValue = {
  items: Array<Item> | [];
  bundles: Array<Item> | [];
  setItems: (state: Item) => void;
};

// shape of the object
export const ItemsContext = createContext<ItemsContextValue>({
  items: [],
  bundles: [],
  setItems: (item: Item) => [],
});

type State = {
  items: Array<Item> | [];
  bundles: Array<Item> | [];
};

type Props = {
  children: ReactNode;
};

export const bundle1 = [
  {
    code: "1",
    description: "esta es la descripcion de ",
    price: 1,
    type: TypeOptions.single,
    order: 1,
    firstLevel: true,
    parent: undefined,
    id: "1",
  },
  {
    code: "2",
    description: "esta es la descripcion de ",
    price: 2,
    type: TypeOptions.single,
    order: 2,
    firstLevel: false,
    parent: "1",
    id: "2",
  },
  {
    code: "3",
    description: "esta es la descripcion de ",
    price: 3,
    type: TypeOptions.single,
    order: 3,
    firstLevel: true,
    parent: undefined,
    id: "3",
  },
];

function ItemProviderComponent(props: Props) {
  const [state, setState] = useState<State>({
    items: [],
    // bundles: [],
    bundles: bundle1
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
        bundles: state.bundles,
        setItems: setItems,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
}

export const ItemProvider = ItemProviderComponent;
