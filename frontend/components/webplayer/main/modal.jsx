import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import EditPlaylistFormContainer from './playlist/edit_playlist_form';
import DeletePlaylistFormContainer from './playlist/delete_playlist_form';
import EditProfileFormContainer from './user/edit_profile_form';

const mSTP = (state) => ({
    modal: state.ui.modals
});

const mDTP = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
});

function Modal ({modal, closeModal}) {
    
    if (!modal) {
        return null;
    }

    let component;

    switch (modal) {
        case 'editPlaylist':
            component = <EditPlaylistFormContainer />;
            break;
        case 'deletePlaylist':
            component = <DeletePlaylistFormContainer />;
            break;
        case 'editProfile':
            component = <EditProfileFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

export default connect(mSTP, mDTP)(Modal);