import React, { memo } from 'react';
import styles from './item.module.css';

const Item = memo(({ item, onDeleteItem }) => {
  const { title, contents } = item;
  
  const ImageItem = () => {
    return (
      <div className={styles.mediaContainer}>
        <img className={styles.img} src={contents} alt={title} />
        <p className={styles.title} >{title}</p>
      </div>
    );
  }

  const VideoItem = () => {
    return (
      <div className={styles.mediaContainer}>
        <iframe
          className={styles.video}
          title="youtube video"
          type="text/html"
          src={contents}
          frameBorder="0"
        >
        </iframe>
        <p className={styles.title} >{title}</p>
      </div>
    );
  }

  const NoteItem = () => {
    return (
      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.contents}>{contents}</p>
      </div>
    );
  }

  const TaskItem = () => {
    return (
      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        <input className={styles.checkbox} type="checkbox" id="task" />
        <label htmlFor="task" className={styles.contents}>{contents}</label>
      </div>
    );
  }

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