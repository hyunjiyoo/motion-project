import styles from './app.module.css';
import Header from './components/header/header';
import List from './components/list/list';
import Footer from './components/footer/footer';
import Dialog from './components/dialog/dialog';
import { useCallback, useState } from 'react';

const App = () => {

  const [items, setItems] = useState({});
  const [dialog, isDialog] = useState(false);
  const [type, setType] = useState(null);

  const onDialog = useCallback((type) => {
    setType(type);
    isDialog(true);
  }, []);

  const onCloseDialog = useCallback(() => {
    isDialog(false);
  }, []);

  const onAddItem = (item) => {
    setItems(items => {
      isDialog(false);
      const updated = {
        ...items,
        [item.id]: item
      };
      return updated;
    });
  }

  const onDeleteItem = useCallback((item) => {
    setItems(items => {
      const updated = { ...items };
      delete updated[item.id];
      return updated;
    });
  }, []);

  return (
    <div className={styles.container}>
      <Header onDialog={onDialog} />
      <List
        items={items}
        onDeleteItem={onDeleteItem}
      />
      {dialog &&
        <Dialog
          type={type}
          onCloseDialog={onCloseDialog}
          onAddItem={onAddItem}
        />
      }
      <Footer />
    </div>
  );
}

export default App;
