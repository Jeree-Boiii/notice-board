import { ReactNode } from "react";

interface Props {
  noticeName: string;
  noticeImg: string;
  children: ReactNode;
}

function Notice({ noticeName, noticeImg, children }: Props) {
  return (
    <div
      className="card"
      style={{ width: "700px", margin: "auto", backgroundColor: "#e0e0e0" }}
    >
      <div className="card-body">
        <h5>{noticeName}</h5>
        <hr></hr>
        <img
          src={noticeImg}
          style={{ width: "90%", margin: "auto", display: "block" }}
        ></img>
        <hr></hr>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
}

export default Notice;
