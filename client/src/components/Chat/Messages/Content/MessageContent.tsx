import { memo, Suspense, useMemo } from 'react';
import { useAtomValue } from 'jotai';
import { useRecoilValue } from 'recoil';
import { DelayedRender } from '@librechat/client';
import type { TMessage } from 'librechat-data-provider';
import type { TMessageContentProps, TDisplayProps } from '~/common';
import Error from '~/components/Messages/Content/Error';
import { liveThinkingPreviewAtom } from '~/store/showThinking';
import { cursorShapeAtom } from '~/store/cursorShape';
import { useMessageContext } from '~/Providers';
import MarkdownLite from './MarkdownLite';
import EditMessage from './EditMessage';
import Thinking from './Parts/Thinking';
import { useLocalize } from '~/hooks';
import Container from './Container';
import Markdown from './Markdown';
import { cn } from '~/utils';
import store from '~/store';

const ERROR_CONNECTION_TEXT = 'Error connecting to server, try refreshing the page.';
const DELAYED_ERROR_TIMEOUT = 5500;
const UNFINISHED_DELAY = 250;

const parseThinkingContent = (text: string) => {
  const closedMatch = text.match(/:::thinking([\s\S]*?):::/);
  if (closedMatch) {
    return {
      thinkingContent: closedMatch[1].trim(),
      regularContent: text.replace(/:::thinking[\s\S]*?:::/, '').trim(),
      activeThinking: '',
    };
  }
  const openMatch = text.match(/:::thinking([\s\S]*)/);
  if (openMatch) {
    return {
      thinkingContent: '',
      regularContent: '',
      activeThinking: openMatch[1],
    };
  }
  return {
    thinkingContent: '',
    regularContent: text,
    activeThinking: '',
  };
};

const LoadingFallback = () => (
  <div className="text-message mb-[0.625rem] flex min-h-[20px] flex-col items-start gap-3 overflow-visible">
    <div className="markdown prose dark:prose-invert light w-full break-words dark:text-gray-100">
      <div className="absolute">
        <p className="submitting relative">
          <span className="result-thinking" />
        </p>
      </div>
    </div>
  </div>
);

const ErrorBox = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    role="alert"
    aria-live="assertive"
    className={cn(
      'rounded-xl border border-red-500/20 bg-red-500/5 px-3 py-2 text-sm text-gray-600 dark:text-gray-200',
      className,
    )}
  >
    {children}
  </div>
);

const ConnectionError = ({ message }: { message?: TMessage }) => {
  const localize = useLocalize();

  return (
    <Suspense fallback={<LoadingFallback />}>
      <DelayedRender delay={DELAYED_ERROR_TIMEOUT}>
        <Container message={message}>
          <div className="mt-2 rounded-xl border border-red-500/20 bg-red-50/50 px-4 py-3 text-sm text-red-700 shadow-sm transition-all dark:bg-red-950/30 dark:text-red-100">
            {localize('com_ui_error_connection')}
          </div>
        </Container>
      </DelayedRender>
    </Suspense>
  );
};

export const ErrorMessage = ({
  text,
  message,
  className = '',
}: Pick<TDisplayProps, 'text' | 'className'> & { message?: TMessage }) => {
  if (text === ERROR_CONNECTION_TEXT) {
    return <ConnectionError message={message} />;
  }

  return (
    <Container message={message}>
      <ErrorBox className={className}>
        <Error text={text} />
      </ErrorBox>
    </Container>
  );
};

const DisplayMessage = ({ text, isCreatedByUser, message, showCursor }: TDisplayProps) => {
  const { isSubmitting = false, isLatestMessage = false } = useMessageContext();
  const enableUserMsgMarkdown = useRecoilValue(store.enableUserMsgMarkdown);
  const cursorShape = useAtomValue(cursorShapeAtom);

  const showCursorState = useMemo(
    () => showCursor === true && isSubmitting,
    [showCursor, isSubmitting],
  );

  const content = useMemo(() => {
    if (!isCreatedByUser) {
      return <Markdown content={text} isLatestMessage={isLatestMessage} />;
    }
    if (enableUserMsgMarkdown) {
      return <MarkdownLite content={text} />;
    }
    return <>{text}</>;
  }, [isCreatedByUser, enableUserMsgMarkdown, text, isLatestMessage]);

  return (
    <Container message={message}>
      <div
        className={cn(
          'markdown prose message-content dark:prose-invert light w-full break-words',
          isSubmitting && 'submitting',
          showCursorState && text.length > 0 && (cursorShape === 'circle' ? 'result-streaming' : `result-streaming-${cursorShape}`),
          isCreatedByUser && !enableUserMsgMarkdown && 'whitespace-pre-wrap',
          isCreatedByUser ? 'dark:text-gray-20' : 'dark:text-gray-100',
        )}
      >
        {content}
      </div>
    </Container>
  );
};

export const UnfinishedMessage = ({ message }: { message: TMessage }) => (
  <ErrorMessage
    message={message}
    text="The response is incomplete; it's either still processing, was cancelled, or censored. Refresh or try a different prompt."
  />
);

const LiveThinkingPreview = ({ content }: { content: string }) => {
  const livePreview = useAtomValue(liveThinkingPreviewAtom);
  if (!livePreview) {
    return null;
  }

  const lines = content
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(-3);

  return (
    <div className="mb-4 rounded-lg border border-border-light bg-surface-secondary/60 p-3 backdrop-blur-sm">
      <div className="mb-2 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-secondary" aria-hidden="true" />
        <span className="text-xs text-text-secondary">Thinking...</span>
      </div>
      <div className="space-y-0.5 text-sm text-text-secondary opacity-70" aria-live="polite" aria-label="AI is thinking">
        {lines.map((line, i) => (
          <p key={i} className="truncate leading-5">{line}</p>
        ))}
      </div>
    </div>
  );
};

const MessageContent = ({
  text,
  edit,
  error,
  unfinished,
  isSubmitting,
  isLast,
  ...props
}: TMessageContentProps) => {
  const { message } = props;
  const { messageId } = message;

  const { thinkingContent, regularContent, activeThinking } = useMemo(
    () => parseThinkingContent(text),
    [text],
  );
  const isActiveThinking = isLast && isSubmitting && activeThinking.length > 0;
  const showRegularCursor = useMemo(() => isLast && isSubmitting, [isLast, isSubmitting]);

  const unfinishedMessage = useMemo(
    () =>
      !isSubmitting && unfinished ? (
        <Suspense>
          <DelayedRender delay={UNFINISHED_DELAY}>
            <UnfinishedMessage message={message} />
          </DelayedRender>
        </Suspense>
      ) : null,
    [isSubmitting, unfinished, message],
  );

  if (error) {
    return <ErrorMessage message={message} text={text} />;
  }

  if (edit) {
    return <EditMessage text={text} isSubmitting={isSubmitting} {...props} />;
  }

  return (
    <>
      {isActiveThinking && <LiveThinkingPreview content={activeThinking} />}
      {thinkingContent.length > 0 && (
        <Thinking key={`thinking-${messageId}`}>{thinkingContent}</Thinking>
      )}
      {!isActiveThinking && (
        <DisplayMessage
          key={`display-${messageId}`}
          showCursor={showRegularCursor}
          text={regularContent}
          {...props}
        />
      )}
      {unfinishedMessage}
    </>
  );
};

const MemoizedMessageContent = memo(MessageContent);
MemoizedMessageContent.displayName = 'MessageContent';

export default MemoizedMessageContent;
