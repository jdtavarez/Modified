export const RECEIVE_QUEUE = "RECEIVE_QUEUE"
export const CLEAR_QUEUE = "CLEAR_QUEUE"
export const RECEIEVE_CURRENT_CONTENT = "RECEIEVE_CURRENT_CONTENT"
export const PLAY = "PLAY"

export const receiveQueue = (queue) => ({
    type: RECEIVE_QUEUE,
    queue 
})

export const clearQueue = () => ({
    type: CLEAR_QUEUE
})

export const receiveCurrentContent = (contentId) => ({
    type: RECEIEVE_CURRENT_CONTENT,
    contentId
})

export const play = (playBool) => ({
    type: PLAY,
    playBool
})