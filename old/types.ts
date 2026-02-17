
export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: string;
}

export interface Album {
  id: string;
  title: string;
  releaseDate: string;
  coverUrl: string;
  type: 'SINGLE' | 'ALBUM' | 'DVD';
}

export interface NavLink {
  label: string;
  path: string;
}
