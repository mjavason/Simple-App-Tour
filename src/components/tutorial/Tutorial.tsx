import { useEffect, useState } from 'react';
import { characterPositions, textPositions } from './constants';
import {
  getCharacterWidth,
  getPointerPosition,
  getPointerWidth,
  getSpeechBubbleFontSize,
  getSpeechBubbleWidth,
  getTailStyle,
} from './functions';
import type { TutorialStep } from './types';
import { useBreakpoint } from './useBreakpoint';
import { useTutorial } from './useTutorial';

interface Props {
  isOpen: boolean;
  steps: TutorialStep[];
  onFinish?: () => void;
}

export default function Tutorial({ isOpen, steps, onFinish }: Props) {
  const { step, next } = useTutorial(steps, onFinish);
  const breakpoint = useBreakpoint();
  const [rects, setRects] = useState<DOMRect[]>([]);
  const overlayColor = 'rgba(0, 0, 0, 0.4)';

  useEffect(() => {
    if (!step.highlight) {
      setRects([]);
      return;
    }

    const updateRects = () => {
      const values = step.highlight
        ? ([
            document
              .getElementById(step.highlight.elementId)
              ?.getBoundingClientRect(),
          ].filter(Boolean) as DOMRect[])
        : [];

      setRects(values);
    };

    updateRects();

    window.addEventListener('resize', updateRects);
    window.addEventListener('scroll', updateRects);

    return () => {
      window.removeEventListener('resize', updateRects);
      window.removeEventListener('scroll', updateRects);
    };
  }, [step]);

  if (!isOpen) return null;

  return (
    <>
      {/* Dark overlay with highlight */}
      {rects.map((rect, i) => (
        <div key={i}>
          {/* Top */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: rect.top,
              background: overlayColor,
              zIndex: 9997,
            }}
          />

          {/* Bottom */}
          <div
            style={{
              position: 'fixed',
              top: rect.bottom,
              left: 0,
              width: '100vw',
              bottom: 0,
              background: overlayColor,
              zIndex: 9997,
            }}
          />

          {/* Left */}
          <div
            style={{
              position: 'fixed',
              top: rect.top,
              left: 0,
              width: rect.left,
              height: rect.height,
              background: overlayColor,
              zIndex: 9997,
            }}
          />

          {/* Right */}
          <div
            style={{
              position: 'fixed',
              top: rect.top,
              left: rect.right,
              right: 0,
              height: rect.height,
              background: overlayColor,
              zIndex: 9997,
            }}
          />

          {/* Highlight border */}
          <div
            style={{
              position: 'fixed',
              left: rect.left,
              top: rect.top,
              width: rect.width,
              height: rect.height,
              border: '4px solid gold',
              borderRadius: 12,
              pointerEvents:
                step.highlight?.action === 'click' ? 'none' : 'auto',
              zIndex: 9998,
            }}
          />
        </div>
      ))}

      {/* Complete dark overlay when no highlight is present */}
      {rects.length === 0 && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: overlayColor,
            zIndex: 9997,
          }}
        />
      )}

      {/* Pointer */}
      {step.pointerPosition?.placement && rects.length > 0 && (
        <img
          src={step.pointerPosition.icon}
          style={{
            position: 'fixed',
            width: getPointerWidth(breakpoint),
            left: getPointerPosition(
              rects[0],
              step.pointerPosition?.placement,
              breakpoint,
            ).left,
            top: getPointerPosition(
              rects[0],
              step.pointerPosition?.placement,
              breakpoint,
            ).top,
            zIndex: 9999,
          }}
        />
      )}

      {/* Character and speech bubble */}
      {step.characterPosition ? (
        <div
          style={{
            position: 'fixed',
            zIndex: 10000,
            display: 'flex',

            left: characterPositions[step.characterPosition?.placement]?.left
              ? characterPositions[step.characterPosition?.placement].left
              : undefined,

            right: characterPositions[step.characterPosition?.placement].right
              ? characterPositions[step.characterPosition?.placement].right
              : undefined,

            bottom: characterPositions[step.characterPosition?.placement]
              ?.bottom
              ? characterPositions[step.characterPosition?.placement].bottom
              : undefined,

            flexDirection:
              textPositions[step.textPlacement ?? 'bottom'].flexDirection,
          }}
        >
          {/* Character */}
          {step.characterPosition && (
            <img
              src={step.characterPosition.icon}
              style={{
                zIndex: 9999,
                width: getCharacterWidth(breakpoint),
              }}
              className="pt-4"
            />
          )}

          {/* Speech bubble */}
          <div
            style={{
              position: 'relative',
              width: getSpeechBubbleWidth(breakpoint),
              background: 'white',
              borderRadius: 8,
              padding: 12,
              textAlign: 'center',
              fontSize: getSpeechBubbleFontSize(breakpoint),
              height: 'fit-content',
              zIndex: 10000,
            }}
          >
            {/* Tail */}
            <div style={getTailStyle(step.characterPosition.placement)} />

            {step.title && <h3 className="pb-4 font-bold">{step.title}</h3>}

            <p>{step.content}</p>

            {(!step.highlight?.action || step.highlight.action === 'none') && (
              <button
                className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:cursor-pointer"
                onClick={next}
              >
                {step.actionButtonText ?? 'Continue'}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            width: getSpeechBubbleWidth(breakpoint),
            background: 'white',
            borderRadius: 8,
            padding: 12,
            zIndex: 10000,
            textAlign: 'center',
            fontSize: getSpeechBubbleFontSize(breakpoint),
            height: 'fit-content',
          }}
        >
          {step.title && <h3 className={`pb-4 font-bold`}>{step.title}</h3>}

          <p>{step.content}</p>

          {!step.highlight?.action || step.highlight.action === 'none' ? (
            <button
              className={`bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:cursor-pointer`}
              onClick={next}
            >
              {step.actionButtonText ?? 'Continue'}
            </button>
          ) : null}
        </div>
      )}
    </>
  );
}
