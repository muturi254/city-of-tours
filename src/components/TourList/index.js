import React from 'react';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';
import './TourList.scss';

class TourList extends React.Component {

    state = {
        tours: tourData
    }
    render() {
        const { tours } = this.state;
        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return (
                        <Tour key={tour.id} tour={tour} />                        
                    );
                })}
            </section>
        );
    }
}

export default TourList;