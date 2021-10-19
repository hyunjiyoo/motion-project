import React, { memo } from 'react';
import Item from '../item/item';
import styles from './list.module.css';

const List = memo(({ items, onDeleteItem }) => (
    <section className={styles.container}>
      {
        Object.keys(items).map(key =>
          <Item 
            key={key}
            item={items[key]}
            onDeleteItem={onDeleteItem}
          />
        )
      }
    </section>
  )
);

export default List;