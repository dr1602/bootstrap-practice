import type { ReactElement } from 'react';
import type React from 'react';

interface GeneralAccordionProps {
  title: string;
  node: ReactElement;
}

export const GeneralAccordion: React.FC<GeneralAccordionProps> = ({
  title,
  node,
}) => {
  return (
    <>
      <div className='accordion accordion-flush' id='accordionFlushExample'>
        <div className='accordion-item'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#flush-collapseOne'
            aria-expanded='false'
            aria-controls='flush-collapseOne'
          >
            {title}
          </button>
        </div>
        <div
          id='flush-collapseOne'
          className='accordion-collapse collapse'
          aria-labelledby='flush-headingOne'
        >
          {node}
        </div>
      </div>
    </>
  );
};
