import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="50"
      height="50"
      viewBox="0 0 36 36"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M7.15 10.072c.476-1.288 1.567-2.324 2.996-2.324c1.483 0 2.52.979 2.996 2.324l5.488 15.231c.168.448.224.84.224 1.036c0 1.092-.896 1.848-1.932 1.848c-1.177 0-1.765-.616-2.044-1.456L14 24H6.28l-.866 2.703c-.28.868-.868 1.484-2.016 1.484c-1.12 0-2.072-.84-2.072-1.96c0-.448.14-.784.196-.924L7.15 10.072zm.308 10.163h5.32l-2.604-8.119h-.056l-2.66 8.119zM20 10.1c0-1.344.924-2.1 2.212-2.1h5.376c2.912 0 5.265 1.96 5.265 4.928c0 1.96-.812 3.276-2.605 4.116v.056c2.38.336 4.256 2.424 4.256 4.859c0 3.948-2.632 6.041-6.496 6.041H22.24c-1.288 0-2.24-.876-2.24-2.192V10.1zm4.2 5.9h2.184c1.372 0 2.268-.815 2.268-2.216c0-1.315-1.036-2.088-2.268-2.088H24.2V16zm0 8h3.304c1.513 0 2.632-.729 2.632-2.296c0-1.315-1.008-2.112-2.968-2.112H24.2V24z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
