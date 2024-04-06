import './App.css'

export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="User avatar"
                    src="https://unavatar.io/KlavierNavarro"/>
                <div className='tw-followCard-info'>
                    <strong>Klavier Navarro</strong>
                    <span className='tw-followCard-infoUserName'>
                        @KlavierNavarro
                    </span>
                </div>
                <aside>
                    <button className='tw-followCard-button'>Follow</button>
                </aside>
            </header>
        </article>
    )
}