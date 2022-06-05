export default function composeEventHandlers(theirHandler, ourHandler) {
  return event => {
    theirHandler && theirHandler(event)
    ourHandler && ourHandler(event)
  }
}
