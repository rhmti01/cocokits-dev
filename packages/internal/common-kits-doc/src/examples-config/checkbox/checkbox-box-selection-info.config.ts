import { ExampleStoryCssVariables, ExampleStoryTemplateArgs, ThemeId } from '@cocokits/storybook-addon-theme';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExampleArgs {
  IconSize: string;
}

export const TEMPLATE_ARGS: ExampleStoryTemplateArgs<ExampleArgs> = {
  [ThemeId.FramesX]: {
    IconSize: 'lg',
  },
  [ThemeId.CocoKits]: {
    IconSize: 'md',
  },
};

export const CSS_VARIABLES: ExampleStoryCssVariables = {
  [ThemeId.FramesX]: {
    '--cck-checkbox-border-color': 'var(--base-border)',
    '--cck-checkbox-border-width': 'var(--spacing-1)',
    '--cck-checkbox-border-style': 'solid',
    '--cck-checkbox-border-radius': 'var(--radi-6)',
    '--cck-checkbox-padding': 'var(--spacing-8)',
    '--cck-checkbox-gap': 'var(--spacing-7)',

    '--cck-checkbox-box-gap': 'var(--spacing-5)',
    '--cck-checkbox-icon-color': 'var(--colors-gray-300)',
  },
  [ThemeId.CocoKits]: {
    '--cck-checkbox-border-color': 'var(--color-disabled-surface)',
    '--cck-checkbox-border-width': '1px',
    '--cck-checkbox-border-style': 'solid',
    '--cck-checkbox-border-radius': '12px',
    '--cck-checkbox-padding': '16px',
    '--cck-checkbox-gap': 'var(--toggle-spacing-gap)',

    '--cck-checkbox-box-gap': 'var(--toggle-size-backdrop-sm)',
    '--cck-checkbox-icon-color': '#D0D0D4',
  },
};
