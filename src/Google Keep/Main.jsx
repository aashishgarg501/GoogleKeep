import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Note2 from "./Note2";

const Main = () => {
    const [c, d] = useState([]);
    const Sub2 = (a) => {
        d((preData) => {
            return [...preData, a];
        });
    };
    const onDelete = (id) => {
        let n = c.filter((currdata, index) => {
            return index !== id;
        });
        d(n);
    };
    return (
        <>
            <Header />
            <Note Abc={Sub2} />
            {c
                ? c.map((val, index) => {
                    return (
                        <Note2
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            delete={onDelete}
                        />
                    );
                })
                : ""}
            <Footer />
        </>
    );
};

export default Main;