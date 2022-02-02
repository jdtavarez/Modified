import React from "react";
import { Link } from "react-router-dom";

export default class PlayBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playStatus: false,
            immutableQueue: null,
            queueContents: null,
            queue: null,
            oldQueue: [],
            shuffledQueueState: null,
            shuffled: false,
            repeatedQueueState: null,
            repeated: false,
            volume: 1,
            currentSongId: null,
            currentTime: 0,
        }

        this.handlePlay = this.handlePlay.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleEnded = this.handleEnded.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this);
        this.handleRepeat = this.handleRepeat.bind(this);
        this.shuffleQueue = this.shuffleQueue.bind(this);
        this.handleScrub = this.handleScrub.bind(this);
        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.resetCurrentTime = this.resetCurrentTime.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.playing !== prevProps.playing) {
            const audio = document.getElementById("audio");
            this.props.playing ? audio.play() : audio.pause()
            this.setState({ playStatus: this.props.playing })
        }

        if (this.props.queue !== prevProps.queue) {
            const queueContents = Object.assign({}, this.props.contents.contents);
            const immutableQueue = this.props.contents.contentIds;
            let queueIds = this.props.queueIds;
            const firstContent = queueIds[0];
            const oldQueuePivot = immutableQueue.indexOf(firstContent)
            const oldQueue = immutableQueue.slice(0, oldQueuePivot)   

            if (this.state.shuffled) {
                queueIds = this.shuffleQueue(queueIds);
            }
            
            this.setState({ immutableQueue: immutableQueue, queue: queueIds, queueContents: queueContents, oldQueue: oldQueue, playStatus: true, currentSongId: firstContent})
        }
    }

    formatDuration(num) {
        num = parseInt(num);
        let symbol;
        if (num < 0) {
            symbol = "-";
            num *= -1;
        } else {
            symbol = ""
        }
        const minutes = Math.floor(num / 60);
        let seconds = num % 60;
        if (seconds < 10) seconds = `0${seconds}`;
        return `${symbol}${minutes}:${seconds}`;  
    }

    handlePlay() {
        const audio = document.getElementById("audio");
        if (audio.src.slice(-3) !== 'mp3') return;
        const pausedBool = audio.paused
        pausedBool ? audio.play() : audio.pause();
        this.setState({ playStatus: pausedBool });
        this.props.play(pausedBool);
    }

    handleShuffle (e) {
        const audio = document.getElementById("audio");
        if (audio.src.slice(-3) !== 'mp3') return;
        if (!this.state.shuffled) {
            e.target.classList.add("play-clicked")

            const unshuffledQueue = this.state.queue.slice(1, -1)
            const shuffledQueue = this.shuffleQueue(unshuffledQueue)
            this.setState({shuffled: true, shuffledQueueState: unshuffledQueue, queue: shuffledQueue})
        } else {
            e.target.classList.remove("play-clicked")

            const unshuffleQueuePivot = this.state.currentSongId
            const newQueue = this.state.immutableQueue.slice(unshuffleQueuePivot-1);
            const oldQueue = this.state.immutableQueue.slice(0, unshuffleQueuePivot)
            this.setState({shuffled: false, shuffledQueueState: null, queue: newQueue, oldQueue: oldQueue})
        } 
    }

    shuffleQueue(unshuffledQueue) {
        let shuffledQueue = unshuffledQueue.map(id => ({ id, sortKey: Math.random() })).sort((x, y) => (x.sortKey - y.sortKey)).map(idObject => idObject.id)
        return shuffledQueue;
    }

    handleRepeat (e) {
        const audio = document.getElementById("audio");
        if (audio.src.slice(-3) !== 'mp3') return;
        if (!this.state.repeated) {
            let unrepeatedQueue
            if (this.state.shuffled) {
                unrepeatedQueue = this.shuffleQueue(this.state.immutableQueue)
            } else {
                unrepeatedQueue = this.state.immutableQueue   
            }

            e.target.classList.add("play-clicked")

            let repeatedQueue = this.state.queue.concat(unrepeatedQueue).concat(unrepeatedQueue)
            this.setState({ repeated: true, repeatedQueueState: unrepeatedQueue, queue: repeatedQueue })
        } else {
            e.target.classList.remove("play-clicked")
            const queuePivot = this.state.currentSongId
            const newQueue = this.state.immutableQueue.slice(queuePivot-1, -1);
            const oldQueue = this.state.immutableQueue.slice(0, queuePivot)
            this.setState({ repeated: false, repeatedQueueState: null, queue: newQueue, oldQueue: oldQueue })
        }
    }

    handleVolume() {
        const audio = document.getElementById("audio");
        const volume = document.getElementById("volume");
        const newValue = volume.value;
        audio.volume = newValue;
        this.setState({volume: newValue})
    }

    handleEnded() {
        let prevSong = this.state.currentSongId
        let oldQueue = this.state.oldQueue
        oldQueue.push(prevSong)
        let queue = this.state.queue.slice(1)
        let currentSongId = queue[0];
        this.setState({queue: queue, oldQueue: oldQueue, currentSongId: currentSongId})
        if (queue.length < 1) {
            this.setState({ playStatus: false })
            this.props.play(false)
        } else {
            this.setState({ playStatus: true })
        }
    }

    handlePrev() {
        if (this.state.oldQueue.length === 0) return;
        let prevSong = this.state.oldQueue.slice(-1)
        let oldQueue = this.state.oldQueue.slice(0,-1)
        let queue = this.state.queue;
        queue.unshift(prevSong);
        this.setState({queue: queue, oldQueue: oldQueue, currentSongId: prevSong})
        if (queue.length < 1) {
            this.setState({ playStatus: false })
        } else {
            this.setState({ playStatus: true })
        }
    }

    handleScrub(e) {
        const audio = document.getElementById("audio");
        const time = e.target.value;
        audio.currentTime = time;
    }

    resetCurrentTime() {
        this.setState({currentTime: 0})
    }

    setCurrentTime() {
        const audio = document.getElementById("audio");
        const currentTime = audio.currentTime;
        const progress = document.getElementById("progress");
        progress.value = currentTime
        this.setState({ currentTime })
    }

    render() {
        let playControl;
        if (this.state.playStatus) {
            playControl = (<i id="playbar-pause" className="fas fa-pause" onClick={this.handlePlay}></i>)
        } else {
            playControl = (<i id="playbar-play" className="fas fa-play" onClick={this.handlePlay}></i>)
        }

        let volIcon;
        if (this.state.volume <= .02) {
            volIcon = (<i id="vol-con" className="fas fa-volume-off"></i>)
        } else if (this.state.volume < .4) {
            volIcon = (<i id="vol-con" className="fas fa-volume-down"></i>)
        } else {
            volIcon = <i id="vol-con" className="fas fa-volume-up"></i>
        }

        let sourcePos = this.state.currentSongId ? parseInt(this.state.currentSongId) : "";
        let source = sourcePos ? this.state.queueContents[sourcePos] : "";
        let media; 
        let title;
        let image;  
        let artist; 
        let artist_id;
        let album_id;
        let length;
        let status;
        if (source) {
            media = source.media_url;
            title = source.title;
            image = source.image_url;
            artist = source.artist_name;
            artist_id = source.artist_id;
            album_id = source.album_id;
            length = source.length;
            status = "";
        } else {
            media = "";
            title = "";
            image = "";
            artist = "";
            artist_id = "";
            album_id = "";
            length = "";
            status = "hidden"
        }

        return (
            <div id="web-play-bar">
                <div className="play-bar-container">
                    <div className="content-metadata">
                        <img src={image} className="pbar-album-cover" alt="" />
                        <div className="pbar-song-info">
                            <Link className="pbar-song-title" to={`/web/albums/${album_id}`}>{title}</Link>
                            <Link className="pbar-artist-link" to={`/web/artists/${artist_id}`}>{artist}</Link>
                        </div>
                    </div>
                    <div className="main-content-area">
                        <div className="audio-controls">
                            <i className="fas fa-random" id="shuffled" onClick={this.handleShuffle}></i>
                            <i className="fas fa-step-backward" onClick={this.handlePrev}></i>
                            {playControl}
                            <i className="fas fa-step-forward" onClick={this.handleEnded}></i>
                            <i className="fas fa-sync-alt" id="repeated" onClick={this.handleRepeat}></i>
                        </div>
                        <div id="play-progress">
                            <div className="time-stamp" style={{ visibility: `${status}`}}>{this.formatDuration(this.state.currentTime)}</div>
                            <input type="range" defaultValue={0} id="progress" max={length} onChange={this.handleScrub}/>
                            <div className="time-stamp" style={{ visibility: `${status}`}}>{this.formatDuration((length-this.state.currentTime))}</div>
                        </div>
                        <audio id="audio" src={`${media}`} autoPlay 
                        onEnded={this.handleEnded}
                        onPlaying={this.resetCurrentTime}
                        onTimeUpdate={this.setCurrentTime}/>
                    </div>
                    <div className="volume">
                        {volIcon}
                        <input type="range" id="volume" defaultValue={this.state.volume} max="1" step=".02" onChange={this.handleVolume} />
                    </div>
                </div>
            </div>
        )
    }
}