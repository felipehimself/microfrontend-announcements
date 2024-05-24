import { usePageStyles } from '@/styles';
import { Field, ProgressBar } from '@fluentui/react-components';

export const Fallback = () => {
  const styles = usePageStyles();
  return (
    <div className={styles.div}>
      <Field
        style={{ flex: 0.8 }}
        validationMessage="Loading page..."
        validationState="none"
      >
        <ProgressBar />
      </Field>
    </div>
  );
};
