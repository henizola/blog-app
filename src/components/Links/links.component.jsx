import React from 'react';
import { IconContainer } from './links.styles';
const Icons = ({ title }) => {
	return <IconContainer to={`/${title}`}>{title}</IconContainer>;
};

export default Icons;
