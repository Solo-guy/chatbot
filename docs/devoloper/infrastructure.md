# Infrastructure Module

## Overview

The Infrastructure module manages Kubernetes, Redis, Cloudflare, Ansible, GitLab, Vault, Consul, Traefik, and Dynatrace.

## Integration

- **Kubernetes**: Scales pods via API.
- **Redis**: Manages cache.
- **APIs**: `/manage-kubernetes`, `/manage-redis`, etc.

## Usage

- Scale pod: Call `/manage-kubernetes` with action=scale.
- Set cache: Call `/manage-redis` with action=set.
