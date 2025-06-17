import type { filters } from "../../const";
import { type Filter } from "../../types"

interface ToolbarProps {
    filters: typeof filters;
    selected: Filter;
    onSelectFilter: (filter: Filter) => void  
}

interface ToolbarItemProps {
    filter: Filter;
    selected: boolean;
    onSelectFilter: (filter: Filter) => void  
}

export {
    type ToolbarProps,
    type ToolbarItemProps
}