import { createStorageAtom } from './jotai-utils';

const DEFAULT_SHOW_THINKING = false;
const DEFAULT_LIVE_THINKING_PREVIEW = false;

/**
 * This atom controls whether AI reasoning/thinking content is expanded by default.
 */
export const showThinkingAtom = createStorageAtom<boolean>('showThinking', DEFAULT_SHOW_THINKING);

/**
 * Controls whether a live streaming preview box is shown during active thinking.
 */
export const liveThinkingPreviewAtom = createStorageAtom<boolean>('liveThinkingPreview', DEFAULT_LIVE_THINKING_PREVIEW);