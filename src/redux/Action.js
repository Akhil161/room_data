

export const saveData = (data) => {
 console.log(data)
    return {
             type:"save",
             payload:data[0],
         }
 }
 export const updateData = (data) => {
    console.log(data)
       return {
                type:"update",
                payload:data[0],
            }
    }