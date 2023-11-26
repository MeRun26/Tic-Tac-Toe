import React from "react";
import PropTypes from "prop-types";
import FieldLayout from "./Field.layout.module";

const FieldContainer = ({ field, handleCellClick }) => {
	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

FieldContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
};

export default FieldContainer;
