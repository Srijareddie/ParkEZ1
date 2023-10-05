-- Inserting users
INSERT INTO users (username, password, is_active) VALUES 
('customer_support@example.com', '$2a$12$ueHwq6TvxZ89.KHevWdupesQpFAj8VRYSjGfOzL1p6QZQy8jbqS3m', TRUE),
('lot_specialist@example.com', '$2a$12$ueHwq6TvxZ89.KHevWdupesQpFAj8VRYSjGfOzL1p6QZQy8jbqS3m', TRUE),
('advertising_specialist@example.com', '$2a$12$ueHwq6TvxZ89.KHevWdupesQpFAj8VRYSjGfOzL1p6QZQy8jbqS3m', TRUE),
('accountant@example.com', '$2a$12$ueHwq6TvxZ89.KHevWdupesQpFAj8VRYSjGfOzL1p6QZQy8jbqS3m', TRUE);

-- Inserting employees
INSERT INTO employees (type, full_name, phone_no, email) VALUES
('CUSTOMER_SUPPORT', 'Customer Support Name', '111-111-1111', 'customer_support@example.com'),
('LOT_SPECIALIST', 'Lot Specialist Name', '333-333-3333', 'lot_specialist@example.com'),
('ADVERTISING_SPECIALIST', 'Advertising Specialist Name', '444-444-4444', 'advertising_specialist@example.com'),
('ACCOUNTANT', 'Accountant Name', '555-555-5555', 'accountant@example.com');

-- Inserting business users
INSERT INTO users (username, password, is_active) VALUES 
('advertiser@example.com', '$2a$12$ueHwq6TvxZ89.KHevWdupesQpFAj8VRYSjGfOzL1p6QZQy8jbqS3m', TRUE),
('business@example.com', '$2a$12$ueHwq6TvxZ89.KHevWdupesQpFAj8VRYSjGfOzL1p6QZQy8jbqS3m', TRUE);

-- Inserting businesses
INSERT INTO business (email, name, address, phone_no, type) VALUES
('advertiser@example.com', 'Advertiser Business Inc.', '123 Advertiser St.', '666-666-6666', 'ADVERTISERS'),
('business@example.com', 'General Business Corp.', '456 Business Ave.', '777-777-7777', 'BUSINESS');