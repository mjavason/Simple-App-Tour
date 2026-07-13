import {
  getSpeechBubbleFontSize,
  getSpeechBubbleWidth,
  getTailStyle,
} from './functions';
import type { Breakpoint, HighlightAction, Placement } from './types';

function DefaultSpeechBubble({
  title,
  content,
  buttonLabel,
  tailPlacement,
  breakpoint,
  highlightAction,
  onButtonClick,
}: {
  title?: string;
  content: string;
  buttonLabel?: string;
  tailPlacement?: Placement;
  breakpoint: Breakpoint;
  highlightAction: HighlightAction;
  onButtonClick?: () => void;
}) {
  return tailPlacement ? (
    <div
      style={{
        position: 'relative',
        maxWidth: getSpeechBubbleWidth(breakpoint),
        background: 'white',
        borderRadius: 8,
        padding: 8,
        textAlign: 'center',
        fontSize: getSpeechBubbleFontSize(breakpoint),
        height: 'fit-content',
        zIndex: 10000,
      }}
    >
      {/* Tail */}
      <div style={getTailStyle(tailPlacement)} />

      {title && (
        <h3
          style={{
            paddingBottom: 16,
            fontWeight: 'bold',
            zIndex: 10000,
          }}
        >
          {title}
        </h3>
      )}

      <p style={{ position: 'relative', zIndex: 10000 }}>{content}</p>

      {(highlightAction === 'none' || !highlightAction) && (
        <button
          style={{
            marginTop: 16,
            borderRadius: 4,
            backgroundColor: '#3b82f6',
            padding: '8px 16px',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={onButtonClick}
        >
          {buttonLabel ?? 'Continue'}
        </button>
      )}
    </div>
  ) : (
    <div
      style={{
        position: 'fixed',
        maxWidth: getSpeechBubbleWidth(breakpoint),
        background: 'white',
        borderRadius: 8,
        padding: 12,
        zIndex: 10000,
        textAlign: 'center',
        fontSize: getSpeechBubbleFontSize(breakpoint),
        height: 'fit-content',
      }}
    >
      {title && (
        <h3
          style={{
            paddingBottom: 16,
            fontWeight: 'bold',
          }}
        >
          {title}
        </h3>
      )}

      <p>{content}</p>

      {(highlightAction === 'none' || !highlightAction) && (
        <button
          style={{
            backgroundColor: '#3b82f6',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: 4,
            marginTop: 16,
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={onButtonClick}
        >
          {buttonLabel ?? 'Continue'}
        </button>
      )}
    </div>
  );
}

export default DefaultSpeechBubble;
