import React, { Component } from 'react';
import "./Tour.scss";

class Tour extends Component {

    state={
        showInfo: false
    }
    
    handleInfo =()=>{
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const {id,city,img,info} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="image-container">
                <img src={img} alt=""/>

                <span className='close-btn'>
                <button onClick={()=>{removeTour(id)}}>Delete</button>
                </span>
                </div>

              <div className="tour-info">
                  <h3>{city}</h3>
        <h4>info{}
            <span className="info">
                <button onClick={this.handleInfo}>details</button>
            </span>
        </h4>
        {this.state.showInfo && <p>{info}</p>}
              </div>
                
            </article>
        );
    }
}

export default Tour;