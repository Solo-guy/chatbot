#!/bin/bash
# Script to deploy the system
set -e

# Logging
LOG_FILE="deploy.log"
echo "Starting deployment" > $LOG_FILE

# Run Docker Compose
echo "Starting Docker Compose" >> $LOG_FILE
docker-compose up -d >> $LOG_FILE 2>&1

# Verify services
echo "Verifying services" >> $LOG_FILE
curl http://localhost:8000/ >> $LOG_FILE 2>&1
curl http://localhost:3000/ >> $LOG_FILE 2>&1
curl http://localhost:9080/admin/routes >> $LOG_FILE 2>&1

echo "Deployment completed" >> $LOG_FILE