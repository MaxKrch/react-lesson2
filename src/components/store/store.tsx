import { Component } from "react"
import type { StoreProps, StoreState } from "./store.type";
import IconSwitch from "../icon-switch";
import ListViews from "../list-view";
import CardsView from "../cards-view";
import { defaultView } from "../../const";


class Store extends Component<StoreProps, StoreState> {
    constructor(props: StoreProps) {
        super(props);
        this.state = {
            activeView: defaultView,
            products: this.props.products
        }

        this.clickBySwitchIconHadle = this.clickBySwitchIconHadle.bind(this)
    }
    
    clickBySwitchIconHadle() {
        const activeView =  this.state.activeView === "view_list"
            ? "view_module"
            : "view_list"
            
        this.setState({
            activeView
        })
    }

    render() {
        return(
            <div className="store-container">
                <IconSwitch 
                    icon={this.state.activeView}
                    onSwitch={this.clickBySwitchIconHadle}
                />
                {
                    this.state.activeView === "view_list"
                        ? <ListViews products={this.state.products}/>
                        : <CardsView products={this.state.products} />
                }
            </div>
        )
    }
}

export default Store;