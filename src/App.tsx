import Button from "./components/Button/Button"
import Input from "./components/Input/Input"
import {CheckBox} from "./components/CheckBox/CheckBox";
import React, {useState} from "react";
import {ToggleSwitch} from "./components/ToggleSwitch/ToggleSwitch";
import Icon from "./components/Icon/Icon";
import './style.css'
import {TextArea} from "./components/TextArea/TextArea";
import {ThemeProvider} from "./contexts/ThemeContext";
import Card from "./components/Card/Card";
import Select from "./components/Select/Select";
import Modal from "./components/Modal/Modal";
import {useTheme} from "./hooks/useTheme";
import DatePicker from "./components/DatePicker/DatePicker";
import Accordion from "./components/Accordion/Accordion";
import {useNotify} from "./components/notification/NotificationsHolder";
import List from "./components/List/List";


function App() {
    const [isChecked, setChecked] = useState(false);
    const {currentTheme, changeTheme} = useTheme();
    const [api, context] = useNotify();

    const onOpenNotify = () => {
        console.log('donne')
        api({type: 'msg', message: `New notification`});
    }

    const onClickTheme = () => {
        changeTheme(currentTheme.name === 'dark' ? 'default' : 'dark')
    }

    const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }

    function onChangeSelect(value: string | number) {
        console.log('app');
        console.log(value);
    }

    function onFocusSelect() {
        console.log("focused select");
    }

    function onBlurSelect() {
        console.log("blurred select");
    }

    const accordionData = [
        {
            heading: "Header 1",
            content:
                "Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.",
        },
        {
            heading: "Header 2",
            content:
                "Quos quam ipsam consequatur consequatur et distinctio. Facere vel ut dolorem. Quam quo neque quos voluptates cupiditate sit quae.",
        },
        {
            heading: "Header 3",
            content:
                "Vel et quam reprehenderit velit. Possimus accusamus eos esse vero quo modi voluptas hic. Quia illo quisquam vel quis qui. Autem labore aut incidunt. Eius non voluptatem et laboriosam in.",
        },
    ];

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <ThemeProvider>
                <div className={'light-theme'}

                     style={{display: "grid", justifyItems: "center", padding: "20px", fontFamily: "sans-serif"}}>
                    {context}

                    <p style={{
                        textAlign: "center",
                        width: "50%",
                        fontFamily: "sans-serif",
                        fontSize: "32px",
                        fontWeight: "bold"
                    }}>
                        Кнопки</p>

                    <div className="container" style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        width: "50%",
                        justifyItems: "center",
                        padding: "20px",
                        gap: "15px"
                    }}>
                        <Button buttonType="default" className="dsd" sizeType="small">Default Button</Button>
                        <Button buttonType="primary" className="dsdd" sizeType="small">Primary Button</Button>
                        <Button buttonType="link" className="dsdd" sizeType="small">Link Button</Button>

                        <Button buttonType="default">Default Button</Button>
                        <Button buttonType="primary" className="dsdd">Primary Button</Button>
                        <Button buttonType="link" className="dsdd">Link Button</Button>

                        <Button buttonType="default" className="dsd" sizeType="large">Default Button</Button>
                        <Button buttonType="primary" className="dsdd" sizeType="large">Primary Button</Button>
                        <Button buttonType="link" className="dsdd" sizeType="large">Link Button</Button>

                        <Button buttonType="default" buttonStatus="danger">Default Button danger</Button>
                        <Button buttonType="primary" buttonStatus="danger">Primary Button danger</Button>
                        <Button buttonType="link" buttonStatus="danger">Link Button danger</Button>

                        <Button buttonType="default" buttonStatus="warning">Default Button warning</Button>
                        <Button buttonType="primary" buttonStatus="warning">Primary Button warning</Button>
                        <Button buttonType="link" buttonStatus="warning">Link Button warning</Button>

                        <Button buttonType="default" buttonStatus="success">Default Button success</Button>
                        <Button buttonType="primary" buttonStatus="success">Primary Button success</Button>
                        <Button buttonType="link" buttonStatus="success">Link Button success</Button>

                        <Button.Float buttonType="default" buttonStatus="danger">+</Button.Float>
                        <Button.Float buttonType="default" buttonStatus="warning">+</Button.Float>
                        <Button.Float buttonType="default" buttonStatus="success">+</Button.Float>

                        <Button.Float buttonType="default" buttonStatus="danger"><Icon
                            sizeType={"small"}/></Button.Float>
                        <Button.Float buttonType="default" buttonStatus="warning"><Icon
                            sizeType={"small"}/></Button.Float>
                        <Button.Float buttonType="default" buttonStatus="success"><Icon
                            sizeType={"small"}/></Button.Float>

                        <Button.Float buttonType="primary" buttonStatus="danger">+</Button.Float>
                        <Button.Float buttonType="primary" buttonStatus="warning">+</Button.Float>
                        <Button.Float buttonType="primary" buttonStatus="success">+</Button.Float>

                        <Button.Float buttonType="primary" buttonStatus="danger"><Icon
                            sizeType={"small"}/></Button.Float>
                        <Button.Float buttonType="primary" buttonStatus="warning"><Icon
                            sizeType={"small"}/></Button.Float>
                        <Button.Float buttonType="primary" buttonStatus="success"><Icon
                            sizeType={"small"}/></Button.Float>

                        <div className="wrap"
                             style={{
                                 display: "grid",
                                 gridArea: "4 / 1 / 4 / 4",
                                 width: "100%",
                                 justifyItems: "center"
                             }}>

                            <p style={{fontFamily: "sans-serif", fontSize: "32px", fontWeight: "bold"}}>Инпуты</p>

                            <Input typeStyle="basicInput" sizeType="small" placeholder="basicInput sizeSmall"
                                   required></Input>
                            <Input typeStyle="basicInput" placeholder="basicInput sizeMedium"></Input>
                            <Input typeStyle="basicInput" sizeType="large" placeholder="basicInput sizeLarge"></Input>
                            <br></br>
                            <Input typeStyle="underlined" sizeType="small"
                                   placeholder="underlined Input sizeMedium"></Input>
                            <Input typeStyle="underlined" sizeType="medium"
                                   placeholder="underlined Input sizeMedium"></Input>
                            <Input typeStyle="underlined" sizeType="large"
                                   placeholder="underlined Input sizeMedium"></Input>

                            <Input.Password/>
                            <Input.Password typeStyle={"underlined"}></Input.Password>

                            <Input.Tel></Input.Tel>
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

                            <Select multipleSelect minSelectWarning={"Выберите как минимум 2 элемента"} minSelect={2}
                                    maxSelect={15} placeholder="Select uiXeny" onChange={onChangeSelect}
                                    onFocus={onFocusSelect}
                                    onBlur={onBlurSelect}
                                    defaultValue={[{value: 'jack', label: 'Jack'},
                                        {value: 'lucy', label: 'Lucy'}]}
                                    options={[
                                        {value: 'jack', label: 'Jack'},
                                        {value: 'lucy', label: 'Lucy'},
                                        {value: 'yiminghe', label: 'Yiminghe'},
                                        {value: 'alex', label: 'Alex'},
                                        {value: 'sophia', label: 'Sophia'},
                                        {value: 'liam', label: 'Liam'},
                                        {value: 'olivia', label: 'Olivia'},
                                        {value: 'william', label: 'William'},
                                        {value: 'emma', label: 'Emma'},
                                        {value: 'noah', label: 'Noah'},
                                        {value: 'ava', label: 'Ava'},
                                        {value: 'jacob', label: 'Jacob'},
                                        {value: 'mia', label: 'Mia'},
                                        {value: 'disabled', label: 'Disabled', disabled: true},
                                    ]}></Select>

                            <Select placeholder="Select uiXeny" onChange={onChangeSelect}
                                    onFocus={onFocusSelect}
                                    onBlur={onBlurSelect}
                                    options={[
                                        {value: 'jack', label: 'Jack'},
                                        {value: 'lucy', label: 'Lucy'},
                                        {value: 'yiminghe', label: 'Yiminghe'},
                                        {value: 'alex', label: 'Alex'},
                                        {value: 'sophia', label: 'Sophia'},
                                        {value: 'liam', label: 'Liam'},
                                        {value: 'olivia', label: 'Olivia'},
                                        {value: 'william', label: 'William'},
                                        {value: 'emma', label: 'Emma'},
                                        {value: 'noah', label: 'Noah'},
                                        {value: 'ava', label: 'Ava'},
                                        {value: 'jacob', label: 'Jacob'},
                                        {value: 'mia', label: 'Mia'},
                                        {value: 'disabled', label: 'Disabled', disabled: true},
                                    ]}></Select>


                            <Accordion accordionData={accordionData}/>


                            <Button buttonType="primary" onClick={() => setIsOpenModal(!isOpenModal)}>Open Modal window
                                here</Button>
                            <Modal open={isOpenModal} title={"Модальное окно"}
                                   footerActions={[<Button onClick={() => setIsOpenModal(false)}
                                                           key={1}>Cancel</Button>,
                                       <Button buttonType="primary" key={2}>Ok</Button>]}
                                   onClose={() => setIsOpenModal(false)}>
                                <h2>Заголовок Модального Окна</h2>
                                <p>Добро пожаловать в модальное окно! Здесь вы можете разместить любое содержимое,
                                    которое хотите отобразить пользователям. Ниже приведены некоторые примеры
                                    текста:</p>

                                <h3>Примеры Текста:</h3>

                                <ol>
                                    <li>
                                        <p><strong>Абзац:</strong></p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed sem
                                            auctor, consectetur metus nec, consequat velit. Nullam sed ligula id nulla
                                            malesuada aliquet.</p>
                                    </li>
                                    <li>
                                        <p><strong>Список:</strong></p>
                                        <ul>
                                            <li>Пункт списка 1</li>
                                            <li>Пункт списка 2</li>
                                            <li>Пункт списка 3</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p><strong>Изображение:</strong></p>
                                        <img src="https://via.placeholder.com/800x600.png?text=Placeholder+Image"
                                             alt="Нейтральная картинка"/>
                                    </li>
                                </ol>

                                <p><strong>Инструкции:</strong></p>
                                <p>Вы можете добавлять любой контент сюда в зависимости от ваших потребностей. Не
                                    забудьте включить кнопку или элемент закрытия, чтобы пользователи могли закрыть
                                    модальное окно.</p>

                            </Modal>

                            {/*<Icon.CloseOutlined color={"red"} hoverColor={"blue"}/>*/}

                            <Card title="Title"
                                  actions={[<Icon.TextFileOutlined key={1}/>, <Icon.TextFileOutlined key={2}/>,
                                      <Icon.TextFileOutlined key={3}/>, <Icon.TextFileOutlined key={4}/>]}
                                  style={{width: 300}}
                                  extra={<a href="#">More</a>}
                                  avatar={<img
                                      src={"https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG"}
                                      alt={"s"}/>}>
                                <p style={{fontWeight: "bold"}}>title</p>
                                <p>demo text</p>
                            </Card>

                            <Card style={{width: 300}}
                                  actions={[<Icon.TextFileOutlined key={1}/>, <Icon.TextFileOutlined key={2}/>,
                                      <Icon.TextFileOutlined key={3}/>]} extra={<a href="#">More</a>}
                                  avatar={<img alt="example"
                                               src={"https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG"}/>}></Card>
                            <Card style={{width: 300}}
                                  actions={[<Icon.TextFileOutlined key={1}/>, <Icon.TextFileOutlined key={2}/>,
                                      <Icon.TextFileOutlined key={3}/>]} extra={<a href="#">More</a>}
                                  avatar={<img alt="example"
                                               src={"https://sun9-13.userapi.com/impg/Whb89mqBKvrFOcEJSv1tSxf0a0PslcdOjtvbxg/6icsRB-byDg.jpg?size=2560x1707&quality=96&sign=a316b7b0d237a94ccf407de1a118040f&type=album"}/>}> описание
                                картинки </Card>

                            <Card style={{width: 300}} title="Title" extra={<a href="#">More</a>}
                                  avatar={<div style={{padding: 24, paddingBottom: 0}}><img style={{borderRadius: 0}}
                                                                                            alt="example"
                                                                                            src={"https://sun9-13.userapi.com/impg/Whb89mqBKvrFOcEJSv1tSxf0a0PslcdOjtvbxg/6icsRB-byDg.jpg?size=2560x1707&quality=96&sign=a316b7b0d237a94ccf407de1a118040f&type=album"}/>
                                  </div>} actions={[<Icon.TextFileOutlined key={1}/>, <Icon.TextFileOutlined key={2}/>,
                                <Icon.TextFileOutlined key={3}/>]}><Card.CardMeta title="Meta title"
                                                                                  description="Meta description"/></Card>

                            <TextArea rows={15} cols={5} maxLength={100} placeholder="TextArea"></TextArea>

                            <Button.Float buttonType={"primary"} onClick={onClickTheme}
                                          style={{position: 'fixed', right: '20px', bottom: '20px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     aria-hidden="true" role="img" className="iconify iconify--logos" width="35.93"
                                     height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228">
                                    <path fill="#00D8FF"
                                          d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path>
                                </svg>
                            </Button.Float>

                            <Button.Float onClick={onOpenNotify} style={{
                                position: 'fixed',
                                right: '25px',
                                bottom: '80px'
                            }}><Icon.TextFileOutlined/></Button.Float>

                            <DatePicker onChange={date => {
                                console.log(date)
                            }}/>
                            <List options={[{
                                name: "List Component: Item 1",
                                description: "You can add description of each Item"
                            },
                                {name: "Item 2", description: "You can add description of each Item"},
                                {name: "Item 3", description: "You can add description of each Item"},
                                {name: "Item 4", description: "You can add description of each Item"}]}></List>

                        </div>

                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
