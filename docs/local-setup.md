---
sidebar_position: 3
displayed_sidebar: pageSidebar
---

# Local Setup

This guide walks you through setting up Cuemeet locally for development and testing purposes.


## Prerequisites

Before you begin, make sure you have the following installed:

- [Git](https://git-scm.com/downloads)
- [Docker and Docker Compose ](https://docs.docker.com/get-started/get-docker/)
- Node.js (v14 or later) - Optional for local development without Docker
- Python 3.10 or higher - Optional for local development without Docker

## Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/CueMeet/Meeting-Bots-Control-Panel.git
cd Meeting-Bots-Control-Panel
```

### Project Folder Structure

<details>
<summary>Click to expand folder structure</summary>
```
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── api-backend
│   ├── Dockerfile
│   ├── Makefile
│   ├── README.md
│   ├── nest-cli.json
│   ├── package.json
│   ├── src
│   ├── test
│   ├── tsconfig.build.json
│   ├── tsconfig.json
│   └── yarn.lock
├── assets
│   ├── banner.png
│   └── cuemeet-logo.png
├── docker-compose.yml
├── pg-db
│   └── init-multiple-databases.sql
├── protos
│   └── worker_backend.transcript_management
└── worker-backend
    ├── Dockerfile
    ├── Makefile
    ├── README.md
    ├── api
    ├── manage.py
    ├── nltk
    ├── poetry.lock
    ├── pyproject.toml
    └── worker_backend
```
</details>

2. **Configure Environment Variables**

<details>
<summary>Click to view/copy Backend API .env configuration</summary>

```env
# Backend API Configuration
# Application
PORT=4000
NODE_ENV=development
CORS_ALLOWED_ORIGINS=*

# Database
DB_HOST=pg-db
DB_PORT=5432
DB_USERNAME=meetingbots_user
DB_PASSWORD=cuecard-meting-bots-secret
DB_DATABASE=meetingbots_db_backend_api


# Redis
REDIS_HOST=redis
REDIS_PORT=6379


# AWS
AWS_ACCESS_KEY=
AWS_SECRET_KEY=

## S3
AWS_BUCKET_REGION=
AWS_MEETING_BOT_BUCKET_NAME=

## ECS
AWS_ECS_CLUSTER_NAME=
AWS_SECURITY_GROUP=
AWS_VPS_SUBNET=
ECS_TASK_DEFINITION_GOOGLE=
ECS_CONTAINER_NAME_GOOGLE=
ECS_TASK_DEFINITION_ZOOM=
ECS_CONTAINER_NAME_ZOOM=
ECS_TASK_DEFINITION_TEAMS=
ECS_CONTAINER_NAME_TEAMS=


# Meeting Bot
MEETING_BOT_RETRY_COUNT=2


# Worker Backend gRPC URL
WORKER_BACKEND_GRPC_URL=worker-grpc
```

</details>

<details>
<summary>Click to view/copy Worker API .env configuration</summary>

```env
# Worker API Configuration
DJANGO_SETTINGS_MODULE=worker_backend.settings
DJANGO_SECRET_KEY=8b1336ae5f72ec7e949e787054976962a85fb1ca935da5ca59ba0448eae178b1336ae5f7204
DEBUG=True
STATIC_URL=/static/
ALLOWED_HOSTS=*
CORS_ALLOWED_ORIGINS=*


## PG Database
DB_USERNAME=meetingbots_user
DB_PASSWORD=cuecard-meting-bots-secret
DB_NAME=meetingbots_db_worker
DB_HOST=pg-db
DB_PORT=5432


# Redis Configuration
REDIS_HOST=redis
REDIS_PORT=6379
REDIS_DB=2


# AWS Configuration
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

## AWS S3
AWS_REGION=
AWS_STORAGE_BUCKET_NAME=

_SIGNED_URL_EXPIRY_TIME=60

## HIGHLIGHT
HIGHLIGHT_PROJECT_ID=""
HIGHLIGHT_ENVIRONMENT_NAME=""


## ASSEMBLY AI
ASSEMBLY_AI_API_KEY=""
```

</details>

3. **Docker Compose Configuration**

<details>
<summary>docker-compose.yml</summary>

```yaml
services:
  backend-api:
    container_name: backend_rest
    build:
      context: ./api-backend
      dockerfile: Dockerfile
    ports:
      - "4000:4000"
    depends_on:
      - pg-db
      - redis

  worker-api:
    container_name: worker_rest
    build:
      context: ./worker-backend
      dockerfile: Dockerfile
    command: python manage.py migrate && gunicorn worker_backend.wsgi:application --workers 4 --bind 0.0.0.0:8000
    ports:
      - "8000:8000"
    depends_on:
      - pg-db
      - redis
      - backend-api

  worker-grpc:
    container_name: grpc_server
    build:
      context: ./worker-backend
      dockerfile: Dockerfile
    command: python manage.py grpcrunaioserver 0.0.0.0:5500 --max-workers 4
    ports:
      - "5500:5500"
    depends_on:
      - pg-db
      - redis

  redis:
    image: redis:alpine
    container_name: redis
    restart: always
    ports:
      - "6379:6379"

  pg-db:
    image: postgres:16
    container_name: postgres_db
    restart: always
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./pg-db/init-multiple-databases.sql:/docker-entrypoint-initdb.d/init-multiple-databases.sql
    ports:
      - "5432:5432"
    env_file:
      - ./pg-db/.db.env

  celery_worker:
    container_name: celery_worker
    build:
      context: ./worker-backend
      dockerfile: Dockerfile
    command: celery -A worker_backend worker --loglevel=info --concurrency=4
    depends_on:
      - redis
      - pg-db
      - worker-api

  flower:
    container_name: flower
    build:
      context: ./worker-backend
      dockerfile: Dockerfile
    command: celery -A worker_backend flower --port=5555
    ports:
      - "5556:5555"
    depends_on:
      - redis
      - worker-grpc

  documentation:
    container_name: documentation
    build:
      context: ./documentation
      dockerfile: Dockerfile
    ports:
      - "6000:3000"

volumes:
  postgres_data:
    driver: local
```

</details>

4. **Start the Services**

```bash
# Build and start all services
docker compose up -d

# Check service status
docker compose ps

# Stop the service
docker compose down
```

The services will be available at:

- Backend API: `http://localhost:4000`
- Worker API: `http://localhost:8000`
- Worker gRPC: `worker-grpc:5500` (internal only — accessible via Docker Compose network)
- PostgreSQL: `pg-db:5432` (internal only — accessible via Docker Compose network)
- Redis: `redis:6379` (internal only — accessible via Docker Compose network)

## Database Migrations

For the Backend API(Nest.js)

- Automatic Migrations are configured

For the Worker API (Django):

```bash
# Run migrations
python manage.py migrate
```

## Troubleshooting

### Common Issues

#### Container Startup Issues

- Ensure all required ports (4000, 8000) are available
- Check if Docker daemon is running
- Verify environment variables are set correctly

#### Database Connection Issues

- Ensure PostgreSQL container is running: `docker-compose ps`
- Check logs: `docker-compose logs pg-db`
- Verify database credentials in both .env files

#### Service Dependencies

- Backend API must be running for Worker API to function properly
- Check service logs:
  ```bash
  docker-compose logs backend-api
  docker-compose logs worker-api
  ```

## Next Steps

Once you have your local setup working:

- Proceed to [AWS Setup](/cuemeet-documentation/docs/aws-setup) for production deployment
- Explore the [API Documentation](/cuemeet-documentation/docs/bot/api-info)
- Configure your [Bot Settings](/cuemeet-documentation/docs/meeting-bots)