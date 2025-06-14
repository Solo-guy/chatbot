# Knowledge Module

## Overview

The Knowledge module updates the knowledge base with URLs, text, and webhooks, using APScheduler, BeautifulSoup, Scrapy, and DistilBERT.

## Integration

- **Elasticsearch**: Stores documents.
- **APIs**: `/knowledge/update`, `/knowledge/webhook`, `/knowledge/crawler`.

## Usage

- Update knowledge: Call `/knowledge/update` with URL or text.
- Crawl documents: Call `/knowledge/crawler` with URL.
