export function TwitterFollowCard (children ,username, isFollowing) {
    return(
    <article className='di-tw-card'>
      <header className='di-tw-header'>
        <img 
          className='di-tw-avatar'
          alt='Mi avatar' 
          src={`https://unavatar.io/${username}`} />
        <div className='di-tw-info'>
          <strong>{children}</strong>
          <span className='di-tw-infoUserName'>@{username}</span>
        </div>
      </header>

      <aside>
        <button className='di-tw-button'>
          Seguir
        </button>
      </aside>

    </article>
    )
}