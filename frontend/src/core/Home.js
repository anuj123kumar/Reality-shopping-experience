import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";

import Image1 from '../images/imagge.jpg'

import User1 from "../images/users/user1.jpeg"
import User2 from "../images/users/user2.png"
import User3 from "../images/users/user3.png"

export default function Home() {
  console.log("API IS", API);

  return (
    <Base title='Home Page'>
      
      <div className='offer'>
        <div className='small-container'>
          <div className='row'>
            <div className='col-2'>
              <p><h1> Reality Experience shopping</h1></p>
              <h3> Expertize in Perception </h3>
            </div>
            <div className='col-2'>
              <img src={Image1} alt='header image' />
            </div>
          </div>
        </div>
      </div>
      
      <div className='small-container-2' >
        <h2 className='title'>Featured Products</h2>
        <div className='row'>
          <div className='col-4'>
            <model-viewer
              style={{ width: "200px", height: "250px", cornerRadius: "15px" }}
              src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/vintage_ventilator/scene.gltf'
              camera-controls
              disable-zoom
              ar
            ></model-viewer>
            <h4>ventilator</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-half-o' aria-hidden='true' />
            </div>
            <p>Rs.11999</p>
          </div>
          <div className='col-4'>
            <model-viewer
              style={{
                width: "200px",
                height: "250px",
                cornerRadius: "15px",
              }}
              src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/old_antique_lamp/scene.gltf'
              camera-controls
              disable-zoom
              ar
            ></model-viewer>
            <h4>antique lamp</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-o' aria-hidden='true' />
            </div>
            <p>Rs.5999</p>
          </div>
          <div className='col-4'>
            <div className=''>
              <model-viewer
                style={{
                  width: "200px",
                  height: "250px",
                  cornerRadius: "15px",
                }}
                src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/cacti_pot/scene.gltf'
                camera-controls
                disable-zoom
                ar
              ></model-viewer>
            </div>
            <h4>cacti pot</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-half-o' aria-hidden='true' />
              <i className='fa fa-star-o' aria-hidden='true' />
            </div>
            <p>Rs.899</p>
          </div>
        </div>
      </div>

      <div className='small-container'>
        <h2 className='title'>Furniture Lineup</h2>
        <div className='row'>
          <div className='col-4'>
            <model-viewer
              style={{ width: "200px", height: "250px", cornerRadius: "15px" }}
              src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/modern_couch/scene.gltf'
              camera-controls
              disable-zoom
              ar
            ></model-viewer>
            <h4>couch</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-half-o' aria-hidden='true' />
            </div>
            <p>Rs.14999</p>
          </div>
          <div className='col-4'>
            <model-viewer
              style={{
                width: "200px",
                height: "250px",
                cornerRadius: "15px",
              }}
              src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/couch_table/scene.gltf'
              camera-controls
              disable-zoom
              ar
            ></model-viewer>
            <h4>Table</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-o' aria-hidden='true' />
            </div>
            <p>Rs.3700</p>
          </div>
          <div className='col-4'>
            <div className=''>
              <model-viewer
                style={{
                  width: "200px",
                  height: "250px",
                  cornerRadius: "15px",
                }}
                src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/879f4b1756504c5487a6e11820a6638f/scene.gltf'
                camera-controls
                disable-zoom
                ar
              ></model-viewer>
            </div>
            <h4>Desk</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-half-o' aria-hidden='true' />
              <i className='fa fa-star-o' aria-hidden='true' />
            </div>
            <p>Rs.3500</p>
          </div>
          <div className='col-4'>
            <div className=''>
              <model-viewer
                style={{
                  width: "200px",
                  height: "250px",
                  cornerRadius: "15px",
                }}
                src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/industrial_floating_chair/scene.gltf'
                camera-controls
                disable-zoom
                ar
              ></model-viewer>
            </div>
            <h4>chair</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-half-o' aria-hidden='true' />
              <i className='fa fa-star-o' aria-hidden='true' />
            </div>
            <p>Rs.2400</p>
          </div>
          <div className='col-4'>
            <div className=''>
              <model-viewer
                style={{
                  width: "200px",
                  height: "150px",
                  cornerRadius: "15px",
                }}
                src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/wooden_stool/scene.gltf'
                camera-controls
                disable-zoom
                ar
              ></model-viewer>
            </div>
            <h4>stool</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-half-o' aria-hidden='true' />
              <i className='fa fa-star-o' aria-hidden='true' />
            </div>
            <p>Rs.350</p>
          </div>
          <div className='col-4'>
            <div className=''>
              <model-viewer
                style={{
                  width: "200px",
                  height: "250px",
                  cornerRadius: "15px",
                }}
                src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/hanging_kitchen_cupboards/scene.gltf'
                camera-controls
                disable-zoom
                ar
              ></model-viewer>
            </div>
            <h4>cupboard</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-half-o' aria-hidden='true' />
              <i className='fa fa-star-o' aria-hidden='true' />
            </div>
            <p>Rs.5999</p>
          </div>
        </div>
      </div>

      <div className='small-container'>
        <h2 className='title'>Fashion</h2>
        <div className='row'>
          <div className='col-4'>
            <model-viewer
              style={{ width: "200px", height: "250px", cornerRadius: "15px" }}
              src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/leather_cowboy_hat/scene.gltf'
              camera-controls
              disable-zoom
              ar
            ></model-viewer>
            <h4>cowboy Hat</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-half-o' aria-hidden='true' />
            </div>
            <p>Rs.999</p>
          </div>
          <div className='col-4'>
            <model-viewer
              style={{
                width: "200px",
                height: "2q50px",
                cornerRadius: "15px",
              }}
              src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/leather_shoes/scene.gltf'
              camera-controls
              disable-zoom
              ar
            ></model-viewer>
            <h4>leather shoes</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-o' aria-hidden='true' />
            </div>
            <p>Rs.4499</p>
          </div>
          <div className='col-4'>
            <div className=''>
              <model-viewer
                style={{
                  width: "200px",
                  height: "250px",
                  cornerRadius: "15px",
                }}
                src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/store/blue_heel/scene.gltf'
                camera-controls
                disable-zoom
                ar
              ></model-viewer>
            </div>
            <h4>heel</h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star' aria-hidden='true' />
              <i className='fa fa-star-half-o' aria-hidden='true' />
              <i className='fa fa-star-o' aria-hidden='true' />
            </div>
            <p>Rs.3005</p>
          </div>
        </div>
      </div>

      {/* <div className='offer'>
        <div className='small-container'>
          <div className='row'>
            <div className='col-2'>
              <model-viewer
                style={{
                  width: "600px",
                  height: "450px",
                  cornerRadius: "15px",
                }}
                src='https://try-before-you-buy-01.s3.ap-south-1.amazonaws.com/free_1972_datsun_240k_gt/scene.gltf'
                camera-controls
                disable-zoom
                ar
              ></model-viewer>
            </div>
            <div className='col-2'>
              <p>Exclusively Available on AR Store</p>
              <h1>Datsun 240K GT</h1>
              <small>
                This is a special model which was designed under C110. The C110
                generation was produced from September 1972 through August 1977.
                For export in the 1970s, the C110 and GC110 Skyline was sold as
                the Datsun K-series, with model Datsun 240K.
                <br />
              </small>
              <a href='#' className='btn'>
                Buy Now →
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div className='testimonials'>
        <div className='small-container'>
        <h2 className='title-2'>Customer Feedback</h2>
          <div className='row'>
            
            <div className='col-3'>
              <i className='fa fa-quote-left' aria-hidden='true' />
              <p>
                Good to have this,
                now its an easy task to adjust furniture
                in my room.
              </p>
              <div className='rating'>
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star-half-o' aria-hidden='true' />
              </div>
              <img src={User1} />
              <h3>Matt Murdock</h3>
            </div>
            <div className='col-3'>
              <i className='fa fa-quote-left' aria-hidden='true' />
              <p>
                Such a great innovation, it gives
                good understanding of product, 
                i can see whole new perception.
              </p>
              <div className='rating'>
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star-half-o' aria-hidden='true' />
              </div>
              <img src={User2} />
              <h3>Musk John</h3>
            </div>
            <div className='col-3'>
              <i className='fa fa-quote-left' aria-hidden='true' />
              <p>buying those cacti pot, looks all green</p>
              <div className='rating'>
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star-half-o' aria-hidden='true' />
              </div>
              <img src={User3} />
              <h3>stiles</h3>
            </div>
          </div>
        </div>
      </div>
    </Base>
  )
}
