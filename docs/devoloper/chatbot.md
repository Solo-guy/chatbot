# Chatbot Module

## Overview

The Chatbot module integrates CrewAI, MiniCPM, Grok, DeepSeek, and OpenAI to provide intelligent system management. It uses a dual-pane interface with a Chat Interface (Left Pane) and Task Management (Right Pane).

## Integration

- **CrewAI**: Manages 4 AI Agents (Manager, Knowledge, Execution, Learning).
- **MiniCPM**: Runs on port 8001, installed via `install_minicpm.sh`.
- **Grok**: Called via `https://api.x.ai/grok`.
- **APIs**: `/chatbot/ws`, `/chatbot/ask`, `/chatbot/models`, `/chatbot/forms`, etc.

## Usage

- Access via `http://your-vps-ip:3000/chatbot`.
- Use commands like "Send message 'Hello'" or "Add backend sales".
