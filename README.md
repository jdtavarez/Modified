<img src="https://github.com/jdtavarez/Modified/blob/main/app/assets/images/demo/header.png" width="700px">
<a href="https://modi-fied.herokuapp.com/#/">Modified</a> is a full-stack Spotify clone. Users can create, edit, and delete playlists, edit their own profiles, as well as visit other users and artists profiles, seamlessly moving from page to page without playback interruption. To find all the uknown artists on Modified, users can filter by a preset category, or search by string input. 

## Technologies
* Rails
* Ruby
* PostgreSQL
* Javascript
* Web Audio API
* Amazon Web Services S3
* Heroku 

## Features
### Signing Up

<img src="https://github.com/jdtavarez/Modified/blob/main/app/assets/images/demo/signin.gif">

The error handling is done on the front-end so users can correctly input their data before it hits the database.

```javascript
errorsHelper(e) {

        const category = e.target.name.slice(5, -1)
        const errors = this.errors;
        const error_messages = this.error_messages;

        function _errorTrue() {
            errors[category] = true;
            e.target.classList.add("signup-error")
        }

        function _errorFalse() {
            errors[category] = false;
            e.target.classList.remove("signup-error")
        }

        switch(category) {
            case "email":
                if (e.target.value === '') {
                    _errorTrue();
                    error_messages[category] = "You need to enter your email."
                    break;
                } else if (!e.target.value.includes('@') ) {
                    _errorTrue();
                    error_messages[category] = "This email is invalid. Make sure it's written like example@email.com"
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case "confirm_email":
                if (e.target.value === '') {
                    _errorTrue();
                    error_messages[category] = "You need to confirm your email."
                    break;
                } else if (e.target.value !== this.state.email) {
                    _errorTrue();
                    error_messages[category] = "The email addresses don't match."
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case "password":
                if (e.target.value.length < 6) {
                    _errorTrue();
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case ("username" || "gender"):
                if (e.target.value === '') {
                    _errorTrue();
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case "year":
                let intValue = parseInt(e.target.value)
                if (e.target.value === '' ||
                    (intValue < 1900 || intValue > new Date().getFullYear() - 13) || 
                    (!Number.isInteger(intValue))) {
                    _errorTrue();
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case "month":
                if (e.target.value === '') {
                    _errorTrue();
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case "day":
                intValue = parseInt(e.target.value)
                if (e.target.value === '' || 
                (intValue < 0 || intValue > 31) || 
                (!Number.isInteger(intValue))) {
                    _errorTrue();
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            default: 
                null;
        }
        this.setState({error: null});
    }
```

### Profiles
<img src="https://github.com/jdtavarez/Modified/blob/main/app/assets/images/demo/userprof.gif">

Every time a user updates their data, or navigates to another users page, the componentDidUpdate lifecycle method ensures that the user's data is always up to date. The ownerEdit function ensures that other users cannot edit other user's media. 

```javascript
componentDidUpdate (prevProps) {
        const id = parseInt(this.props.match.params[0]);

        if (this.props.match.params[0] !== prevProps.match.params[0]) {
            this.props.fetchUser(id).then(() => {
                const { playlists, user } = this.props.profile[id];
                const username = user.username;
                const image = user.image_url;
                this.setState({ playlists, username, image });
            })
        } else {
        if (this.props.profile[id]) {
            const { user } = this.props.profile[id];
            const username = user.username;
            const image = user.image_url;

            if (prevProps.profile[id]) {
                const oldUser = prevProps.profile[id].user;
                const oldUsername = oldUser.username;
                const oldImage = oldUser.image_url;

                if (username !== oldUsername || image !== oldImage) {
                    this.props.fetchUser(id).then(() => {
                        this.setState({ username, image });
                    })}
                }
            }
        }
    }

    ownerEdit() {
        const id = parseInt(this.props.match.params[0]);
        if (this.props.currentUser.id === id) this.props.openModal('editProfile')
    }
```

### Playlists
<img src="https://github.com/jdtavarez/Modified/blob/main/app/assets/images/demo/plist.gif" width="572px">

Every content item in playlists, as well as through out the application are their own components. Using a combination of their own props as well as data stored in global state, they pass the queue along to the player component. 

```javascript
    handleDoubleClick() {
        const startPos = this.props.position;
        const contentIds = this.props.contents.contentIds;
        const contents = this.props.contents.contents;
        const queueIds = contentIds.slice((startPos-1));
        const currentContentId = queueIds[0];
        const queue = {}; 
        queueIds.map(contentId => (queue[contentId] = contents[contentId]))
        this.props.receiveQueue(queue);
        this.props.receiveCurrentContent(currentContentId);
        this.props.play(true);
    }
```

### Search
<img src="https://github.com/jdtavarez/Modified/blob/main/app/assets/images/demo/search.gif" width="572px">

The search function takes in the user's query and filters through all the possible matches, whether they be artist, playlists, albums, or songs in linear time.

```javascript
handleSearch(searchString) {
        let matches = [];

        this.state.allStrings.forEach(string => {
            if (string.toLowerCase().includes(searchString.toLowerCase())) {
                matches.push(string)
            }
        })
        
        let matchContents = {};
        let matchArtists = {};
        let matchAlbums = {};
        let matchPlaylists = {};
        let id;

        const contents = this.state.contents;
        const artists = this.state.artists;
        const albums = this.state.albums;
        const playlists = this.state.playlists;

        matches.forEach(match => {
            if (contents[match]) {
                id = contents[match].id;
                matchContents[id] = contents[match];
            } 
            if (this.state.artists[match]) {
                id = artists[match].id;
                matchArtists[id] = artists[match];
            }
            if (this.state.albums[match]) {
                id = albums[match].id;
                matchAlbums[id] = albums[match];
            }
            if (this.state.playlists[match]) {
                id = playlists[match].id;
                matchPlaylists[id] = playlists[match];
            }
        })

        this.props.receiveContents({contents: matchContents});

        this.setState({ matchContents, matchArtists, matchAlbums, matchPlaylists})
    }
```

### Playback 

The playback component uses the Fisher-Yates algorithm to get a good shuffle. 

```javascript
  shuffleQueue(unshuffledQueue) {
        let shuffledQueue = unshuffledQueue
        .map(id => ({ id, sortKey: Math.random() }))
        .sort((x, y) => (x.sortKey - y.sortKey))
        .map(idObject => idObject.id);
        return shuffledQueue;
  }
```
