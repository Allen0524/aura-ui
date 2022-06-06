import React from 'react'

function createContext<ContextValueType extends object | null>(
  contextName: string,
  defaultContext?: ContextValueType,
) {
  const BaseContext =
    React.createContext<ContextValueType | undefined>(defaultContext)

  function Provider(props: ContextValueType & {children: React.ReactNode}) {
    const {children, ...context} = props
    const value = context as ContextValueType
    return <BaseContext.Provider value={value}>{children}</BaseContext.Provider>
  }

  function useContext() {
    const context = React.useContext(BaseContext)
    if (context === undefined) {
      throw new Error(
        `useContext must be called inside a ${contextName} Provider`,
      )
    }
    return context
  }

  Provider.displayName = `${contextName}Provider`
  return [Provider, useContext] as const
}

export {createContext}
