import { Boundary, Coordinate } from "../@types/type";

export const checkGameOver = (
  snakeHead: Coordinate,
  boundaries: Boundary
): boolean => {
  return (
    snakeHead.x < boundaries.xMin ||
    snakeHead.x > boundaries.xMax ||
    snakeHead.y < boundaries.yMin ||
    snakeHead.y > boundaries.yMax
  );
};
