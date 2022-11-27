import React from "react";

const EmailBody = (props) => {
  const { id, from_name, subject, body, favorite } = props.emailData;
  function createMarkup() {
    return {__html: body};
  }
// console.log(props.emailData)
  return (
    <div className="email-body">
      <div className="avatar">{from_name[0]}</div>
      <div>
        <div className="email-body-topbar">
          <h2>{subject}</h2>
          <button
            className="favorite-btn"
            onClick={() => props.markAsFavorite(id)}>
            {favorite ? "Remove from favorite" : "Mark as favorite"}
          </button>
        </div>
       <time dateTime={props.date}>{props.date}</time>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default EmailBody;
