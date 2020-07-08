import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const GET_LAUNCHES = gql`
    {
        launchesPast(limit: 10) {
            mission_name
            launch_date_local
            links {
                article_link
                video_link
                flickr_images
            }
            launch_date_utc
        }
    }
`

const Index = (pops) => {
    const {loading, error, data} = useQuery(GET_LAUNCHES)
    if(loading) return <p>Esta cargando ...</p>
    if(error) return <p>Ha ocurrido un error...</p>
    console.log(data)
    return(
        <div>
            <h1>This is the new homepage</h1>
        </div>
    )
}

export default Index