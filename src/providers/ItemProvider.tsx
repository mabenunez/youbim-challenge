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
  id: number;
};

export type Bundle = {
  itemsBundled: Array<Item>;
  name: string;
  id: number;
};

export type ItemsContextValue = {
  items: Array<Item> | [];
  bundles: Array<Bundle> | [];
  setItems: (state: Item) => void;
  deleteItem: (id: number) => void;
  deleteBundle: (id: number) => void;
};

// shape of the object
export const ItemsContext = createContext<ItemsContextValue>({
  items: [],
  bundles: [],
  setItems: (item: Item) => {},
  deleteItem: (id: number) => {},
  deleteBundle: (id: number) => {}
});

type State = {
  items: Array<Item> | [];
  bundles: Array<Bundle> | [];
};

type Props = {
  children: ReactNode;
};

//const itemsMock = [
//   {
//     code: "1",
//     description: "esta es la descripcion de ",
//     price: 1,
//     type: TypeOptions.single,
//     order: 1,
//     firstLevel: true,
//     parent: undefined,
//     id: 1,
//   },
//   {
//     code: "2",
//     description: "esta es la descripcion de ",
//     price: 2,
//     type: TypeOptions.single,
//     order: 2,
//     firstLevel: false,
//     parent: "1",
//     id: 2,
//   },
//   {
//     code: "3",
//     description: "esta es la descripcion de ",
//     price: 3,
//     type: TypeOptions.single,
//     order: 3,
//     firstLevel: true,
//     parent: undefined,
//     id: 3,
//   },
// ];

// const bundlesMock = [
//   {
//     itemsBundled: arraydeitems,
//     name: "bundle A",
//     id: 1,
//   },
//   {
//     itemsBundled: arraydeitems,
//     name: "bundle B",
//     id: 2,
//   },
// ];

function ItemProviderComponent(props: Props) {
  const [state, setState] = useState<State>({
    items: [],
    bundles: [],
  });

  const setItems = (item: Item) => {
    setState({
      ...state,
      items: [...state.items, item],
    });
  };

  const deleteItem = (id: number) => {
    const updatedArray = state.items.filter(
      (item: Item) => item.id !== id,
  );
    setState({
      ...state,
      items:  updatedArray,
    });
  };

  const deleteBundle = (id: number) => {
    const updatedArray = state.bundles.filter(
      (item: Bundle) => item.id !== id,
  );
    setState({
      ...state,
      bundles:  updatedArray,
    });
  };

  return (
    <ItemsContext.Provider
      value={{
        items: state.items,
        bundles: state.bundles,
        setItems: setItems,
        deleteItem: deleteItem,
        deleteBundle: deleteBundle
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
}

export const ItemProvider = ItemProviderComponent;
