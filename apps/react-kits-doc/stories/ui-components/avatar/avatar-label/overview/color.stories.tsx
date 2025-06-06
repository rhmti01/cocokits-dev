import { Avatar, AvatarLabel } from '@cocokits/react-avatar';
import { CCK_CONTROL, renderWithPageTab, renderWithThemeProp } from '@cocokits/storybook-addon-theme';
import { StoryObj } from '@cocokits/storybook-addon-theme-react';

export const Color: StoryObj<typeof AvatarLabel> = {
  name: 'Color',
  parameters: {
    docs: {
      description: {
        story: 'Color options enable seamless integration with various themes or to highlight specific actions.',
      },
    },
    cckAddon: {
      renderConditions: [renderWithThemeProp('color'), renderWithPageTab('Overview')],
      singleControls: ['type'],
      source: [
        {
          filename: 'Source Code',
          language: 'tsx',
          code: `
          import { AvatarLabel, Avatar } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>
                  <AvatarLabel
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    color='<%= color %>'
                    title="Alex Pearson"
                    description="UX Engineer">
                    <Avatar src="https://i.pravatar.cc?img=52" />
                  </AvatarLabel>
                <% }) %>
              </>
            );
          }
          `,
        },
      ],
      controls: [CCK_CONTROL.type()],
    },
  },
  render: (args) => (
    <>
      {args.cckControl.themeComponentConfig.color?.values.map((color, index) => (
        <AvatarLabel
          key={index}
          type={args.cckControl.type}
          color={color}
          title="Alex Pearson"
          description="UX Engineer">
          <Avatar src="https://i.pravatar.cc?img=52" />
        </AvatarLabel>

      ))}
    </>
  ),
};
