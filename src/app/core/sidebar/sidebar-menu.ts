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
  label: 'সাইট পরিচিতি',
  icon: 'fas fa-info-circle',
  route: '/about',
  hideWhenLoggedIn: true
  },
  {
    label: 'লগইন',
    icon: 'fas fa-sign-in-alt',
    route: '/login',
    hideWhenLoggedIn: true
  },
  {
    label: 'Home',
    icon: 'fas fa-sign-in-alt',
    route: '/',
    hideWhenLoggedIn: true
  },
  {
    label: 'হোম',
    icon: 'fas fa-fw fa-home',
    route: '/admin/dashboard',
    roles: ['superadmin', 'teacher', 'businessman', 'newbusinessman']
  },
  {
    label: 'ব্যবসায়ীর প্রোফাইল',
    icon: 'fas fa-fw fa-user-alt',
    route: '/businessman/profile',
    roles: ['superadmin', 'businessman']
  },
  {
    label: 'ব্যবসায়ীর অভিজ্ঞতা',
    icon: 'fas fa-fw fa-user-tie',
    route: '/businessman/about',
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
      {
        label: 'ক্রাউডফান্ডিং',
        img: 'assets/img/new-businessman.png',
        route: '/subscriptions',
        roles: ['superadmin', 'newbusinessman']
      },
      {
        label: 'ব্লগ পোস্ট',
        img: 'assets/img/new-businessman.png',
        route: '/blog',
        roles: ['superadmin', 'newbusinessman']
      },
      {
        label: 'আইডিয়া শেয়ার',
        img: 'assets/img/new-businessman.png',
        route: '/ideas',
        roles: ['superadmin', 'newbusinessman']
      }
    ]
  },
  {
    label: 'শিক্ষক',
    icon: 'fas fa-fw fa-user-alt',
    roles: ['superadmin','teacher'],
    children: [
      {
        label: 'শিক্ষক প্রোফাইল',
        icon: 'fas fa-fw fa-user-alt',
        route: '/teacher/profile',
        roles: ['superadmin', 'teacher']
      },
      {
        label: 'ভিডিও/রিভিউ সেকশন',
        icon: 'fas fa-fw fa-video',
        route: '/teacher/videos',
        roles: ['superadmin', 'teacher']
      }
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
