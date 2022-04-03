import React from "react";
const Note2 = (props) => {
    console.log(props.id);
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <button className="btn" onClick={() => props.delete(props.id)}>
                    x
                </button>
            </div>
        </>
    );
};

export default Note2;