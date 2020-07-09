import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import Card from '../components/card'

const GET_LAUNCHES = gql`
    {
        launchesPast(limit: 10) {
            mission_name
            launch_date_local
            launch_date_utc
            links {
                article_link
                video_link
                flickr_images
            }
        }
    }
`

const Index = (props) => {
    const {loading, error, data} = useQuery(GET_LAUNCHES)
    if(loading) return <p>Esta cargando ...</p>
    if(error) return(<p>Ha ocurrido un error...</p>)
    try {
        return(
            <Card info={data.launchesPast[0]}/>
        )
    } catch (error) {
        return <p>Ha ocurrido un error...</p>
    } finally{
        return(
            <p>Cargo bien la pagina{console.log(props.data)}</p>
        )
    }
}



export default Index