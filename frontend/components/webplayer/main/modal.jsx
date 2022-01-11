import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import EditPlaylistFormContainer from './edit_playlist_form';
import DeletePlaylistFormContainer from './delete_playlist_form';

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