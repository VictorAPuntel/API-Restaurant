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

## 📌 Endpoints e Exemplos

### **1. Produtos**
#### Criar Produto
**POST** `/products`
```json
{
  "name": "Pizza Margherita",
  "price": 35.90
}
```
**Resposta (201)**:
```json
{
  "id": 1,
  "name": "Pizza Margherita",
  "price": 35.9,
  "created_at": "2025-08-10T22:00:00.000Z"
}
```

#### Listar Produtos
**GET** `/products`
```json
[
  {
    "id": 1,
    "name": "Pizza Margherita",
    "price": 35.9
  },
  {
    "id": 2,
    "name": "Lasanha",
    "price": 42.5
  }
]
```

---

### **2. Mesas**
#### Criar Mesa
**POST** `/tables`
```json
{
  "number": 10
}
```
**Resposta (201)**:
```json
{
  "id": 1,
  "number": 10
}
```

#### Listar Mesas
**GET** `/tables`
```json
[
  { "id": 1, "number": 10 },
  { "id": 2, "number": 11 }
]
```

---

### **3. Sessões de Mesa**
#### Iniciar Sessão
**POST** `/tables-sessions`
```json
{
  "table_id": 1,
  "opened_by": "João"
}
```
**Resposta (201)**:
```json
{
  "id": 1,
  "table_id": 1,
  "opened_by": "João",
  "opened_at": "2025-08-10T22:10:00.000Z"
}
```

#### Fechar Sessão
**PATCH** `/tables-sessions/1/close`
**Resposta (200)**:
```json
{
  "message": "Sessão encerrada com sucesso"
}
```

---

### **4. Pedidos**
#### Criar Pedido
**POST** `/orders`
```json
{
  "session_id": 1,
  "product_id": 2,
  "quantity": 3
}
```
**Resposta (201)**:
```json
{
  "id": 1,
  "session_id": 1,
  "product_id": 2,
  "quantity": 3,
  "status": "pending"
}
```

#### Atualizar Status do Pedido
**PATCH** `/orders/1/status`
```json
{
  "status": "completed"
}
```
**Resposta (200)**:
```json
{
  "message": "Status do pedido atualizado para 'completed'"
}
```

---

## 🔄 Fluxo de Uso da API

1. Criar **mesa** → `POST /tables`
2. Abrir **sessão da mesa** → `POST /tables-sessions`
3. Criar **produtos** → `POST /products`
4. Registrar **pedidos** → `POST /orders`
5. Atualizar status dos pedidos → `PATCH /orders/:id/status`
6. Fechar sessão → `PATCH /tables-sessions/:id/close`

---

## 🛡️ Tratamento de Erros

A API retorna erros no formato JSON:
```json
{
  "status": "error",
  "message": "Mensagem descritiva do erro"
}
```

Exemplo — produto não encontrado:
```json
{
  "status": "error",
  "message": "Produto não encontrado"
}
```

---

## 📄 Licença

Este projeto está sob a licença MIT.
