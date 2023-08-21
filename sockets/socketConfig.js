import { io } from 'socket.io-client'
const socket = io.connect('http://localhost:4000')

socket.on('connect', () => {
  console.log('Connected to server')
})

socket.on('crowdUpdate', (crowdData) => {
  // Handle updates to crowd data
  console.log('Received crowd update:', crowdData)
})


export default socket