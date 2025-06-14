# Monitoring Module

## Overview

The Monitoring module integrates Prometheus, Grafana, Sentry, ELK Stack, PagerDuty, Moogsoft, and Loki for system monitoring.

## Integration

- **Prometheus**: Fetches metrics.
- **Sentry**: Tracks errors.
- **APIs**: `/monitor-metrics`, `/monitor-logs`, `/monitor-errors`.

## Usage

- Get metrics: Call `/monitor-metrics` with metric name.
- Check logs: Call `/monitor-logs` with filter.
