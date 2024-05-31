import { useState } from 'react'

const useShowMenu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };

    return {
        showMenu,
        toggleMenu,
    }
}

export default useShowMenu