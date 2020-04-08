/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search',
  },
  contactMe: {
    id: `${scope}.contactMe`,
    defaultMessage: 'Contact me',
  },
});
