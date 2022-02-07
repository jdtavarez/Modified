import { connect } from "react-redux";
import Artist from "./artist";
import { fetchArtist, clearArtist } from "../../../../actions/artist_actions";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    playlist: state.entities.contents.playlist,
    contents: state.entities.contents,
    artist: state.entities.artists
})

const mDTP = (dispatch) => ({
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
    clearArtist: () => dispatch(clearArtist()),
})

export default connect(mSTP, mDTP)(Artist);