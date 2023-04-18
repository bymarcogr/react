import React from "react";

import GenericDialog from "./genericDialog";

export default function ShowDemoDialog({ isOpen, onClose }) {
  const title = (
    <h3 className="lead text-uppercase fs-4">Generic Email Dialog</h3>
  );

  return (
    <>
      <GenericDialog showDialog={isOpen} onClose={onClose} title={title}>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">
            Recipient:
          </label>
          <textarea className="form-control" id="message-text"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="message-text" className="col-form-label">
            Message:
          </label>
          <textarea className="form-control" id="message-text"></textarea>
        </div>
        <button
          type="button"
          className="netflixSearch float-end"
          onClick={onClose}
        >
          Close
        </button>
      </GenericDialog>
    </>
  );
}
