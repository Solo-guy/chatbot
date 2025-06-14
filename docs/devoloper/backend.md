# Backend Module

## Overview

The Backend module manages groups like Chat, Sales, Healthcare, Education, and Database. It integrates with Kafka, CockroachDB, ScyllaDB, and APIsix.

## Integration

- **Kafka**: Synchronizes data (e.g., messages).
- **CockroachDB**: Stores user data.
- **ScyllaDB**: Stores chat messages.
- **APIs**: `/add-backend`, `/backend/monitor`.

## Usage

- Add a backend: Call `/add-backend` with name, URL, API key.
- Monitor: Call `/backend/monitor?name=chat`.
