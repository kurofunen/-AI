
import { NewsItem, Album, NavLink } from './types';

export const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=2000&auto=format&fit=crop',
    title: 'LOST CORNER',
    subtitle: '6th Album 2024.08.21 Release'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2000&auto=format&fit=crop',
    title: 'SAYONARA MATA ITSUKA!',
    subtitle: 'New Single Out Now'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2000&auto=format&fit=crop',
    title: 'JUNK TOUR 2025',
    subtitle: 'Live Tour Coming Soon'
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: 'NEWS', path: '#news' },
  { label: 'DISCOGRAPHY', path: '#discography' },
  { label: 'VIDEO', path: '#video' },
  { label: 'LIVE', path: '#live' },
  { label: 'GOODS', path: '#goods' },
  { label: 'PROFILE', path: '#profile' },
];

export const MOCK_NEWS: NewsItem[] = [
  { id: '1', date: '2024.11.15', title: '「さよーならまたいつか！」NHK紅白歌合戦 出場決定', category: 'NEWS' },
  { id: '2', date: '2024.10.02', title: '新曲「アズール」配信リリース', category: 'RELEASE' },
  { id: '3', date: '2024.09.20', title: '2025 TOUR / JUNK 開催概要発表', category: 'LIVE' },
  { id: '4', date: '2024.08.11', title: 'LOST CORNER アルバム特設サイトオープン', category: 'WEB' },
  { id: '5', date: '2024.07.05', title: '映画『ラストマイル』主題歌「がらくた」解禁', category: 'NEWS' },
];

export const MOCK_ALBUMS: Album[] = [
  { id: 'a1', title: 'LOST CORNER', releaseDate: '2024.08.21', coverUrl: 'https://picsum.photos/seed/lost/600/600', type: 'ALBUM' },
  { id: 'a2', title: 'がらくた', releaseDate: '2024.07.26', coverUrl: 'https://picsum.photos/seed/garakuta/600/600', type: 'SINGLE' },
  { id: 'a3', title: '毎日', releaseDate: '2024.05.27', coverUrl: 'https://picsum.photos/seed/mainichi/600/600', type: 'SINGLE' },
  { id: 'a4', title: 'さよーならまたいつか！', releaseDate: '2024.04.12', coverUrl: 'https://picsum.photos/seed/sayonara/600/600', type: 'SINGLE' },
  { id: 'a5', title: 'STRAY SHEEP', releaseDate: '2020.08.05', coverUrl: 'https://picsum.photos/seed/stray/600/600', type: 'ALBUM' },
];
