import deleteUserIcon from '../assets/images/delet-user.svg'
import activateUserIcon from '../assets/images/activate-user.svg'
import userDetailsIcon from '../assets/images/view-user-details.svg'

export const userActions = [
    {
        icon: userDetailsIcon,
        action: 'View Details'
    },
    {
        icon: deleteUserIcon,
        action: 'Blacklist User'
    },
    {
        icon: activateUserIcon,
        action: 'Activate User'
    }
]