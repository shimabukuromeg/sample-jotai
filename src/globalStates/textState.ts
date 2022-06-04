import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import React from 'react'

const textState = atom('')

  const charCountState = atom(
    (get) => get(textState).length
  )

  export const useTextState = () => {
    return useAtomValue(textState)
  }

  export const useTextMutators = () => {
    const setMessage = useSetAtom(textState)
  
    const setText = React.useCallback(
      (text: string) => setMessage(text),
      [setMessage],
    )
  
    return { setText }
  }

  export const useCharCountState = () => {
    return useAtomValue(charCountState);
  }
