import { main, oops } from './404.module.css'
import Button from '../components/Button/Button'

const NotFound = ({ }) => {

  return (
    <div className={main}>
      <div className={oops}>OOPS!!</div>
      Page you are looking for is not found!!!!
      <Button onClick={()=>{window.open(window.location.origin,"_self")}}>Go To Home</Button>

    </div>)
}

export default NotFound;