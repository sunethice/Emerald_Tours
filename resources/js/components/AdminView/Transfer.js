import React, { Component } from "react";
import "../../css/AdminTransfer.css";
import SlidePanelHOC from "../Common/SidePanel";
import TransferAdd from "./TransferAdd";

class Transfers extends Component {
    componentDidMount() {}

    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false
        };
    }

    render() {
        let { isPaneOpen } = this.state;
        const SlidePanel = SlidePanelHOC(TransferAdd);
        return (
            <>
                <div>
                    <button onClick={() => this.setState({ isPaneOpen: true })}>
                        Click me to open right pane!
                    </button>
                    <SlidePanel
                        openPanel={isPaneOpen}
                        pTitle="Add Transfer"
                        pSubTitle="add a new transfer to the list"
                    ></SlidePanel>
                </div>
            </>
        );
    }
}

export default Transfers;
