import React from "react";


const Card = (props) => {
    const { from_email, from_name, id, short_description, subject, read, favorite } = props.data;
    
    return (
      <div className={`card ${read ? "read": ""}`} onClick={() => props.handleOpenEmail(id, props.data)}>
        <div className="avatar">{from_name[0]}</div>
        <div className="card-content">
          <div>
            From:{" "}
            <b>
              {from_name} &lt;{from_email}&gt;{" "}
            </b>
          </div>
          <div>
            Subject: <b>{subject}</b>
          </div>
          <p>{short_description}</p>
          <div>
            <time dateTime={props.date}>{props.date}</time>
            {favorite && <b style={{ color: "#E54065", marginLeft: "20px" }}>Favorite</b>}
          </div>
        </div>
      </div>
    );
  };

const List = (props) => {
  const { listData, handleOpenEmail, date } = props;

  return (
    <main className="email-list">
      {listData.map((item) => (
        <Card
          key={item.id}
          data={item}
          handleOpenEmail={handleOpenEmail}
          date={date}
        />
      ))}
       
    </main>
  );
};

export default List;
