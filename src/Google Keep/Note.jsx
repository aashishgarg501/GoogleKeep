import React, { useState } from "react";
const Note = (props) => {
    const [a, b] = useState({
        title: "",
        content: "",
    });

    const Cng = (event) => {
        const { name, value } = event.target;

        b((xyz) => {
            return { ...xyz, [name]: value };
        });
    };

    return (
        <>
            <div className="main_note">
                <form>
                    <input
                        type="text"
                        value={a.title}
                        name="title"
                        onChange={Cng}
                        placeholder="Title"
                        autoComplete="off"
                    />
                    <textarea
                        cols=""
                        rows=""
                        value={a.content}
                        name="content"
                        onChange={Cng}
                        placeholder="Write a note..."
                    ></textarea>
                    <button className="plus_sign"
                        onClick={(e) => {
                            e.preventDefault();
                            props.Abc(a);
                            b({
                                title: "",
                                content: "",
                            });
                        }}
                    >
                        +

                    </button>
                </form>
            </div>
        </>
    );
};

export default Note;