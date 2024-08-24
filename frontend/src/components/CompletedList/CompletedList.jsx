import React from "react";
import "./CompletedList.scss";

const CompletedList = () => {
    return (
        <div className="container-fluid completed_story">
            <h2>Completed Stories</h2>
            <div className="row ">
                <div className="col-12 col-md-4 item">
                    <div className="completed_card">
                        <img src="\Images\static\CarouselBook1.jpg" alt="" />
                        <h5>Titile</h5>
                    </div>
                </div>
                <div className="col-12 col-md-4 item">
                    <div className="completed_card">
                        <img src="\Images\static\CarouselBook2.jpg" alt="" />
                        <h5>Titile</h5>
                    </div>
                </div>
                <div className="col-12 col-md-4 item">
                    <div className="completed_card">
                        <img src="\Images\static\CarouselBook3.jpg" alt="" />
                        <h5>Titile</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedList;
