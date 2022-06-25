import React from 'react'
import ThemeButton from './themeButton';

export default function Header() {
    return (
        <header>
            <h1>The Green Project</h1>
            <div className='settings'>
                <ThemeButton id='theme-light' label='Light Theme' icon='fa solid fa-sun color-accent' />
                <ThemeButton id='theme-dark' label='Dark Theme' icon='fa solid fa-moon color-accent' active='active-theme' />
            </div>
        </header>

    )
}
