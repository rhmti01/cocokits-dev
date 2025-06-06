import { ReactNode } from 'react';
import styled from 'styled-components';

import { scrollToStoryById } from './doc-page.util';
import { DocPageMarkdown } from './doc-page-markdown';

interface DocPageSectionProps {
  id: string;
  title: string;
  description?: string; // Markdown
  children: ReactNode;
}

export function DocPageSection({ id, title, description, children }: DocPageSectionProps) {
  return (
    <StyledHost id={id}>
      <h2>
        <StyledAnchor onClick={() => scrollToStoryById(id)} aria-hidden="true" tab-index="-1" target="_self">
          <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
          </svg>
        </StyledAnchor>
        {title}
      </h2>

      {description && <DocPageMarkdown>{description}</DocPageMarkdown>}

      {children}
    </StyledHost>
  );
}

// region ---------------- STYLES ----------------
const StyledHost = styled.div`
  margin: 48px 0 0 0;
`;

const StyledAnchor = styled.a`
  float: left;
  width: 28px;
  margin-left: -28px;
  visibility: hidden;
  cursor: pointer;

  h2:hover > & {
    visibility: visible;
  }
`;
// endregion
