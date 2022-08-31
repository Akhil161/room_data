

export const saveData = (data) => {
 
    return {
             type:"save",
             payload:data[0],
         }
 }
 export const updateData = (data) => {
       return {
                type: "update",
                payload: data[0],
            }
    }

    export const loadData = (data) => {
       
        return {
                 type:"load",
                 payload:data,
             }
     }