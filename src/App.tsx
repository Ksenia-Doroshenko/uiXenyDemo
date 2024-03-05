import {Button} from "./components/Button/Button"
import Input from "./components/Input/Input"
import {CheckBox} from "./components/CheckBox/CheckBox";
import React, {useState} from "react";
import {ToggleSwitch} from "./components/ToggleSwitch/ToggleSwitch";

import './style.css'
import {TextArea} from "./components/TextArea/TextArea";


function App() {
    const [isChecked, setChecked] = useState(false)
    const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }
    return (
        <>
            <div className="wrap"
                 style={{display: "grid", justifyItems: "center", padding: "20px", fontFamily: "sans-serif"}}>

                <p style={{
                    textAlign: "center",
                    width: "50%",
                    fontFamily: "sans-serif",
                    fontSize: "32px",
                    fontWeight: "bold"
                }}>Кнопки</p>

                <div className="container" style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    width: "50%",
                    justifyItems: "center",
                    padding: "20px"
                }}>
                    <Button type="default" className="dsd" sizeType="small">Default Button</Button>
                    <Button type="primary" className="dsdd" sizeType="small">Primary Button</Button>
                    <Button type="link" className="dsdd" sizeType="small">Link Button</Button>

                    <Button type="default">Default Button</Button>
                    <Button type="primary" className="dsdd">Primary Button</Button>
                    <Button type="link" className="dsdd">Link Button</Button>

                    <Button type="default" className="dsd" sizeType="large">Default Button</Button>
                    <Button type="primary" className="dsdd" sizeType="large">Primary Button</Button>
                    <Button type="link" className="dsdd" sizeType="large">Link Button</Button>

                    <div className="wrap"
                         style={{display: "grid", gridArea: "4 / 1 / 4 / 4", width: "100%", justifyItems: "center"}}>

                        <p style={{fontFamily: "sans-serif", fontSize: "32px", fontWeight: "bold"}}>Инпуты</p>

                        <Input type="basicInput" sizeType="small" placeholder="basicInput sizeSmall" required></Input>
                        <Input type="basicInput" placeholder="basicInput sizeMedium"></Input>
                        <Input type="basicInput" sizeType="large" placeholder="basicInput sizeLarge"></Input>
                        <br></br>
                        <Input type="underlined" sizeType="small" placeholder="underlined Input sizeMedium"></Input>
                        <Input type="underlined" sizeType="medium" placeholder="underlined Input sizeMedium"></Input>
                        <Input type="underlined" sizeType="large" placeholder="underlined Input sizeMedium"></Input>

                        <Input.Password/>
                        <Input.Password type={"underlined"}></Input.Password>
                    </div>

                    <div className="wrap" style={{
                        display: "grid",
                        overflow: "visible",
                        width: "100%",
                        gridArea: "5 / 1 / 5 / 4",
                        justifyItems: "left"
                    }}>
                        <p style={{
                            fontFamily: "sans-serif",
                            fontSize: "32px",
                            fontWeight: "bold",
                            justifySelf: "center"
                        }}>CheckBoxes</p>
                        <CheckBox>CheckBox</CheckBox>
                        <CheckBox defaultChecked>CheckBox checked</CheckBox>
                        <CheckBox disabled={true}>CheckBox disabled</CheckBox>
                        <CheckBox defaultChecked={true} disabled={true}>CheckBox checked disabled</CheckBox>
                        <br/>
                        <CheckBox type="checkmark" defaultChecked={true}>CheckBox--checkmark checked</CheckBox>
                        <CheckBox type="checkmark" defaultChecked={true} disabled={true}>CheckBox--checkmark checked
                            disabled</CheckBox>
                        <br/>
                        <CheckBox type="checkmark--filled" defaultChecked={true}>CheckBox--checkmark--filled
                            checked</CheckBox>
                        <CheckBox type="checkmark--filled" defaultChecked={true} disabled={true}>CheckBox--checkmark--filled
                            checked disabled</CheckBox>
                        <CheckBox checked={isChecked} onChange={onChangeCheckbox}>MILK</CheckBox>
                        <br/>
                        <div style={{display: "flex", width: "100%", justifyItems: "left"}}>
                            <div style={{display: "flex", width: "100%", justifyItems: "left"}}>
                                <CheckBox type="favoriteIcon"></CheckBox>
                                <CheckBox type="favoriteIcon" disabled={true}></CheckBox>
                                <CheckBox type="favoriteIcon" defaultChecked={true}></CheckBox>
                                <CheckBox type="favoriteIcon" defaultChecked={true} disabled={true}></CheckBox>
                            </div>
                            <div style={{display: "flex", width: "100%", justifyItems: "left"}}>
                                <CheckBox type="bookmarkIcon"></CheckBox>
                                <CheckBox type="bookmarkIcon" disabled={true}></CheckBox>
                                <CheckBox type="bookmarkIcon" defaultChecked={true}></CheckBox>
                                <CheckBox type="bookmarkIcon" defaultChecked={true} disabled={true}></CheckBox>
                            </div>
                        </div>
                        <ToggleSwitch>Toggle switch</ToggleSwitch>
                        <TextArea rows={15} cols={5} maxLength={100} placeholder="TextArea"></TextArea>


                    </div>

                </div>
            </div>

        </>
    )
}

export default App
