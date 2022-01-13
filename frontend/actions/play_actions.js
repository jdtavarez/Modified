export const RECEIVE_QUEUE = "RECEIVE_QUEUE"
export const CLEAR_QUEUE = "CLEAR_QUEUE"

export const receiveQueue = (queue) => ({
    type: RECEIVE_QUEUE,
    queue 
})

export const clearQueue = () => ({
    type: CLEAR_QUEUE
})