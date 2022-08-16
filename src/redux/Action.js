import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons"

export const saveData = (data) => {
 console.log(data)
    return {
             type:"save",
             payload:data[0],
         }
 }