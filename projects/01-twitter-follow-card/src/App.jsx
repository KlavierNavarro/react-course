import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUsername = (username) => `@${username}`

    return (
        <section className='App'>
            <TwitterFollowCard
                formatUsername={formatUsername}
                name="Klavier Navarro"
                username="KlavierNavarro"
                isFollowing={false}
            />
            <TwitterFollowCard
                formatUsername={formatUsername}
                name="Mitski"
                username="mitskileaks"
                isFollowing
            />
        </section>
    )
}