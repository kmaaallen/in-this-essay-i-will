import React from 'react';

export default function ThemeButton(props) {

    function selectTheme() {
        document.getElementsByClassName('active-theme')[0].classList.remove('active-theme');
        document.getElementById('body').classList.remove(...document.getElementById('body').classList);
        document.getElementById('body').classList.add(props.id);
        document.getElementById(props.id).classList.add('active-theme');
        if (props.id === 'theme-light') {
            document.getElementById('wcb').classList.remove('wcb-d');
        } else {
            document.getElementById('wcb').classList.add('wcb-d');
        }
    }

    return (
        <button id={props.id} onClick={selectTheme} className={props.active || ''}>
            <i className={props.icon}></i><span className='label'>{props.label}</span>
        </button>
    )
}
