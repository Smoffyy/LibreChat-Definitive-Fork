import { createStorageAtom } from './jotai-utils';

export type CursorShape = 'circle' | 'square' | 'square-blink' | 'triangle';

export const cursorShapeAtom = createStorageAtom<CursorShape>('cursorShape', 'circle');