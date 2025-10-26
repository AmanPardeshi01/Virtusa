-- Indexing
use javadb;

CREATE INDEX idx_CustomerId ON customers (CustomerId);

-- Composite index
CREATE INDEX idx_CustomerId ON customers (CustomerId, Email);

-- Unique index
CREATE UNIQUE INDEX idx_unique_CustomerId ON customers (CustomerId);

select * from customers;
