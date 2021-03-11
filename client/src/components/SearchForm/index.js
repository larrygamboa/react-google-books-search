import React from "react";
// import style from "./style.css";

function searchForm(props) {
    return (
        <div className="row">
            <div className="container bg-white">
                <form className="form-inline">
                    <div className="form-group search-widget">
                        <label htmlFor="search" className="ml-3"><strong>Search For:</strong></label>
                        <input
                            onChange={props.handleInputChange}
                            value={props.value}
                            name="search"
                            type="text"
                            placeholder="enter a book"
                            id="search"
                            className="form-control ml-3"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default searchForm;
