import React from "react";
import { createPortal } from "react-dom";

import PropTypes from "prop-types";

export default function GenericDialog({
  children,
  showDialog,
  onClose,
  title,
}) {
  return (
    <>
      {showDialog &&
        createPortal(
          <div
            className="modal fade show"
            style={{
              display: "block",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,.7)",
              zIndex: 9999,
            }}
            tabIndex="-1"
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-scrollable text-light modal-lg">
              <div
                className="modal-content "
                style={{ backgroundColor: "#232323" }}
              >
                <div className="modal-body">
                  {title}
                  <button
                    type="button"
                    className="btn-close btn-close-white position-absolute"
                    style={{ right: 5, top: 5, color: "#ffffff" }}
                    onClick={onClose}
                  ></button>
                  {children}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

GenericDialog.propTypes = {
  showDialog: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element,
  title: PropTypes.element.isRequired,
};

GenericDialog.defaultProps = {
  showDialog: false,
  onClose: () => console.log("on close"),
  children: "",
};
