import "./Offcanvas.css";
import PropTypes from "prop-types";
import { Fragment } from "react";
import ReactDOM from "react-dom";


const OffCanvas = ({ onClose, children }) => {
    const portalElement = document.getElementById("overlays");
    const offCanvasOverlay = (
        <div className="offcanvas">
            <div className="content">{children}</div>
        </div>
    );
    return (
        <Fragment>
            {ReactDOM.createPortal(<div className="backdrop" onClick={onClose}></div>, portalElement)}
            {ReactDOM.createPortal(offCanvasOverlay, portalElement)}
        </Fragment>
    );
};


OffCanvas.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.node,
};
export default OffCanvas;
