import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div class="footer_container">
            <div class="row footer">
                <div class="col-md-6 brand">
                    <a href="">STORY CRAFT</a>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis cumque soluta natus enim,
                        blanditiis autem cupiditate molestias
                    </p>
                </div>
                <div class="col-md-3 footer_links">
                    <ul>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Completed Books</li>
                        <li>OnGoing Books</li>
                    </ul>
                </div>
                <div class="col-md-3 footer_links">
                    <ul>
                        <li>Frequantly Asked Questions</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy & Policy</li>
                        <li>Report a Payment Issue</li>
                    </ul>
                </div>
            </div>

            <div class="row copy_right">
                <h4>Copyright &copy;2024 All rights reserved</h4>
            </div>
        </div>
  )
}

export default Footer