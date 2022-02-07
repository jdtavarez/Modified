import React from "react";
import { connect } from "react-redux";
import { updatePlaylist, fetchCreatorPlaylists } from "../../../../actions/playlist_actions";
import { fetchPlaylistContents } from "../../../../actions/content_actions";
import { closeModal } from '../../../../actions/modal_actions'

class EditPlaylistForm extends React.Component {
    constructor(props) {
        super(props)

        const { playlist } = this.props;
    
        this.state = {
            id: playlist.id,
            title: playlist.title,
            description: playlist.description ? playlist.description : "",
        }

        this.errors = {
            title: false,
            title_error: "Playlist name is required."
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.handleFieldSet = this.handleFieldSet.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.errors.title) return;

        const { id, title, description, image } = this.state;
        const formData = new FormData();

        formData.append('playlist[id]', id);
        formData.append('playlist[title]', title);
        formData.append('playlist[description]', description);
        if (image) { formData.append('playlist[image]', image) };

        this.props.updatePlaylist(formData, id).then(() => {
            this.props.fetchPlaylistContents(id);
            this.props.closeModal();
        });
    }

    updateInput(e) {
        const fieldset = e.target.parentElement
        const category = e.target.name.slice(9, -1);
        if (e.target.value === '' && category === 'title') {
            fieldset.classList.add("fieldset-error")
            e.target.classList.add("pl-edit-error")
            e.target.setAttribute('placeholder', 'Add a name')
            this.errors[category] = true;
        } else if (e.target.value !== '' && category === 'title') {
            fieldset.classList.remove("fieldset-error")
            e.target.classList.remove("pl-edit-error")
            this.errors[category] = false;
        }

        this.setState({ [category]: e.target.value });
    }

    handleFieldSet(e) {
        const fieldset = e.target.parentElement
        const legend = fieldset.children[0]
        if (e.type === 'click') {
            fieldset.classList.add("clicked")
            legend.classList.add("clicked")
        } else {
            fieldset.classList.remove("clicked")
            legend.classList.remove("clicked")
        }
    }

    handleMouseEnter(e) {
        e.stopPropagation();
        const inputs = document.getElementsByClassName("upload-input");
        inputs[0].hidden = false;
        inputs[1].hidden = false;
    }

    handleMouseLeave(e) {
        e.stopPropagation();
        const inputs = document.getElementsByClassName("upload-input");
        inputs[0].hidden = true;
        inputs[1].hidden = true;
    }

    handleUpload(e) {
        const fileReader = new FileReader();

        const img = e.target.files[0];
        
        fileReader.onloadend = () => {
            this.setState({ preview: fileReader.result, image: img })
        }
        if (img) {
            fileReader.readAsDataURL(img)
        } else {
            this.setState({ preview: null, image: null })
        }
    }

    render () {
        const error = this.errors.title ? (<p className="pl-title-error"><i className="fas fa-exclamation-circle"></i>{this.errors.title_error}</p>) : ("")


        const { playlist } = this.props;

        const img = this.state.preview ? this.state.preview : playlist.url;

        return (
            <form className="edit-form" onSubmit={this.handleSubmit}>
                <div className="edit-form-container">
                    <div className="edit-form-header">
                        <h1>Edit details</h1>
                        <i onClick={this.props.closeModal} id="close-modal" className="fas fa-times"></i>
                    </div>
                    {error}
                    <div className="edit-form-content">
                        <div className="edit-form-img-container" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <img src={window.editphoto} alt="" className="upload-input" id="img-input" hidden />
                            <input className="upload-input" id="img-input" onChange={this.handleUpload} type="file" hidden style={{opacity: 0}} />
                            <img src={img} alt=""/>
                        </div>
                        <div className="edit-form-inputs">
                            <fieldset className="name-fieldset">
                                <legend >Title</legend>
                                <input type="text" name="playlist[title]" value={this.state.title} onChange={this.updateInput} onClick={this.handleFieldSet} onBlur={this.handleFieldSet}/>
                            </fieldset>
                            <fieldset className="description-fieldset">
                                <legend >Description</legend>
                                <textarea className="longInput" type="textarea" name="playlist[description]" placeholder="Add an optional description" value={this.state.description} onChange={this.updateInput} onClick={this.handleFieldSet} onBlur={this.handleFieldSet}></textarea>
                            </fieldset>
                        </div>
                    </div>
                    <input type="submit" value="SAVE"/>
                    <p>By proceeding, you agree to give Modified access to the image you choose to upload. Please make sure you have the right to upload the image.</p>
                </div>
            </form>
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
    fetchPlaylistContents: (playlistId) => dispatch(fetchPlaylistContents(playlistId)),
    updatePlaylist: (id, playlist) => dispatch(updatePlaylist(id, playlist)),
    closeModal: () => dispatch(closeModal()),
    fetchCreatorPlaylists: (creator, id) => dispatch(fetchCreatorPlaylists(creator, id))
})

export default connect(mSTP, mDTP)(EditPlaylistForm);