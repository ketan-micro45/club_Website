import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'


const ImageSlider=({ images })=> {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1>Image Slider</h1>
      <Slider style={{width:500}} {...settings}>
        {images && images.map(([id, url]) => (
          <div key={id}>
            <img style={{width:500}} src={url} alt={"gg"} />
            </div>
         ))}
      </Slider>
    </div>

  );
};
const Sender = () => {
  const [postData, setpostData] = useState({});
  const postref = database.ref('posts');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await postref.once("value");
        const data = snapshot.val();

        if (data) {
          setpostData(data);
        } else {
          setpostData("No Data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  return(
    <div>
      {Object.keys(postData).map((id)=>(
        <div key={id}>
          <ImageSlider images={Object.entries(postData[id].Images)}/>
        </div>
      ))}
    </div>
  )
}

export default ImageSlider;

    if (!images || !Array.isArray(images) || images.length === 0) {
      return null; // Return null or a message when no images are available
    }

   <div className="container" style={{margin:300,backgroundColor:"red"}}>
    <div className="card" >
      {images.map((imageUrl, index) => (
        <Slider {...settings}>
          <div key={index}>
            <img src={imageUrl} style={{ width: 200 }} alt={`Images ${index}`} />
          </div>
        </Slider>
      ))}
    </div>
    </div>