
import { useState } from "react";
import { database, storage } from "../firebase";
import "./dummy_inbox.css";
import 'firebase/storage';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

export default function Dummyinbox() {

  const [Post_textarea, setPost_textarea] = useState("");
  const TxtChange = (event) => {
    setPost_textarea(event.target.value);
  };

  const [Post_txtTitle, setPost_txtTile] = useState("");
  const TxtTitle = (event) => {
    setPost_txtTile(event.target.value);
  };

  const [ImgUpload, setImgUpload] = useState([])
  const [uploadstatus, setuploadstatus] = useState(false)
  const [uploadno, setuploadno] = useState('')
  const [lengths, setlength] = useState('')
  let URLS = []
  
  const postDatas = async () => {
    if (((Post_txtTitle || Post_textarea) === '') || (ImgUpload.length === 0)) {
      alert("Please Fill all ");
      if (window.confirm) {
        window.location.reload()
      }
    } else {
      setlength(ImgUpload.length)

      for (let i = 0; i < ImgUpload.length; i++) {
        setuploadno(i + 1)
        const imgref = ref(storage, `Images/${ImgUpload[i].name}`)
        await uploadBytes(imgref, ImgUpload[i])//For uploading (kuta upload,kai upload)
          .then(async (snapshot) => {//  "snapshot" tyat sagala astay [items,prefixes,extra]
            await getDownloadURL(snapshot.ref)//url download karaylo ref cha, ref kai ahe tar "ImageUrls/"
              .then((url) => {//snapshot madla url
                URLS.push(url)

              })
          });
      }
      let time = Date.now();
      database.ref("posts").child(time).set({

        Title: Post_txtTitle,
        Para: Post_textarea,
        IImages: URLS
      })
    }    
  }

  const status = () => {
    setuploadstatus(!uploadstatus)
  }
  const posthandler = () => {
    postDatas();
    status()
  }

  return (
    <>
      <div className="postUpload_body">
        <div className="postUpload_container">
          <textarea
            placeholder="Type Title"
            value={Post_txtTitle}
            onChange={TxtTitle}
            className="postUpload_title"
          ></textarea>
          <textarea
            placeholder="Type here"
            value={Post_textarea}
            onChange={TxtChange}
            className="postUpload_textarea"
          >
            {" "}
          </textarea>
          <div className="postUploadBrowse">
            <img
              className="postUpload_img"
              src="./tabler_photo-up.svg"
              alt="/"
            />
            <input type="file" multiple onChange={(event) => { setImgUpload(event.target.files) }} />
            <button className="postUploadbtn" onClick={posthandler}>
              Post
            </button>
          </div>
          {uploadstatus && (
            <div>
              {uploadno <= lengths ? (
                <p>Uploaded...{uploadno}/{lengths}</p>
              ) : (
                <p>Uploaded All</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );

}