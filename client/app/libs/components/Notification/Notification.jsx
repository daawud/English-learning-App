import React from "react";
import { MDBNotification, MDBIcon } from "mdbreact";
import './Notification.scss';

export default function Notification(props) {
    return (
        <MDBNotification className="notification"
                         // autohide={4000}
                         show
                         fade
                         icon="fas fa-bell"
                         iconClassName="notification-icon"
                         closeClassName="notification-close"
                         titleClassName="notification-title"
                         title="Уведомление"
                         message={props.errMessage}
        />
    );
};
