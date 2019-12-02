import React from "react";
import { MDBNotification } from "mdbreact";
import './Notification.scss';

export default function Notification(props) {
    return (
        <MDBNotification className="notification"
                         // autohide={3000}
                         show
                         fade
                         //iconClassName="text-primary"
                         closeClassName="notification-close"
                         titleClassName="notification-title"
                         icon="bell"
                         iconClassName="blue-grey-text"
                         title="Уведомление"
                         message={props.errMessage}
        />
    );
};
