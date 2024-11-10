import { useState } from "react"

const TwitterFollowCard = ({children, name})=>{
    const [isFollowing, setIsFollowing] = useState(false)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing
    ? 'tw-followCard-button isFollow'
    : 'tw-followCard-button'

    const handleIsFollowing = ()=>{
        setIsFollowing(!isFollowing)
    }

    return(
        <>

    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar"
             src="https://styles.redditmedia.com/t5_2qpwe/styles/communityIcon_sky2ml46s5p81.png" alt="Imagen del icono" />
            <div  className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{children}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleIsFollowing} >{text}</button>
            </aside>
    </article>
    </>
    )
}

export default TwitterFollowCard;