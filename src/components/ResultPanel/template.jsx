import React from 'react';
import Answer from '../Answer/index.js';
import SparqlQueryVisualizer from '../SparqlQueryVisualizer/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className="ResultPanel-component">
            <CollapsablePanel isSpecial={true} header={'Results'}>
                {this.state.answer.value.map((it, idx) => {
                    return <Answer key={'answk_'+idx} data={it}/>;
                })}
            </CollapsablePanel>
        </div>
    );
};

export default render;
