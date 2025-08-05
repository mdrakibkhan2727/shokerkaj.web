export interface SidebarItem {
  label: string;
  route?: string;
  roles?: string[];
  children?: SidebarItem[];
  svgPath?: string;
  iconClass?: string;
  hideWhenLoggedIn?: boolean;
  hasClickHandler?: boolean;
  isOpen?: boolean;

}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'About',
    svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z',
    route: '/about',
    hideWhenLoggedIn: true
  },
  {
    label: 'Login',
    svgPath: 'M10 17l5-5-5-5v3H3v4h7v3zM19 3h-6v2h6v14h-6v2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
    route: '/login',
    hideWhenLoggedIn: true
  },
  {
    label: 'Dashboard',
    svgPath: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z',
    route: '/super-admin/dashboard',
    roles: ['superadmin']
  },
  {
    label: 'Users',
    svgPath: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5s-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z',
    route: '#',
    roles: ['superadmin']
  },
  {
    label: 'Products',
    svgPath: 'M20 6H4v12h16V6zM5 17v-1h14v1H5zM15 8h2v5h-2V8z',
    roles: ['superadmin'],
    children: [
      {
        label: 'Add',
        route: '/super-admin/products',
        roles: ['superadmin'],
        // If child has icon, add svgPath or leave empty if no icon needed
      }
    ]
  },
  {
    label: 'Orders',
    svgPath: 'M3 6h18v2H3zm0 4h18v2H3zm0 4h18v2H3z',
    roles: ['superadmin']
  },
  {
    label: 'Videos',
    svgPath: 'M10 16.5l6-4.5-6-4.5v9z',
    roles: ['superadmin']
  },
    {
    label: 'Settings',
    svgPath: 'M19.14 12.936l1.43-2.49-1.43-2.49-3.232-1.31-1.22-3.474-3.468 1.22-1.308 3.23-2.49 1.432 2.49 1.43 1.308 3.23 3.47-1.218 1.222-3.47 3.23 1.31z',
    roles: ['superadmin']
  },
  {
    label: 'Help',
    svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z', // reusing info icon path for example
    roles: ['superadmin'],
    children: [
      {
        label: 'FAQ',
        route: '/faq',
        roles: ['superadmin']
      }
    ]
  },
  {
    label: 'Logout',
    svgPath: 'M16 13v-2H7V8l-5 4 5 4v-3h9z', // logout icon path
    hasClickHandler: true
  }
];
