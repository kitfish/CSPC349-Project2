import React from 'react';
import './Legend.css';

const Legend = () => {
    return (
        <div className="legend">
            <h4>Covid Cases</h4>
            <hr/>
            <div style={{ "--color": '#FF0000' }}>5m+</div>
            <div style={{ "--color": '#FFA500' }}>1m+</div>
            <div style={{ "--color": '#FFFF00' }}>250k+</div>
            <div style={{ "--color": '#00FF00' }}>&gt;250k</div>
        </div>
    );
}
export default Legend;