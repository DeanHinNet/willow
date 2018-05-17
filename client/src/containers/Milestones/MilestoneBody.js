import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMilestone, toggleMilestone, editMilestone, updateMilestone, filterMilestone, populateMilestone } from '../../actions/milestone';

import MilestoneList from './MilestoneList';
import AddMilestone from './AddMilestone';
import FilterNav from './FilterNav';

class MilestoneBody extends Component {
  createMilestone = (data) => {
    this.props.createMilestone(data);
  };

  toggleMilestone = (id) => {
    this.props.toggleMilestone(id);
  };

  filterMilestone = (filter) => {
    this.props.filterMilestone(filter);
  };

  editMilestone = (id) => {
    this.props.editMilestone(id);
  };

  updateMilestone = (data) => {
    this.props.updateMilestone(data);
  };

  populateTasks = (tasks) => {
    const current = {};
    this.props.milestones.forEach((item) => {
      current[item.id] = item.id;
    });

    tasks.forEach(({ hash_id, data }) => {
      if (!current[hash_id]) {
        const populateData = {};
        populateData.id = hash_id;
        populateData.text = data;
        this.props.populateMilestone(populateData);
      }
    });
  }

  componentDidMount() {
    this.populateTasks(this.props.data);
  }

  render() {
    const filterOptions = ["SHOW_ALL", "SHOW_ACTIVE", "SHOW_COMPLETED"];
    const { milestones, visibilityFilter } = this.props;
    return (
      <div>
        <AddMilestone createMilestone={ this.createMilestone } />
        { milestones.length > 0 ? (<FilterNav
          filterOptions={ filterOptions }
          filterMilestone={ this.filterMilestone }
          currentFilter={ visibilityFilter }
        />) : ('') }
        <MilestoneList
          milestones={ milestones }
          visibilityFilter={ visibilityFilter }
          toggleMilestone={ this.toggleMilestone }
          editMilestone={ this.editMilestone }
          updateMilestone={ this.updateMilestone }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  milestones: state.milestones,
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  createMilestone: (data) => dispatch(createMilestone(data)),
  toggleMilestone: (id) => dispatch(toggleMilestone(id)),
  filterMilestone: (filter) => dispatch(filterMilestone(filter)),
  editMilestone: (id) => dispatch(editMilestone(id)),
  updateMilestone: (data) => dispatch(updateMilestone(data)),
  populateMilestone: (data) => dispatch(populateMilestone(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MilestoneBody);
