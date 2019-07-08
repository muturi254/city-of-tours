import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Tour.scss';

class Tour extends React.Component {
    render() {
        return (
            <article className="tour">
                <div className="img-countainer">
                    <img src="https://images.pexels.com/photos/1405773/pexels-photo-1405773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tour"/>
                    <span className="close-btn">
                        <FontAwesomeIcon icon="window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>city</h3>
                    <h4>name</h4>
                    <h5>Info <FontAwesomeIcon icon="caret-square-down" /></h5>
                </div>
            </article>
        );
    }
}

export default Tour;