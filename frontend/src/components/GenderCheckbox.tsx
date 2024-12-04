
const GenderCheckbox = () => {
  return (
    <div className="flex gap-2">
        <div className="form-control flex flex-row">
         <label className={`label gap-2 cursor-pointer`}>
            <span className="label-text text-white">Male</span>
            <input type="radio"name="gender" className="checkbox border-slate-900"/>
         </label>
        </div>
        <div className="form-control flex text-white flex-row "  >
         <label className={`label gap-2 cursor-pointer`}>
            <span className="label-text text-white">Female</span>
            <input type="radio" name="gender" className="checkbox border-slate-900"/>
         </label>
        </div>
    </div>
  )
}

export default GenderCheckbox