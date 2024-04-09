import { useState } from 'react'

export function TwitterFollowCard ({ name, username = 'unknown', initialIsFollowing, formatUsername }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    };

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="User avatar"
                    src={`https://unavatar.io/${username}`}/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>
                        {formatUsername(username)}
                    </span>
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-following'>{text}</span>
                    <span className='tw-followCard-unfollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}