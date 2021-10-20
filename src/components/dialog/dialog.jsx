import { memo, useRef } from 'react';
import styles from './dialog.module.css';

const Dialog = memo((props) => {

  const inputRef = useRef();
  const contentRef = useRef();
  const bodyRef = useRef();

  const isURLType = () => {
    const type = props.type;
    
    if (['IMAGE', 'VIDEO'].includes(type)) {
      return true;
    } else {
      return false;
    }
  }

  const RenderURL = () => {
    return (
      <>
        <span className={styles.contentName}>URL</span>
        <input ref={contentRef} className={styles.contentInput} type="text" name="content" />
      </>
    );
  }

  const RenderBody = () => {
    return (
      <>
        <span className={styles.contentName}>Body</span>
        <textarea ref={bodyRef} className={styles.contentTextarea} name="content" rows="2"></textarea>
      </>
    );
  }

  const Contents = () => {
    if (isURLType()) {
      return <RenderURL />;
    } else {
      return <RenderBody />;
    }
  }

  const closeDialog = (event) => {
    props.onCloseDialog();
  }

  const addItem = () => {
    const title = inputRef.current.value;
    const contents = isURLType() ? contentRef.current.value : bodyRef.current.value;
    const item = {
      type: props.type,
      id: Date.now(),
      title,
      contents
    };
    props.onAddItem(item);
  }

  return (
    <div className={styles.container}>
      <button className={styles.closeBtn} onClick={closeDialog}>❌</button>
      <span className={styles.titleSpan}>Title</span>
      <input ref={inputRef} className={styles.titleInput} type="text" name="title" /> 
      <Contents />
      <button className={styles.addBtn} onClick={addItem}>ADD</button>
    </div>
  )
});

export default Dialog;