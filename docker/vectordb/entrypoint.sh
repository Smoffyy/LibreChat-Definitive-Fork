#!/bin/bash
set -e

if [ ! -s "$PGDATA/PG_VERSION" ]; then
    /usr/lib/postgresql/15/bin/initdb -D "$PGDATA"

    echo "host    all    all    0.0.0.0/0    md5" >> "$PGDATA/pg_hba.conf"

    /usr/lib/postgresql/15/bin/pg_ctl -D "$PGDATA" -o "-c listen_addresses=''" -w start

    psql -v ON_ERROR_STOP=1 --username postgres <<-EOSQL
        CREATE USER $POSTGRES_USER WITH PASSWORD '$POSTGRES_PASSWORD';
        CREATE DATABASE $POSTGRES_DB OWNER $POSTGRES_USER;
        \connect $POSTGRES_DB
        CREATE EXTENSION IF NOT EXISTS vector;
EOSQL

    /usr/lib/postgresql/15/bin/pg_ctl -D "$PGDATA" -m fast -w stop
fi

exec /usr/lib/postgresql/15/bin/postgres -D "$PGDATA" -c listen_addresses='*'