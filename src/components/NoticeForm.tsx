import { useState } from "react";

async function postNotice(name: string, img: string, text: string) {
  fetch(
    `http://127.0.0.1:5000/post-notice?noticeName=${name}&noticeImg=${img}&noticeText=${text}`,
    { method: "POST" }
  ).then((response) => {
    response.text().then((json) => {
      console.log(json);
    });
  });
}

var [imageUrl, setImageUrl] = useState("");
function imageDisplay(value: string) {
  if (value) {
    setImageUrl(value);
  }
}

function NoticeForm() {

  var [noticeName, setNoticeName] = useState("");
  var [noticeImg, setNoticeImg] = useState("");
  var [noticeText, setNoticeText] = useState("");

  return (
    <>
      <u>
        <h1 style={{ textAlign: "center" }}>Create New Notice:</h1>
      </u>
      <br></br>

      <div
      className="card"
      style={{ width: "700px", height: "auto", margin: "auto", backgroundColor: "#e0e0e0" }}
      >

        <div className="mb-2 mt-3" style={{ margin: "auto", width: "85%", textAlign: "center" }}>
          <label htmlFor="noticeName" className="form-label">Notice Title:</label>
          <input type="text" className="form-control form-control-lg" id="noticeName"
          onChange={(e) => setNoticeName(e.target.value)} />
        </div>

        <div className="mb-2" style={{ margin: "auto", width: "85%", textAlign: "center" }}>
          <label htmlFor="noticeImg" className="form-label">Image Link:</label>
          <input type="text" className="form-control" id="noticeImg"
          onChange={(e) => setNoticeImg(e.target.value)}></input>
        </div>
      
        <div className="mb-3" style={{ margin: "auto", width: "85%", textAlign: "center" }}>
          <label htmlFor="noticeText" className="form-label">Notice Text:</label>
          <textarea className="form-control" id="noticeText" rows={3}
          onChange={(e) => setNoticeText(e.target.value)}></textarea>
        </div>

        <button type="button" className="btn btn-primary mb-3" style={{ margin: "auto", width: "20%" }}
        onClick={() => console.log(noticeName+"\n"+noticeImg+"\n"+noticeText)}>Submit</button>

      </div>

    </>
  );
}

export default NoticeForm;
