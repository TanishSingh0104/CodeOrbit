# CodeOrbit

**AI-Powered GitHub Repository Assistant**

CodeOrbit is a full-stack application designed to help developers understand and interact with their GitHub repositories using artificial intelligence.

The project aims to simplify codebase exploration through GitHub integration, code indexing, vector search, and Retrieval-Augmented Generation (RAG). Developers will be able to ask questions about their repositories and receive context-aware responses based on the underlying source code.

**Project Status:** In Development

## Overview

Working with unfamiliar or large codebases often requires significant time spent navigating files, understanding dependencies, and locating relevant implementations.

CodeOrbit aims to address this challenge by providing an AI-powered interface for repository exploration. It is being developed to enable natural-language interaction with source code while maintaining relevant repository context.

## Technology Stack

| Component | Technology |
|---|---|
| Frontend | Next.js, React, TypeScript |
| Backend | Java 17, Spring Boot |
| AI Integration | Spring AI, OpenAI |
| Database | PostgreSQL, pgvector |
| ORM | Spring Data JPA, Hibernate |
| Build Tool | Maven |
| Containerization | Docker |
| Version Control | Git, GitHub |

## Planned Features

- GitHub OAuth authentication
- GitHub repository integration and synchronization
- Automated repository code indexing
- Code embeddings and vector-based retrieval
- Context-aware AI conversations
- Retrieval-Augmented Generation (RAG)
- Streaming AI responses
- Relevant code references and citations
- Repository-specific chat sessions

These capabilities are part of the ongoing development roadmap.

## Project Structure

```text
CodeOrbit/
├── Backend/
│   ├── src/
│   │   ├── main/
│   │   └── test/
│   ├── .mvn/
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── client/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   └── package.json
│
├── docker/
│   └── postgres/
│       └── init-extension.sql
│
├── docker-compose.yml
└── .gitignore
```

## Prerequisites

Ensure the following tools are installed:

- Java 17
- Node.js and npm
- Docker Desktop
- Git

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/TanishSingh0104/CodeOrbit.git
cd CodeOrbit
```

### 2. Configure the Database

Start the PostgreSQL database using Docker Compose from the project root:

```bash
docker compose up -d
```

Ensure that the database configuration matches the backend application properties.

### 3. Start the Backend

Open a terminal and execute:

```powershell
cd Backend
.\mvnw.cmd spring-boot:run
```

The backend is configured to use port `8080` by default.

### 4. Start the Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

The frontend will be available at:

http://localhost:3000

## Environment Configuration

Configure the required environment variables before running the application.

```env
DB_URL=
DB_USERNAME=
DB_PASSWORD=
OPENAI_API_KEY=
```

Additional configuration may be required for GitHub OAuth integration.

Do not commit API keys, credentials, or other sensitive configuration values to version control.

## Development Roadmap

- [x] Initial repository setup
- [x] Frontend project initialization
- [x] Spring Boot backend initialization
- [x] Maven configuration
- [x] PostgreSQL Docker configuration
- [ ] GitHub OAuth integration
- [ ] Repository synchronization
- [ ] Code indexing pipeline
- [ ] Vector embedding and retrieval
- [ ] RAG-based chat functionality
- [ ] Streaming chat interface
- [ ] Code references and citations

## Current Development Status

CodeOrbit is currently under active development. The initial project structure and development environment have been established. Further development is focused on implementing repository integration, code indexing, and AI-powered codebase interaction.

## Author

**Tanish Singh**

GitHub: https://github.com/TanishSingh0104

## License

License information will be added in a future release.