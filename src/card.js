import React, {
	PropTypes,
} from 'react';

import { StyleSheet, View } from 'react-native';

import {
	carbonStyles,
} from './styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	style: PropTypes.any,
};

const defaultProps = {};
/**
 * shadowColor="rgba(0, 0, 0, 0.3)"
 * shadowOffset={{ width: 0, height: 1 }}
 * shadowOpacity={1}
 * shadowRadius={2}
 */
export default function Card(props) {
	return (
		<View

			{...props}
			style={[cs.card, props.style]}
			>
			{props.children}
		</View>
	);
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
