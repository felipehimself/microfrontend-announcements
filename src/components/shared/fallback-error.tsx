import { usePageStyles } from '@/styles';

export const FallbackError = () => {
  const styles = usePageStyles();

  return (
    <div className={styles.div}>
      <p className={styles.text}>
        Ooops! Something happened, try reloading the page
      </p>
    </div>
  );
};
