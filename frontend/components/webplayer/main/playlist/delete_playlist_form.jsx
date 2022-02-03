import React from "react";
import { connect } from "react-redux";
import { deletePlaylist } from "../../../../actions/playlist_actions";
import { closeModal } from '../../../../actions/modal_actions';
import { withRouter } from 'react-router';

class DeletePlaylistForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(e) {
        e.preventDefault()
        this.props.closeModal()
        this.props.deletePlaylist(this.props.playlist.id)
        this.props.history.push("/web/")
    }

    render() {
        return (
            <div className="modal-form-container">
                <div className="delete-form">
                    <h1>Delete {this.props.playlist.title} ?</h1>
                    <p>This action cannot be undone.</p>
                    <div className="delete-form-values">
                        <div className="del-form-button cancel" onClick={() => this.props.closeModal()}>CANCEL</div>
                        <div className="del-form-button delete" onClick={this.handleDelete}>DELETE</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        playlist: state.entities.contents.playlist,
        contents: state.entities.contents
    })
}

const mDTP = (dispatch) => ({
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(DeletePlaylistForm));