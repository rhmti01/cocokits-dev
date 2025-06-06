import { MenuComponent } from '@cocokits/angular-menu';
import { OverlayConnectElemOrigin } from '@cocokits/angular-overlay';
import { AddonParametersControlType, CCK_CONTROL, renderWithPageTab } from '@cocokits/storybook-addon-theme';
import { ngThemeArgsToTemplate, StoryObj } from '@cocokits/storybook-addon-theme-angular';

export const Default: StoryObj<MenuComponent> = {
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story:
          'Shows the default example with no additional configurations, providing an interactive example in its most basic form.',
      },
    },
    cckAddon: {
      renderConditions: [renderWithPageTab('Overview')],
      source: [
        {
          filename: 'example.component.html',
          language: 'angular-html',
          code: `
            <button
              cckButton
              [cckMenuTrigger]="menu"
              [menuSizes]="{minWidth: '150px'}"
              [menuOrigin]="'<%= origin %>'"
            >
              Open
            </button>
    
            <ng-template #menu>
              <cck-menu
                [closeOnSelectItem]="<%= closeOnSelectItem %>"
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              >
                <cck-menu-item>Edit</cck-menu-item>
                <cck-menu-item>Duplicate</cck-menu-item>
                <cck-divider></cck-divider>
                <cck-menu-item>Archive</cck-menu-item>
                <cck-menu-item disabled>Move</cck-menu-item>
                <cck-divider></cck-divider>
                <cck-menu-item>Share</cck-menu-item>
                <cck-menu-item>Add to favorite</cck-menu-item>
              </cck-menu>
            </ng-template>
          `,
        },
      ],
      hasControl: true,
      controls: [
        CCK_CONTROL.type(),
        CCK_CONTROL.color(),
        CCK_CONTROL.size(),
        CCK_CONTROL.additional(),
        {
          displayName: 'Origin',
          default: OverlayConnectElemOrigin.BottomLeft,
          options: Object.values(OverlayConnectElemOrigin),
          storyArgKey: 'origin',
          type: AddonParametersControlType.Select,
        },
        CCK_CONTROL.closeOnSelectItem(),
      ],
    },
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
        <button
          cck-button
          [cckMenuTrigger]="menu"
          [menuSizes]="{minWidth: '150px'}"
          [menuOrigin]="cckControl.origin"
        >
          Open
        </button>
 
        <ng-template #menu>
          <cck-menu [closeOnSelectItem]="cckControl.closeOnSelectItem" ${ngThemeArgsToTemplate(args)}>
            <cck-menu-item>Edit</cck-menu-item>
            <cck-menu-item>Duplicate</cck-menu-item>
            <cck-divider></cck-divider>
            <cck-menu-item>Archive</cck-menu-item>
            <cck-menu-item disabled>Move</cck-menu-item>
            <cck-divider></cck-divider>
            <cck-menu-item>Share</cck-menu-item>
            <cck-menu-item>Add to favorite</cck-menu-item>
          </cck-menu>
        </ng-template>
    `,
  }),
};
