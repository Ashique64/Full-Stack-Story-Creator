import React from "react";
import NavBar from "../../components/NavBar/NavBar"
import "./StoryDetails.scss";
import Footer from "../../components/Footer/Footer";

const StoryDetails = () => {
    return (
        <>
        <NavBar/>
        <div className="container-fluid details_page">
            <div className="row story_details_page">
                <div className="col-md-6">
                    <div className="story_img">
                        <img src="\Images\static\CarouselBook2.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="story_info">
                        <h6>5 Contibution left</h6>
                        <h3>Title</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In est illo odio exercitationem
                            tempora, cum doloremque earum! Vitae adipisci, maiores commodi laudantium error animi nesciunt
                            culpa aut dolor consequatur sapiente?
                        </p>

                        <button className="btn">CONTRIBUTE</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default StoryDetails;
