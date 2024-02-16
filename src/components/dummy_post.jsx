import React, { useState, useEffect } from "react";
// import "./post.css";
import { database } from "../firebase";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Link } from "react-router-dom";


function Posts(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [postData, setpostData] = useState({});
  const postref = database.ref('posts');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await postref.once("value");
        const data = snapshot.val();
        if (data) {
          setpostData(data);
        }
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  });



  return (
    <>
      <div className="Pbody">
      <Link to='/inbox' ><div className="Postbtn"><p>+</p></div></Link>{
          Object.values(postData).length ===0 ?(
            <h1>No Post Yet</h1>
          ):
          Object.values(postData).reverse().map((post, id) => (
            <div key={id}>{
                  <>
                    <div className="Pline1">
                      <div className="Pline"></div>
                    </div>
                    <div className="Pslider">
                      <div className="Pproduct-carousel">
                        <div className="Pproduct-container">
                          <Slider style={{ width: 500 }} {...settings}>
                            {
                            Object.values(post.IImages).length ===0 ?(
                              <p>No images</p>
                            ):
                            Object.values(post.IImages).map((image, imageId) =>
                            (
                              <div key={imageId}>
                                <img style={{ width: 500 }} src={image} alt={`ImageNO ${imageId}`} />
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                      <div className="Pslide_info">
                        <h3 id="Pslide_info_title">{post.Title}</h3>
                        <p id="Pslide_info_para">{post.Para}</p>
                        {/* <div className="Pcomment">
                          <textarea id="Pinput" placeholder="Comment" type="text" />
                          <div className="PsendContainer">
                            <img id="Psend" src="./Vector.png" alt="" />
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </>
                
              }

            </div>

          ))
        }
        <div className="Pline1_down">
          <div className="Pline_down"></div>
        </div>
      </div >
    </>
  );
}

export default Posts

