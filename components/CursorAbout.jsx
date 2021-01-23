import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Cursor() {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;

    cursorRef.current.classList.add('styledCursor');

    document.addEventListener('mousemove', (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        'style',
        'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;'
      );
    });

    document.addEventListener('click', () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add('cursorOnClick');
      setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove('cursorOnClick');
      }, 500);
    });

    document.addEventListener('mouseleave', () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add('removeCursor');
    });

    document.addEventListener('mouseenter', () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.remove('removeCursor');
    });
  }, []);

  return <StyledCursor ref={cursorRef} />;
}

const StyledCursor = styled.div`
  z-index: 9999;
  position: absolute;
  pointer-events: none;
`;
