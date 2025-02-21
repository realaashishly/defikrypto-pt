import React from 'react';
import './cube.style.css';

export default function Cube() {
    return (
        <div className='container'>
            <div className='box-card'>
                <div className='face front'></div>
                <div className='face back'></div>
                <div className='face right'></div>
                <div className='face left'></div>
                <div className='face top'></div>
                <div className='face bottom'></div>
            </div>
        </div>
    );
}
