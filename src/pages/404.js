import Layout from '../components/Layout'
import {
  faGrinBeamSweat
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NotFound = ({ data }) => {
    
    return <Layout>
      Page you are looking for is not found!!!!
      <FontAwesomeIcon icon={faGrinBeamSweat} size="6x" color="yellow"/>
        
    </Layout>
}

export default NotFound;