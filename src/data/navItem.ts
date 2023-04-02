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
    navLink: '/'
  },
  {
    navName:'Loans',
    navIcon: loan,
    navLink: '/'
  },
  {
    navName:'Decision Makings',
    navIcon: decision,
    navLink: '/'
  },
  {
    navName:'Savings',
    navIcon: savings,
    navLink: '/'
  },
  {
    navName:'Loan Request',
    navIcon: loanRequest,
    navLink: '/'
  },
  {
    navName:'Whitelist',
    navIcon: whitelist,
    navLink: '/'
  },
  {
    navName:'Karma',
    navIcon: karma,
    navLink: '/'
  }
]

export const businessNavDatas = [
  {
    navName:'Organisation',
    navIcon: organisation,
    navLink: '/'
  },
  {
    navName:'Loan Products',
    navIcon: loanRequest,
    navLink: '/'
  },
  {
    navName:'Savings Products',
    navIcon: savingProduct,
    navLink: '/'
  },
  {
    navName:'Fee and Charges',
    navIcon: fees,
    navLink: '/'
  },
  {
    navName:'Transaction',
    navIcon: transaction,
    navLink: '/'
  },
  {
    navName:'Services',
    navIcon: service,
    navLink: '/'
  },
  {
    navName:'Service Account',
    navIcon: serviceAccount,
    navLink: '/'
  },
  {
    navName:'Settlements',
    navIcon: settlements,
    navLink: '/'
  },
  {
    navName:'Reports',
    navIcon: reports,
    navLink: '/'
  },
]

export const settingsNavDatas = [
  {
    navName:'Preferences',
    navIcon: preference,
    navLink: '/'
  },
  {
    navName:'Fees and Pricing',
    navIcon: pricing,
    navLink: '/'
  },
  {
    navName:'Audit Logs',
    navIcon: audit,
    navLink: '/'
  },
  {
    navName:'Message',
    navIcon: message,
    navLink: '/'
  }
]

