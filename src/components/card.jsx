const Card = (pops) => {
    let randomNum = Math.floor(Math.random() * pops.info.links.flickr_images.lenght)
    return(
        <div>
            <h3>This is a new card</h3>
            <img src={require(pops.info.links.flickr_images[randomNum])}/>
            <label>Mission Name: {pops.info.mission_name}</label>
            <label>Launching date: {pops.info.launch_date_utc}</label>
            <button><a href={pops.info.links.wikipedia}>Wikipedia</a></button>
        </div>
    )
}

export default Card