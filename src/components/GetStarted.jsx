import './css/TopHeader-Started.css'
import { Link } from 'react-router-dom';

export default function SecondHeader() {
  return (
    <section className="summer-sale">
       Get 50% off for Registering Today -
       <div className="link-to-register">
           <Link to="/register" className="link-to-register">Get Started</Link>
       </div>
    </section>
  )
}
