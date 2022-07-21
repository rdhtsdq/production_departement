
const Alert = ({color,isAlert,msg}) => {
  return <>
    <div className={"absolute z-[1000] w-[60%] md:w-[40%] md:h-14 right-0 top-[10%] bg-white px-4 py-2 shadow rounded-l-lg flex justify-between items-center"}>
      <p className={(color) ?? 'text-gray-700 text-sm md:text-base'}>{msg} aaa</p>
      <button onClick={() => isAlert(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      </button>
    </div>
  </>
}

export default Alert