import styles from './index.module.css';

interface IAvatar {
  uri: string;
  border: boolean;
}

export function Avatar({ uri, border = true }: IAvatar) {
  return (
    <img className={border ? styles.avatarWithBorder : styles.avatar} src={uri} />
  )
}