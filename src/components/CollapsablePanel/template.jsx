import React from 'react';

const render = function() {
    return (
        <div className="row CollapsablePanel-component">
            <h2 className={this.props.isSpecial ? 'CollapsablePanel-component-header-special' : 'CollapsablePanel-component-header'} onClick={this.togglePanel}>
                {this.props.header}
                <div className={this.props.isSpecial && this.state.isLoading ? 'CollapsablePanel-component-loader' : ''}></div>
            </h2>
            <div className={this.state.isCollapsed ? 'CollapsablePanel-component-collapsed' : ''}>
                {this.props.children}
            </div>
        </div>
    );
};

export default render;
