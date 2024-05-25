import { usePageStyles } from '@/styles';

export const Announcements = () => {
  const styles = usePageStyles();

  return (
    <div className={styles.div}>
      <p className={styles.text}>
        This is the Announcements single page within the microfrontend
        Announcements {''}
      </p>
    </div>
  );
};
