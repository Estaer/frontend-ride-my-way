import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import '../../styles/loader/loader.scss';

const Loader = ({ isLoading }) => (

	isLoading ?
		(
			<div className="preloader-wrapper big active">
				<div className="spinner-layer spinner-green-only darken-4">
					<div className="circle-clipper left">
						<div className="circle" />
					</div>
					<div className="gap-patch">
						<div className="circle" />
					</div>
					<div className="circle-clipper right">
						<div className="circle" />
					</div>
				</div>
			</div>
		) : null

);

Loader.propTypes = {
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ ...state.loadingReducer });

export default connect(mapStateToProps)(Loader);
