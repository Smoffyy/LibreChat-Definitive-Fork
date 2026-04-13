import { useAtom } from 'jotai';
import { Dropdown } from '@librechat/client';
import { cursorShapeAtom } from '~/store/cursorShape';
import type { CursorShape } from '~/store/cursorShape';
import { useLocalize } from '~/hooks';

export default function CursorShapeSelector() {
  const localize = useLocalize();
  const [cursorShape, setCursorShape] = useAtom(cursorShapeAtom);
  const labelId = 'cursor-shape-selector-label';

  const options = [
    { value: 'circle', label: localize('com_nav_cursor_circle') },
    { value: 'square', label: localize('com_nav_cursor_square') },
    { value: 'square-blink', label: localize('com_nav_cursor_square_blink') },
    { value: 'triangle', label: localize('com_nav_cursor_triangle') },
  ];

  return (
    <div className="flex w-full items-center justify-between">
      <div id={labelId}>{localize('com_nav_cursor_shape')}</div>
      <Dropdown
        value={cursorShape}
        options={options}
        onChange={(val) => setCursorShape(val as CursorShape)}
        testId="cursor-shape-selector"
        sizeClasses="w-[180px]"
        className="z-50"
        aria-labelledby={labelId}
      />
    </div>
  );
}