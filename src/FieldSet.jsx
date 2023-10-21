function FieldSet({register,errors,count}){
    return <fieldset>
              <legend>Traveller {count+1} Age</legend>
              <input maxLength={2} type="number" placeholder="Enter Age" {...register(`traveller_age_${count+1}`,
              {
                

                required:{
                  value:true,
                  message:`Enter traveller Age ${count+1}`},
                min:{
                  value:1,
                  message:"Min Age 1 Year"
                },
                max:{
                  value:99,
                  message:"Max Age 99"
                },
                valueAsNumber:true,
                
                
              }
              )}/>
              <span>{errors[`traveller_age_${count + 1}`]?.message}</span>
            </fieldset>
}


export default FieldSet;