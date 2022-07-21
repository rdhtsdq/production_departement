const RandomString = () => {
  const result = Math.random().toString(36).substring(2,12)
  return result
}

export default RandomString