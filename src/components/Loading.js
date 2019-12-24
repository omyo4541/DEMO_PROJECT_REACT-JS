import React  from 'react'; 
import loading from '../images/gif/loading-arrow.gif'
import {Link} from 'react-router-dom'


export default class Loading extends React.Component {
    render() {
        return (
            <div>
            <h4>Rooms Data Loading</h4>
            <Link to="/">
                    <img src={loading} alt="loading"/>
                </Link>
            </div>
        );
    }
}