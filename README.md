# 🍽️ API-Restaurant

Uma API RESTful para gerenciar um restaurante, incluindo controle de **produtos**, **mesas**, **sessões de mesas** e **pedidos**.  
Desenvolvida com **Node.js + TypeScript**, utiliza **Knex** para interação com banco de dados relacional.

---

## 🚀 Tecnologias

- **Node.js** — ambiente de execução
- **TypeScript** — tipagem estática
- **Express** — framework web
- **Knex.js** — query builder para banco relacional
- **SQLite/PostgreSQL** — banco de dados
- **Migrations & Seeds** — versionamento e dados iniciais
- **Docker** *(opcional)* — ambiente containerizado

---

## 📂 Estrutura do Projeto

```
src/
 ├── controllers/        # Lógica de cada recurso (produtos, mesas, pedidos...)
 ├── database/
 │   ├── migrations/     # Estrutura do banco de dados
 │   ├── seeds/          # Dados iniciais
 │   ├── knex.ts         # Configuração do Knex
 │   └── types/          # Definições de tipos para repositórios
 ├── middlewares/        # Tratamento de erros
 ├── routes/             # Definição das rotas
 ├── utils/              # Utilitários e classes auxiliares
 └── server.ts           # Ponto de entrada da aplicação
```

---

## ⚙️ Configuração e Instalação

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/VictorAPuntel/API-Restaurant.git
cd API-Restaurant
```

### 2️⃣ Instalar dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3️⃣ Configurar o banco de dados
Edite `knexfile.ts` conforme seu ambiente (SQLite, PostgreSQL, etc.).

### 4️⃣ Executar migrations e seeds
```bash
npx knex migrate:latest
npx knex seed:run
```

### 5️⃣ Rodar a aplicação
```bash
npm run dev
```
A API estará disponível em: **`http://localhost:3333`**

---

## 📌 Endpoints Principais

### **Produtos**
- `GET /products` — Lista todos os produtos
- `POST /products` — Cria um novo produto
- `GET /products/:id` — Busca produto por ID
- `PUT /products/:id` — Atualiza produto
- `DELETE /products/:id` — Remove produto

### **Mesas**
- `GET /tables` — Lista mesas
- `POST /tables` — Cria nova mesa

### **Sessões de Mesa**
- `POST /tables-sessions` — Inicia uma sessão
- `PATCH /tables-sessions/:id/close` — Fecha a sessão

### **Pedidos**
- `GET /orders` — Lista pedidos
- `POST /orders` — Cria pedido
- `PATCH /orders/:id/status` — Atualiza status

---

## 🧪 Exemplos com cURL

```bash
# Criar produto
curl -X POST http://localhost:3333/products   -H "Content-Type: application/json"   -d '{"name": "Pizza Margherita", "price": 35.90}'
```

```bash
# Listar mesas
curl http://localhost:3333/tables
```

---

## 🛡️ Tratamento de Erros

A API utiliza um middleware (`errorHandling.ts`) para retornar erros no formato JSON:
```json
{
  "status": "error",
  "message": "Mensagem de erro"
}
```

---

## 📄 Licença

Este projeto está sob a licença MIT.
