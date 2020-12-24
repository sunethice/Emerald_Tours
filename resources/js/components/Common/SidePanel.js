import React, { Component, useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../../css/SidePanel.css";

const SlidePanelHOC = (SliderInnerComponent, pData, pIWithAction) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: pData,
                action: pIWithAction,
                ...this.props
            };
        }

        render() {
            const { openPanel, data, action } = this.state;
            return (
                <SlidingPane
                    className="some-custom-class"
                    overlayClassName="some-custom-overlay-class"
                    isOpen={openPanel}
                    title={this.props.pTitle}
                    subtitle={this.props.pSubTitle}
                    onRequestClose={() => {
                        // triggered on "<" on left top click or on outside click
                        this.setState({ openPanel: false });
                    }}
                >
                    <SliderInnerComponent
                        data={data}
                        action={action}
                        {...this.props}
                    ></SliderInnerComponent>
                </SlidingPane>
            );
        }
    };
};

export default SlidePanelHOC;
