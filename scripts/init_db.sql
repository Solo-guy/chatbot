-- Initialize PostgreSQL database
CREATE TABLE knowledge (
    id SERIAL PRIMARY KEY,
    source VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    metadata JSONB,
    category VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_knowledge_source ON knowledge(source);
CREATE INDEX idx_knowledge_category ON knowledge(category);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    role VARCHAR(20) NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) UNIQUE NOT NULL,
    permissions JSONB
);

INSERT INTO roles (name, permissions) VALUES
    ('admin', '{"apis": ["*"], "actions": ["*"]}'),
    ('developer', '{"apis": ["/backend/*", "/infra/*", "/ai/*"], "actions": ["read", "write"]}'),
    ('user', '{"apis": ["/chat/*", "/call/*"], "actions": ["read"]}'),
    ('ai_agent', '{"apis": ["/chatbot/*", "/knowledge/*"], "actions": ["read", "write"]}');