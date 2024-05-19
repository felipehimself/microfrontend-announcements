import { makeStyles, typographyStyles } from '@fluentui/react-components';

export const usePageStyles = makeStyles({
  div: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: typographyStyles.body2,
});
