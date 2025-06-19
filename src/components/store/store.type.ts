import type { Product } from "../../types";

interface StoreProps {
    products: Product[]
}

interface StoreState {
    activeView: "view_list" | "view_module";
    products: Product[] 
}

export type {
    StoreProps,
    StoreState
}