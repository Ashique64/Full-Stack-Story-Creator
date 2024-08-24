import React from "react";
import "./OnGoingList.scss";

const OnGoingList = () => {
    return (
        <div className="container ongoing_story">
            <h2>On-Going Stories</h2>
            <div className="row">
                <div className="col-md-3 item">
                    <div className="ongoing_card">
                        <img src="\Images\static\CarouselBook1.jpg" alt="" />
                        <h5>Titile</h5>
                    </div>
                </div>
                <div className="col-md-3 item">
                    <div className="ongoing_card">
                        <img src="\Images\static\CarouselBook2.jpg" alt="" />
                        <h5>Titile</h5>
                    </div>
                </div>
                <div className="col-md-3 item">
                    <div className="ongoing_card">
                        <img src="\Images\static\CarouselBook3.jpg" alt="" />
                        <h5>Titile</h5>
                    </div>
                </div>
                <div className="col-md-3 item">
                    <div className="ongoing_card">
                        <img src="\Images\static\CarouselBook1.jpg" alt="" />
                        <h5>Titile</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnGoingList;
