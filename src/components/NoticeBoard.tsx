import Notice from "./Notice";
import { useState } from "react";

function NoticeBoard() {
  let [notices, setNotices] = useState([]);

  async function getNotices() {
    fetch("http://127.0.0.1:5000/get-notices").then((response) => {
      response.text().then((json) => {
        setNotices(JSON.parse(json));
      });
    });
  }

  getNotices();

  return (
    <>
      <u>
        <h1 style={{ textAlign: "center" }}>Notices:</h1>
      </u>

      {notices.length === 0 && (
        <>
          <br></br>
          <div
            className="spinner-border"
            role="status"
            style={{ display: "block", margin: "auto" }}
          >
          </div>
          <h5 style={{ textAlign: "center" }}>Loading...</h5>
        </>
      )}

      {notices.map((notice: any, index: number) => (
        <>
          <br></br>
          <Notice
            key={index}
            noticeName={notice.noticeName}
            noticeImg={notice.noticeImg}
          >
            {notice.noticeText}
          </Notice>
        </>
      ))}
    </>
  );
}

export default NoticeBoard;
