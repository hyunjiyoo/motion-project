import { memo } from 'react';
import styles from './item.module.css';

const Item = memo(({ item, onDeleteItem }) => {
  const { id, title, contents } = item;
  
  const convertVideoURL = (url) => {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9(-|_)]{11}))|(?:youtu.be\/([a-zA-Z0-9(-|_)]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }

  const ImageItem = () => (
    <div className={styles.mediaContainer}>
      <img className={styles.img} src={contents} alt={title} />
      <p className={styles.title} >{title}</p>
    </div>
  );

  const VideoItem = () => {
    const url = convertVideoURL(contents);
    
    return (
      <div className={styles.mediaContainer}>
        <iframe
          className={styles.video}
          title="youtube video"
          type="text/html"
          src={url}
          frameBorder="0"
        >
        </iframe>
        <p className={styles.title} >{title}</p>
      </div>
    );
  }

  const NoteItem = () => (
    <div className={styles.textContainer}>
      <p className={styles.title}>{title}</p>
      <p className={styles.contents}>{contents}</p>
    </div>
  );

  const TaskItem = () => (
    <div className={styles.textContainer}>
      <p className={styles.title}>{title}</p>
      <input className={styles.checkbox} type="checkbox" id={id} />
      <label htmlFor={id} className={styles.contents}>{contents}</label>
    </div>
  );

  const SelectedItem = () => {
    switch (item.type) {
      case 'IMAGE':
        return <ImageItem />;
      case 'VIDEO':
        return <VideoItem />;
      case 'NOTE':
        return <NoteItem />;
      case 'TASK':
        return <TaskItem />;
      default:
        return new Error('incorrect item data');
    }
  }

  const deleteItem = () => {
    onDeleteItem(item);
  }
  
  return (
    <div className={styles.itemContainer}>
      <SelectedItem />
      <button className={styles.closeBtn} onClick={deleteItem}>❌</button>
    </div>
  );
});

export default Item;