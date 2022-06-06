export default function addEventListener(
  node: Node,
  eventType: string,
  cb: () => void,
) {
  if (node.addEventListener) {
    node.addEventListener(eventType, cb)
  }

  return {
    remove: () => {
      if (node.removeEventListener) {
        node.removeEventListener(eventType, cb)
      }
    },
  }
}
