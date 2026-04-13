FROM debian:bookworm-slim

ARG MEILISEARCH_VERSION=v1.35.1

RUN apt-get update && apt-get install -y curl && \
    curl -L "https://github.com/meilisearch/meilisearch/releases/download/${MEILISEARCH_VERSION}/meilisearch-linux-amd64" \
    -o /usr/local/bin/meilisearch && \
    chmod +x /usr/local/bin/meilisearch && \
    rm -rf /var/lib/apt/lists/*

EXPOSE 7700
CMD ["meilisearch"]