#!/bin/bash
# Script to install services
set -e

# Logging
LOG_FILE="install_services.log"
echo "Starting services installation" > $LOG_FILE

# Install APIsix
echo "Installing APIsix" >> $LOG_FILE
sudo apt-get install -y apisix >> $LOG_FILE 2>&1
apisix start --port 9080 >> $LOG_FILE 2>&1

# Install Keycloak
echo "Installing Keycloak" >> $LOG_FILE
wget https://keycloak.org/downloads/keycloak-latest.tar.gz
tar -xzf keycloak-latest.tar.gz
keycloak/bin/standalone.sh -Djboss.http.port=8080 >> $LOG_FILE 2>&1 &

# Install other services (LiveKit, Kafka, CockroachDB, ScyllaDB, Kubernetes, Redis, etc.)
# Similar steps for each service
echo "Installing remaining services" >> $LOG_FILE
# Add commands for each service

# Verify
echo "Verifying services" >> $LOG_FILE
curl http://localhost:9080/admin/routes >> $LOG_FILE 2>&1
curl http://localhost:8080/auth/login >> $LOG_FILE 2>&1

echo "Services installation completed" >> $LOG_FILE