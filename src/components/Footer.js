import React from 'react'
import "./Footer.css"
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar,NavDropdown } from 'react-bootstrap';


function Footer() {
    return (
        <footer class="footer">
        <div class="container bottom_border">
        <div class="row">
        <div class=" col-sm-4 col-md col-sm-4  col-12 col">
        <h5 class="headin5_amrc col_white_amrc pt2">
            <img src="images/logo.png"/>
        </h5>
        <p class="mb10">Owners Pride is a company with a team which has years of experience in automotive industry. We believe in giving new life to your machine. Having said that we are into customization of Jeeps.</p>
        
        <p><i class="fa fa fa-envelope"></i>contact@ownerspride.in</p>
        
        
        </div>
        
        
        <div class=" col-sm-4 col-md  col-6 col">
        <h5 class="headin5_amrc col_white_amrc pt2">Important links</h5>
        <ul class="footer_ul_amrc">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><NavDropdown title="Customize" id="basic-nav-dropdown ">
        <NavDropdown.Item><Link to="/jeep">Customize Your Own Jeep</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/gypsy">Customize Your Own Gypsy</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/car">Customize Your Own Car</Link></NavDropdown.Item>
             
      </NavDropdown></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><Link to="/privacy">Privacy Plocy</Link></li>
        <li><NavDropdown title="Contact Us" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to="/pune">PUNE</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/mumbai">MUMBAI</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/Punjab">PUNJAB</Link></NavDropdown.Item>
             
      </NavDropdown></li>
        </ul>
        </div>
        
        
        <div class=" col-sm-4 col-md  col-6 col">
        <h5 class="headin5_amrc col_white_amrc pt2">Contact Us</h5>
        <ul class="footer_ul_amrc">
        <li><Link to="/pune">PUNE</Link></li>
        <li><Link to="/mumbai">MUMBAI</Link></li>
        <li><Link to="/punjab">PUNJAB</Link></li>
       
        </ul>
        </div>
        
        
        <div class=" col-sm-4 col-md  col-12 col">
        <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>
        
        <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
        <p class="social text-muted mb- pb-0 bold-text"> <span class="mx-2"><a href="https://www.facebook.com/OwnersPride-105593241409855"> <i class="fa fa-facebook" aria-hidden="true"></i></a>
        </span> <span class="mx-2"><a href="https://www.linkedin.com/in/owners-pride-0b5b97201/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></span> 
         <span class="mx-2"><a href="https://www.instagram.com/ownerspride2012/"><i class="fa fa-instagram" aria-hidden="true"></i></a></span> </p><small class="rights"><span></span></small>
        </div>
        </div>
        </div>
        </div>
        
        
        <div class="container">
        
        <p class="text-center">Copyright © 2020 Owners Pride | Powered by  <a href="#">
Cortica Web Solutions Pvt. Ltd.	
</a></p>
        
        
        </div>
        </footer>
        
    )
}

export default Footer
