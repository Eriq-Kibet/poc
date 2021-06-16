import React from "react";
import { action } from "@storybook/addon-actions"
import { PaginationNav } from "carbon-components-react";
import { withKnobs, boolean, number } from "@storybook/addon-knobs";

const props = () => ({
  loop: boolean(false),
  page: number(0),
  totalItems: number(1),
  itemsShown: number(1),
  onchange: action("onChange"),
});
export default {
  title: "pagination",
  decorators: [
    withKnobs,
    (story) => <div style={{ width: "800px" }}>{story()}</div>,
  ],
  parameters: {
    component: PaginationNav,
  },
};
export const _PaginationNav = () => <PaginationNav {...props()} />;
_PaginationNav.StoryName = "paginationNav";
_PaginationNav.parameters = {
  info: {
    text: `
          Pagination Nav is a group of pagination buttons.
            `,
  },
};
