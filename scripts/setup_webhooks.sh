#!/bin/bash
# Script to setup webhooks
set -e

# Logging
LOG_FILE="setup_webhooks.log"
echo "Starting webhook setup" > $LOG_FILE

# Webhook URL
WEBHOOK_URL="https://fastapi:8000/knowledge/webhook"
SECRET="your-webhook-secret"

# Register webhook with APIsix
echo "Registering APIsix webhook" >> $LOG_FILE
curl -X POST http://localhost:9080/webhooks \
  -H "Content-Type: application/json" \
  -d "{\"url\": \"$WEBHOOK_URL\", \"secret\": \"$SECRET\", \"events\": [\"route_updated\", \"plugin_updated\"]}" \
  >> $LOG_FILE 2>&1

# Register webhook with Keycloak
echo "Registering Keycloak webhook" >> $LOG_FILE
curl -X POST http://localhost:8080/admin/webhooks \
  -H "Content-Type: application/json" \
  -d "{\"url\": \"$WEBHOOK_URL\", \"secret\": \"$SECRET\", \"events\": [\"config_updated\"]}" \
  >> $LOG_FILE 2>&1

# Add similar commands for LiveKit, GitLab, Prometheus, Sentry

# Verify
echo "Verifying webhooks" >> $LOG_FILE
curl -X POST $WEBHOOK_URL -d '{"test": "webhook"}' >> $LOG_FILE 2>&1

echo "Webhook setup completed" >> $LOG_FILE