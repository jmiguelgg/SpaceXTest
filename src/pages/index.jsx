import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const GET_LAUNCHES = gql`
    {
        launchesPast(limit: 10) {
            mission_name
            launch_date_local
            launch_success
            links {
                flickr_images
                wikipedia
            }
        }
    }
`

const Index = (pops) => {
    const {loading, error, data} = useQuery(GET_LAUNCHES)
    return(
        <h1>This is the new homepage</h1>
    )
}

export default Index