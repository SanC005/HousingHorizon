


function Input() {
    
    
  return (
    <div className="flex justify-center">

    <div className='bg-gradient-to-r from-blue-100 via-indigo-200 to-pink-400 text-black w-5/6 rounded-2xl m-5 text-center'>
          <div className="p-5 text-lg h-20">
            Predict the Price!
          </div>
          <div className="flex h-80">
          <div className="grid grid-cols-1 gap-3 w-1/2 p-3">
            <label>Area<input type="text"></input></label>
            <label>Area<input type="text"></input></label>
            <label>Area<input type="text"></input></label>
          </div>
            <div className="flex justify-center text-center">
                Output
            </div>
          </div>

    </div>
    </div>
  )
}

export default Input