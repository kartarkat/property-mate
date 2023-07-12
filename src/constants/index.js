export const menuItems = [
    { id: 'home', route: '/', label: 'Home' },
    { id: 'featured', route: '/featured', label: 'Featured' },
    {
        id: 'holidayPackages', route: '/holidayPackages', label: 'Holiday Packages',
        submenu: [
            { id: 'india', route: '/india', label: 'India' },
            { id: 'paris', route: '/paris', label: 'Paris' },
            { id: 'dubai', route: '/dubai', label: 'Dubai' },
            { id: 'london', route: '/london', label: 'London' },
        ]
    },
    { id: 'contactUs', route: '/contactUs', label: 'Contact us' },
]