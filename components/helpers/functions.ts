export let splitByFour = (str, placeholder) => {
   let newString = ""
   for (let i = 0; i < 16; i++) {
      if (i % 4 === 0 && i) newString += " "
      if (str[i]) newString += str[i]
      else newString += placeholder
   }
   return newString
}

export let maskBeforeOnChange = ({ nextState: newState, previousState: oldState }): { value: string, selection: any } => {

   if (newState && oldState) {
      let newClearValue = newState.value.replace(/[^0-9]/g, '')
      let oldClearValue = oldState.value.replace(/[^0-9]/g, '')
      let range = newClearValue.length - oldClearValue.length
      if (0 > range) {
         let newValue = oldClearValue.slice(0, newClearValue.length)
         return {
            value: splitByFour(newValue, " "),
            selection: {
               start: newValue.length + Math.floor(newValue.length / 4),
               end: newValue.length + Math.floor(newValue.length / 4)
            }
         }
      }
   }
   return newState
}