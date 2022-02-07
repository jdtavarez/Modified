import React from "react";
import { connect } from "react-redux";
import { fetchUser, updateUser, clearUser } from "../../../../actions/user_actions"
import { closeModal } from '../../../../actions/modal_actions';
import { withRouter } from 'react-router';

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props)

        const { currentUser } = this.props;

        this.state = {
            username: currentUser.username,
        }

        this.errors = {
            username: false,
            username_error: "username is required."
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.errors.title) return;

        const { username, image } = this.state;
        const formData = new FormData();

        formData.append('user[username]', username);
        if (image) { formData.append('user[avatar]', image) };

        this.props.updateUser(formData, this.props.currentUser.id).then(() => {
            this.props.closeModal();
            this.props.fetchUser(this.props.currentUser.id);
        });
    }

    updateInput(e) {
        const category = "username";
        if (e.target.value === '') {
            e.target.classList.add("pl-edit-error")
            e.target.setAttribute('placeholder', 'Add a name')
            this.errors[category] = true;
        } else if (e.target.value !== '') {
            e.target.classList.remove("pl-edit-error")
            this.errors[category] = false;
        }

        this.setState({ [category]: e.target.value });
    }

    handleMouseEnter(e) {
        e.stopPropagation();
        const input = document.getElementById('img-input');
        input.hidden = false;
    }

    handleMouseLeave(e) {
        e.stopPropagation();
        const input = document.getElementById('img-input');
        input.hidden = true;
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

    render() {
        const error = this.errors.username ? (<p className="pl-title-error"><i className="fas fa-exclamation-circle"></i>{this.errors.username_error}</p>) : ("")

        const { user } = this.props.profile[this.props.currentUser.id];

        const img = this.state.preview ? this.state.preview : user.image_url;

        return (
            <form className="edit-form" onSubmit={this.handleSubmit}>
                <div className="edit-form-container">
                    <div className="edit-form-header">
                        <h1>Profile details</h1>
                        <i onClick={this.props.closeModal} id="close-modal" className="fas fa-times"></i>
                    </div>
                    {error}
                    <div className="edit-form-content">
                        <div className="edit-form-img-container" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <input className="upload-input-img" id="img-input" onChange={this.handleUpload} type="file" hidden />
                            <img src={img} className="upload-input-img"/>
                        </div>
                        <div className="edit-form-input">
                            <input type="text" value={this.state.username} onChange={this.updateInput} />
                        </div>
                    </div>
                    <input type="submit" value="SAVE" />
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
        contents: state.entities.contents,
        profile: state.entities.profiles,
    })
}

const mDTP = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user, userId) => dispatch(updateUser(user, userId)),
    closeModal: () => dispatch(closeModal()),
    clearUser: () => dispatch(clearUser())
})

export default withRouter(connect(mSTP, mDTP)(EditProfileForm));