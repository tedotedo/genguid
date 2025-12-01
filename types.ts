export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface PathwayStep {
  id: number;
  title: string;
  description: string;
  details: string;
  iconName: string;
  links?: { label: string; url: string }[];
  keyTakeaway?: string;
}

export interface StatData {
  name: string;
  value: number;
  fill: string;
}