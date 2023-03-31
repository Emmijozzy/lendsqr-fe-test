import React, { createContext, useState } from 'react';

interface ContextType {
  navContext: {
    nav: boolean
    toggleNav?: () => void
  },
  usersContext?: {
    usersState: {
      createdAt: string,
      orgName: string,
      userName: string,
      email: string,
      phoneNumber: string,
      lastActiveDate: string
  }[],
  updateUsers?: (users: any) => void
  }
}

const defaultContextState = {
  navContext: {
    nav: false
  },
  usersContext: {
    usersState: [
      {
        createdAt: "2072-12-27T03:44:22.522Z",
        orgName: "labore-dolor-et",
        userName: "Wilburn.Rice",
        email: "Maverick.Hyatt83@gmail.com",
        phoneNumber: "(553) 208-0727 x31321",
        lastActiveDate: "2099-02-28T23:17:40.013Z"
      },
      {
        createdAt: "2072-12-27T03:44:22.522Z",
        orgName: "labore-dolor-et",
        userName: "Wilburn.Rice",
        email: "Maverick.Hyatt83@gmail.com",
        phoneNumber: "(553) 208-0727 x31321",
        lastActiveDate: "2099-02-28T23:17:40.013Z"
      }
    ]
  }
}

export const AppContext = createContext<ContextType>(defaultContextState)

type Props = any

const ContextProvider = ({children}: Props) => {
  const [openNav, setOpenNav] = useState(defaultContextState.navContext.nav)
  const [usersState, setUsersState] = useState(defaultContextState.usersContext.usersState)


  const toggleNav = () => {
    console.log('my nav')
    setOpenNav((preNavState) => !preNavState)
  }

  const updateUsers = (usersApi: any) => {
    setUsersState( usersApi)
  }

  const AppContextValue = {
    navContext: {
      nav: openNav,
      toggleNav
    },
    usersContext: {
      usersState,
      updateUsers
    }
  }

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider