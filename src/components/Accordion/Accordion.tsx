import React, {useEffect, useState} from "react";
import "./Accordion.css";
import Icon from "../Icon/Icon";

type AccordionProps = {
    heading: React.ReactNode;
    content: React.ReactNode;
    className: string;
};
const AccordionItem = ({heading, content}) => {

    const [isActive, setIsActive] = useState(false);
    const [isInit, setIsInit] = useState(true);


    return (
        <li tabIndex={0} className="accordion-item">
            <div className="accordion-toggle" onClick={() => {
                setIsActive(!isActive)
                setIsInit(false)
            }}>
                <h3>{heading}</h3><span>{isActive ? <Icon.UpOutlined sizeType="small"/> :
                <Icon.DownOutlined sizeType="small"/>}</span>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </li>
    )
}

const Accordion = ({accordionData}) => {

    return (
        <ul tabIndex={0} className="accordion">
            {accordionData?.map(el => <AccordionItem heading={el.heading} content={el.content}/>)
            }
        </ul>
    )
        ;
};

export default Accordion;