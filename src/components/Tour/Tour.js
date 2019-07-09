import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Tour.scss';

class Tour extends React.Component {
    render() {
        const {tour} = this.props;
        const { city, img, name, info }  = tour;

        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="tour"/>
                    <span className="close-btn">
                        <FontAwesomeIcon icon="window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>Info {""}
                        <span>
                            <FontAwesomeIcon icon="caret-square-down" /> 
                        </span>
                    </h5>
                    <p>{info}.</p>
                </div>
            </article>
        );
    }
}

export default Tour;