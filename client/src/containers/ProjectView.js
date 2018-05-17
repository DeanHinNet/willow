import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { openModal } from '../actions/modal';

import styles from '../assets/sass/Dashboard.module.scss';

import {projectSave} from '../actions/project';

import WillowCore from '../components/WillowCore';
import Modals from './Modal/Modals';

class ProjectView extends Component {
	render() {
		return (
			<div className={ styles.col_12_of_12 }>
			<h4> Project View </h4>
			<WillowCore />
			<Modals />
			<button onClick={() => {
				console.log(this.props.projectData);
			}}> See projectData </button>
			<button onClick={() => this.props.saveProject(this.props.projectData)}> Save </button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
			projectData: state.projectData,
			userStatus: state.userStatus
	};
};

const mapDispatchToProps = (dispatch) => ({
  saveProject: (projectData) => dispatch(projectSave(projectData)),
});

// const mapDispatchToProps = (dispatch) => {
// 	return { 
// 			saveProject: (projectData) => {
// 				dispatch(projectSave(projectData))
// 			}
// 	}
// };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);
