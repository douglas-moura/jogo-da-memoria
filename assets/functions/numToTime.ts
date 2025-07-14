import { Float } from "react-native/Libraries/Types/CodegenTypes"

export default function numToTime(num: number): string {
    // código para converter numero em formato de tempo
    // código de terceiros

    let hours: Float = Math.floor(num / 60)
    let minutes: Float = num % 60

    let nMinutes: string = '00'
    let nHours: string = '00'

    if (minutes + "".length < 10) nMinutes = "0" + minutes.toString()
    if (hours + "".length < 10) nHours = "0" + hours.toString()
    
    return nHours + ":" + nMinutes
}