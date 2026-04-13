import { createStorageAtom } from './jotai-utils';

const INPUT_MODEL_SELECTOR = false;

/** When true, ModelSelector renders in the chat input bar instead of the header */
export const inputModelSelectorAtom = createStorageAtom<boolean>('inputModelSelector', INPUT_MODEL_SELECTOR);