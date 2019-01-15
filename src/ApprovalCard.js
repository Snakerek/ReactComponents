import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import Faker from "faker/locale/pl";

const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">Jesteś pewien?</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Zatwierdź</div>
          <div className="ui basic red button">Odrzuć</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
