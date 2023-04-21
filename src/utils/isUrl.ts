export function isUrl(str) {
  const urlRegex = /^(?:http(s)?:\/\/)?(?:localhost|(?:[\w-]+\.)*[\w-]+(?:\.[a-z]{2,}))(?::\d+)?(?:\/[\w\-.~:/?#[\]@!$&'()*+,;=]*)?$/
  return urlRegex.test(str)
}
