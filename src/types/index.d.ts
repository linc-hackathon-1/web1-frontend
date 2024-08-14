export type ContainerSize = 'match-parent' | 'full-width' | 'auto';

export interface VideoItemProps {
  id: string;
  videoName: string;
  url: string;
  likes: number;
  provinceName: string;
}
