const Loading = () => {
  return <div className="fixed top-0 left-0 flex justify-center items-center h-[100vh] w-[100vw] z-[100]">
    <div className="fixed w-full h-full bg-gray-700 bg-opacity-30 z-[101]">
      <div className="h-full flex justify-center items-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    </div>
  </div>
}

export default Loading