# SuperIntelligentAdminSystem

A system for managing a chat application with FastAPI, React, PostgreSQL, CrewAI, MiniCPM, and APIsix.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/superintelligentadminsystem.git
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run scripts to install MiniCPM and services:

   ```bash
   chmod +x scripts/install_minicpm.sh scripts/install_services.sh scripts/setup_webhooks.sh
   ./scripts/install_minicpm.sh
   ./scripts/install_services.sh
   ./scripts/setup_webhooks.sh
   ```

4. Initialize database:

   ```bash
   psql -U user -d admin_db -f scripts/init_db.sql
   ```

5. Start the system:
   ```bash
   docker-compose up -d
   ```

## Usage

- Access the admin panel at `http://localhost:3000`.
- Use the chatbot interface to manage the system (e.g., "Add backend sales", "Check server status").
- Update knowledge base via `/knowledge/update` or webhooks.

## Documentation

- Developer guides: `docs/developer/`
- User guides: `docs/user/`
- Connections: `docs/connections/connections.json`
