# Escola Backend

Este é um projeto backend para gerenciamento de turmas e alunos, desenvolvido com [NestJS](https://nestjs.com/) e [Prisma ORM](https://www.prisma.io/).

## Funcionalidades

- CRUD de turmas (Classroom)
- CRUD de alunos (Student)
- Integração com banco de dados via Prisma ORM
- Estrutura pronta para testes automatizados com Jest

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/) (ou outro banco suportado pelo Prisma)
- [Jest](https://jestjs.io/) para testes

## Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/escola-backend.git
   cd escola-backend
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure o banco de dados:**
   - Crie um arquivo `.env` na raiz do projeto com a variável `DATABASE_URL` apontando para seu banco de dados.
   - Exemplo:
     ```
     DATABASE_URL="postgresql://usuario:senha@localhost:5432/escola"
     ```

4. **Rode as migrations do Prisma:**
   ```sh
   npx prisma migrate deploy
   ```

5. **Gere o client do Prisma:**
   ```sh
   npx prisma generate
   ```

6. **Inicie o servidor:**
   ```sh
   npm run start:dev
   ```

## Endpoints Principais

- `POST /classroom` — Cria uma nova turma
- `GET /classroom` — Lista todas as turmas
- `GET /classroom/:id` — Detalha uma turma
- `PATCH /classroom/:id` — Atualiza uma turma
- `DELETE /classroom/:id` — Remove uma turma

- `POST /student` — Cria um novo aluno
- `GET /student` — Lista todos os alunos
- `GET /student/:id` — Detalha um aluno
- `PATCH /student/:id` — Atualiza um aluno
- `DELETE /student/:id` — Remove um aluno

## Testes

Para rodar os testes automatizados:

```sh
npm run test
```

## Estrutura do Projeto

```
src/
  classroom/
    classroom.controller.ts
    classroom.service.ts
    dto/
  student/
    student.controller.ts
    student.service.ts
    dto/
  prisma/
    prisma.service.ts
    prisma.module.ts
prisma/
  schema.prisma
  migrations/
test/
  ...
```

## Contribuição

Pull requests são bem-vindos!  
Para grandes mudanças, por favor abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença

[MIT](LICENSE)