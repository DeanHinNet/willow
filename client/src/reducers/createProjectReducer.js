import {
	CREATE_PROJECT_ADD_PROJECT_TITLE,
  CREATE_PROJECT_ADD_MILESTONES,
	CREATE_PROJECT_SAVE_PROJECT,
  CREATE_PROJECT_HAS_ERRORED,
	DATA_WITHIN_CREATE_PROJECT_IS_LOADING,
	RESET_REDIRECTS,
	CREATE_PROJECT_HANDLE_NEW_ITEM,
} from '../actions/types';

export function createProjectModalToShow(state = 'NewProjectTitle', action) {
	switch (action.type) {
		case CREATE_PROJECT_ADD_PROJECT_TITLE:
      return 'AddProjectDetails';
		case CREATE_PROJECT_ADD_MILESTONES:
			return 'ProjectSummary';
		case CREATE_PROJECT_SAVE_PROJECT:
			return 'NewProjectTitle';
		default:
			return state;
	}
}

export function createProjectMilestones(state = [], action) {
	switch (action.type) {
		case CREATE_PROJECT_ADD_MILESTONES:
			console.log('action.payload: ', action.payload);
			return action.payload;
		case CREATE_PROJECT_SAVE_PROJECT:
			return '';
		default:
			return state;
	}
}

export function createProjectItems(state = [], action) {
	switch (action.type) {
		case CREATE_PROJECT_HANDLE_NEW_ITEM:
			return [...state, { item: action.payload.item, label: action.payload.label } ];
		default:
			return state;
	}
}

export function createProjectTitle(state = '', action) {
	switch (action.type) {
		case CREATE_PROJECT_ADD_PROJECT_TITLE:
      return action.payload.projectName;
		case CREATE_PROJECT_SAVE_PROJECT:
			return [];
		default:
			return state;
	}
}

export function createProjectHasErrored(state = false, action) {
	switch (action.type) {
		case CREATE_PROJECT_HAS_ERRORED:
			return action.payload;
		default:
			return state;
	}
}

export function createProjectDataIsLoading(state = false, action) {
	switch (action.type) {
		case DATA_WITHIN_CREATE_PROJECT_IS_LOADING:
			return action.payload;
		default:
			return state;
	}
}

export function shouldRedirect(state = false, action) {
	switch (action.type) {
		case CREATE_PROJECT_SAVE_PROJECT:
			return true;
		case RESET_REDIRECTS:
			return false;
		default:
			return state;
	}
}

export function shouldRedirectTo(state = null, action) {
	switch (action.type) {
		case CREATE_PROJECT_SAVE_PROJECT:
			return action.payload;
		case RESET_REDIRECTS:
			return null;
		default:
			return state;
	}
}