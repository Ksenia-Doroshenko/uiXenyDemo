import React from "react";
import "./Card.css";

type TCardTypes = "basic";

type TCardProps = {
    cardType?: TCardTypes;
    children?: React.ReactElement | React.ReactNode | string;
    className?: string;
    sizeType?: TSize;
    title?: string;
    extra?: React.ReactNode;
    avatar?: React.ReactNode;
    style?: React.CSSProperties;
    actions?: React.ReactNode | React.ReactElement;
};

type TCardMetaProps = {
    title?: string;
    description?: React.ReactNode | string;
}

type CardCmp = React.FC<TCardProps> & {
    CardMeta: React.FC<TCardMetaProps>;
};

export const Card: CardCmp = ({cardType = "basic", sizeType = "medium", children, ...props}: TCardProps) => {
    let classNameArr = ["uiXeny-card"];

    // switch (cardType) {
    //
    //     default: {
    //         classNameArr.push("uiXeny-card");
    //         break;
    //     }
    // }

    switch (sizeType) {
        case "small": {
            classNameArr.push("uiXeny-card--sizeSmall");
            break;
        }
        case "large": {
            classNameArr.push("uiXeny-card--sizeLarge");
            break;
        }
        default: {
            classNameArr.push("uiXeny-card--sizeMedium");
            break;
        }
    }

    props.className && classNameArr.push(props.className);

    return (
        <>
            <div className={classNameArr.join(' ')} {...props}>
                {props.title ?
                    <div className="uiXeny-card__head">
                        <div className="uiXeny-card__head_title">{props.title}</div>
                        {props.extra ? <div className="uiXeny-card__extra">{props.extra}</div> : null}
                    </div>
                    : null}
                {props.avatar ? <div className={"uiXeny-card__avatar" +
                        (!props.title ? " uiXeny-card__image_mask--top" : "") +
                        (!children && !props.actions ? " uiXeny-card__image_mask--bottom" : "") +
                        (!children && !props.title && !props.actions? " uiXeny-card__image_mask" : "")}>
                        {props.avatar}</div>
                    : null}
                {children ? <div className="uiXeny-card__body">{children}</div> : null}
                {props.actions ? <div className={"uiXeny-card__actions"}>{props.actions}</div> : null}
            </div>
        </>
    );
};

const CardMeta: React.FC<TCardMetaProps> = ({
                                                cardType = "basic",
                                                sizeType = "medium",
                                                children,
                                                ...props
                                            }: TCardProps & TCardMetaProps) => {
    return (
        <>
            <div className="uiXeny-card__meta">
                {props.title ? <div className="uiXeny-card__meta_title">{props.title}</div> : null}
                {props.description ? <div className="uiXeny-card__meta_description">{props.description}</div> : null}
            </div>
        </>
    )
}

Card.CardMeta = CardMeta;
export default Card;