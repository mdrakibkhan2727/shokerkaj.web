export interface SidebarItem {
  label: string;
  icon?: string;
  route?: string;
  img?: string;
  roles?: string[];
  children?: SidebarItem[];
  expanded?: boolean;
  hideWhenLoggedIn?: boolean; // <-- new!
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
  label: 'About',
  icon: 'fas fa-info-circle',
  route: '/about',
  hideWhenLoggedIn: true
  },
  {
    label: 'Login',
    icon: 'fas fa-sign-in-alt',
    route: '/login',
    hideWhenLoggedIn: true
  },
  {
    label: 'Home',
    icon: 'fas fa-fw fa-home',
    route: '/admin/dashboard',
    roles: ['superadmin', 'businessman']
  },
  {
    label: 'ব্যবসায়ীর প্রোফাইল',
    icon: 'fas fa-fw fa-user-alt',
    route: '/businessman/profile',
    roles: ['superadmin', 'businessman']
  },
  {
    label: 'উদ্যোক্তা',
    icon: 'fas fa-fw fa-users',
    roles: ['superadmin','newbusinessman'],
    children: [
      {
        label: 'নতুন উদ্যোক্তা',
        img: 'assets/img/new-businessman.png',
        route: '/newbusinessman/dashboard',
        roles: ['superadmin', 'newbusinessman']
      },
    ]
  },
  {
    label: 'সাহায্য',
    icon: 'fas fa-info-circle',
    roles: ['superadmin', 'businessman', 'teacher', 'newbusinessman'],
    children: [
      {
        label: 'FAQ',
        route: '/faq',
        roles: ['superadmin', 'businessman', 'teacher', 'newbusinessman']
      },
      {
        label: 'Help Center',
        route: '/help',
        roles: ['superadmin', 'businessman', 'teacher', 'newbusinessman']
      }
    ]
  }
];
