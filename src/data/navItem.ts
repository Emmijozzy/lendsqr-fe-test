import navIcon from '../assets/images/sidebar-icons/index'

const {user, garantors, loan, decision, savings, loanRequest, whitelist, karma,organisation, savingProduct, fees, transaction, service, serviceAccount,settlements, reports, preference, pricing, audit, message } = navIcon

export const customersNavDatas = [
  {
    navName:'User',
    navIcon: user,
    navLink: '/user'
  },
  {
    navName:'Guarantors',
    navIcon: garantors,
    navLink: '/user'
  },
  {
    navName:'Loans',
    navIcon: loan,
    navLink: '/user'
  },
  {
    navName:'Decision Makings',
    navIcon: decision,
    navLink: '/user'
  },
  {
    navName:'Savings',
    navIcon: savings,
    navLink: '/user'
  },
  {
    navName:'Loan Request',
    navIcon: loanRequest,
    navLink: '/user'
  },
  {
    navName:'Whitelist',
    navIcon: whitelist,
    navLink: '/user'
  },
  {
    navName:'Karma',
    navIcon: karma,
    navLink: '/user'
  }
]

export const businessNavDatas = [
  {
    navName:'Organisation',
    navIcon: organisation,
    navLink: '/user'
  },
  {
    navName:'Loan Products',
    navIcon: loanRequest,
    navLink: '/user'
  },
  {
    navName:'Savings Products',
    navIcon: savingProduct,
    navLink: '/user'
  },
  {
    navName:'Fee and Charges',
    navIcon: fees,
    navLink: '/user'
  },
  {
    navName:'Transaction',
    navIcon: user,
    navLink: '/user'
  },
  {
    navName:'Services',
    navIcon: service,
    navLink: '/user'
  },
  {
    navName:'Service Account',
    navIcon: serviceAccount,
    navLink: '/user'
  },
  {
    navName:'Settlements',
    navIcon: settlements,
    navLink: '/user'
  },
  {
    navName:'Reports',
    navIcon: reports,
    navLink: '/user'
  },
]

export const settingsNavDatas = [
  {
    navName:'Preferences',
    navIcon: preference,
    navLink: '/user'
  },
  {
    navName:'Fees and Pricing',
    navIcon: pricing,
    navLink: '/user'
  },
  {
    navName:'Audit Logs',
    navIcon: audit,
    navLink: '/user'
  },
  {
    navName:'Message',
    navIcon: message,
    navLink: '/user'
  }
]