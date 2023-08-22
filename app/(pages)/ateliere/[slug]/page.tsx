import React from "react";

const Atelier = ({ params }: { params: { slug: string } }) => {
    console.log(params);
    return (
        <div className="p-10">
            <li>Intro</li>
            <li>Benefits</li>
            <li>Roadmap</li>
            <li>Slider poze</li>
            <li>Pachete</li>
            <li>Inscriere</li>
            <li>Alte ateliere</li>
        </div>
    );
};

export default Atelier;
