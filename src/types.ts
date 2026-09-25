export interface SermonPoint {
  title: string;
  desc: string;
}

export interface Sermon {
  num: number;
  modId: number;
  modTitle: string;
  title: string;
  scripture: string;
  scriptureVerseText: string;
  theme: string;
  points: SermonPoint[];
  faith: string;
  prayer: string;
  moodTags: string[];
}

export interface ModuleCategory {
  id: number;
  title: string;
  subtitle: string;
  range: string;
  iconName: string;
  count: number;
}

export type TextSizeOption = 'sm' | 'base' | 'lg' | 'xl';

export interface ThematicTrack {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  badge: string;
  description: string;
  sermonIds: number[];
}
