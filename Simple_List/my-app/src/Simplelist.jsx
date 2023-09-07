import React, { useState } from 'react';

const SimpleList = () => {
    const [items, setItems] = useState(['Hola', 'Visca el barça']);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    return (
        <div>
            
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default SimpleList;