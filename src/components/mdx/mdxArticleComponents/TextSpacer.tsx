import styles from './TextSpacer.module.scss';

interface TextSpacerProps {
  size?: 1 | 2 | 4 | 8 | 16;
}

export default function TextSpacer({ size = 1 }: TextSpacerProps) {
  return <div className={styles[`spacer-${size}`]} />;
}
