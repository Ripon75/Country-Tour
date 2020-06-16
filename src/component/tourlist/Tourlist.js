import React, { Component } from 'react';
import "./Tourlist.scss";
import Tour from "../tour/Tour";
import {TourData} from "./TourData";

class Tourlist extends Component {

    state={
        tours: TourData
    }

    removeTour=id=>{
        const {tours} = this.state;
        const remainTour = tours.filter(tour=> tour.id !=id);
        this.setState({
            tours: remainTour
        })
    }
    render() {
        const {tours} = this.state;
        return (
            <section className="tourlist">
               {tours.map(tour=>{
                   return(
                       <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                   )
               })}
            </section>
        );
    }
}

export default Tourlist;