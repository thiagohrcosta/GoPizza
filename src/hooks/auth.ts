import React, {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react'

type AuthContextData = {

}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps)
