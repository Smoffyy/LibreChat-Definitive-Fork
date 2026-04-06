# Changelog
All notable changes will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2026-04-05 (Static Edited Edition)
### Added
- More logos
- More examples in yaml and config files

### Changed
- Package version naming, changed to `0.8.4-definitive`
- Removed `README.zh.md`
- Remove the external links
- Add rag_api source directly to repo (no longer pulled from registry)
- Add docker/mongodb/Dockerfile - builds from official MongoDB apt repo
- Add docker/meilisearch/Dockerfile - builds from GitHub releases binary
- Add docker/vectordb/Dockerfile + entrypoint.sh - postgres15 + pgvector from official apt repo
- Update docker-compose.yml to build all services locally
- No external images pulled at runtime

### Fixed