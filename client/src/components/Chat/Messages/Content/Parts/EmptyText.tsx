import { memo } from 'react';
import { useAtomValue } from 'jotai';
import { cursorShapeAtom } from '~/store/cursorShape';

/** Streaming cursor placeholder — no bottom margin to match Container's structure and prevent CLS */
const EmptyTextPart = memo(() => {
  const cursorShape = useAtomValue(cursorShapeAtom);
  const cursorClass = cursorShape === 'circle' ? 'result-thinking' : `result-thinking-${cursorShape}`;

  return (
    <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible">
      <div className="markdown prose dark:prose-invert light w-full break-words dark:text-gray-100">
        <div className="absolute">
          <p className="submitting relative">
            <span className={cursorClass} />
          </p>
        </div>
      </div>
    </div>
  );
});

export default EmptyTextPart;
