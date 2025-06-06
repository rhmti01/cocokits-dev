import { ChipListComponent } from '@cocokits/angular-form-field';
import { renderWithPageTab, renderWithThemeProp } from '@cocokits/storybook-addon-theme';
import { StoryObj } from '@cocokits/storybook-addon-theme-angular';

export const Type: StoryObj<ChipListComponent> = {
  name: 'Type',
  parameters: {
    docs: {
      description: {
        story:
          'Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles.',
      },
    },
    cckAddon: {
      renderConditions: [renderWithThemeProp('type'), renderWithPageTab('Overview')],
      source: [
        {
          filename: 'example.component.html',
          language: 'angular-html',
          code: `
            <% themeComponentConfig.type.values.map(type => { %>
            <cck-form-field
              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
            >
              <cck-label>Chip List</cck-label>
              <cck-chip-list [chips]="['Steak', 'Pizza', 'Burger']" placeholder="Add a New Food" [addOnBlur]="true">
              </cck-chip-list>
            </cck-form-field>
            <% }) %>
          `,
        },
      ],
    },
  },
  render: (args) => ({
    props: {
      ...args,
      chips: ['Steak', 'Pizza'],
    },
    template: `
      @for (type of cckControl.themeComponentConfig.type.values; let col = $index; track type) {
        <cck-form-field [type]="type">
          <cck-label>Chip List</cck-label>
          <cck-chip-list [chips]="chips" [placeholder]="'Add a new food'" [addOnBlur]="true">
          </cck-chip-list>
        </cck-form-field>
      }
    `,
  }),
};
