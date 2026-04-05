FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y curl gnupg lsb-release && \
    curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | \
    gpg -o /usr/share/keyrings/postgresql.gpg --dearmor && \
    echo "deb [ signed-by=/usr/share/keyrings/postgresql.gpg ] https://apt.postgresql.org/pub/repos/apt bookworm-pgdg main" \
    > /etc/apt/sources.list.d/pgdg.list && \
    apt-get update && apt-get install -y postgresql-15 postgresql-15-pgvector && \
    rm -rf /var/lib/apt/lists/*

ENV POSTGRES_DB=mydatabase \
    POSTGRES_USER=myuser \
    POSTGRES_PASSWORD=mypassword \
    PGDATA=/var/lib/postgresql/data

RUN mkdir -p "$PGDATA" && chown -R postgres:postgres "$PGDATA"

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 5432
USER postgres
ENTRYPOINT ["/entrypoint.sh"]