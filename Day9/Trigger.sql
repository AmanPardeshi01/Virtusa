CREATE TABLE items (
    id INT PRIMARY KEY, -- clustered index
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
 
INSERT INTO items(id, name, price) 
VALUES (1, 'Item', 500.00);

CREATE TABLE item_changes (
change_id INT PRIMARY KEY AUTO_INCREMENT,
item_id INT,
change_type VARCHAR(10),
change_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (item_id) REFERENCES items (id)
);

DELIMITER //
CREATE TRIGGER update_items_trigger
AFTER UPDATE
ON items
FOR EACH ROW
BEGIN
INSERT INTO item_changes (item_id, change_type)
VALUES (NEW.id, "UPDATE");
END;
//

UPDATE ITEMS SET NAME='laptop' WHERE ID=1;
SELECT * FROM items;
SELECT * FROM item_changes;

drop table items;
drop table item_changes;
drop trigger update_items_trigger;