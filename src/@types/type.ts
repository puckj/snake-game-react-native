export interface GestureEventType {
  nativeEvent: { translationX: number; translationY: number };
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface Boundary {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

export enum Direction {
  Right,
  Up,
  Left,
  Down,
}
