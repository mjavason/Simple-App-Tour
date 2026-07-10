import { useEffect, useRef, useState } from 'react';

interface PositionPickerProps {
  imageSrc?: string;
  width?: number;
  height?: number;
}

export default function PositionPicker({
  imageSrc,
  //   width = 180,
  //   height = 180,
}: PositionPickerProps) {
  const [position, setPosition] = useState({
    left: 100,
    top: 100,
  });

  const dragging = useRef(false);

  const offset = useRef({
    x: 0,
    y: 0,
  });

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    dragging.current = true;

    offset.current = {
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    };

    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;

      setPosition({
        left: e.clientX - offset.current.x,
        top: e.clientY - offset.current.y,
      });
    };

    const onMouseUp = () => {
      dragging.current = false;
      document.body.style.userSelect = '';
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: 10,
          top: 10,
          padding: 8,
          background: '#222',
          color: '#fff',
          borderRadius: 6,
          fontFamily: 'monospace',
          zIndex: 1000000,
        }}
      >
        top: {position.top}px
        <br />
        left: {position.left}px
      </div>

      <div
        onMouseDown={onMouseDown}
        style={{
          position: 'fixed',
          left: position.left,
          top: position.top,
          //   width,
          //   height,
          cursor: 'grab',
          userSelect: 'none',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              pointerEvents: 'none',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 8,
              background: '#1976d2',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'monospace',
            }}
          >
            Drag Me
          </div>
        )}
      </div>
    </>
  );
}
