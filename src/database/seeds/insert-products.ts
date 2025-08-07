import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("products").del();

  await knex("products").insert([
    { name: "Nhoque quatro queijos", price: 45 },
    { name: "Iscas de Frango", price: 60 },
    { name: "Tilápia com Alcaparras", price: 100 },
    { name: "Bolinho de Mandioca", price: 75 },
    { name: "Escondidinho de Carne de Sol", price: 65 },
    { name: "Porção de Batata Frita", price: 40 },
    { name: "Executivo de Frango Grelhado", price: 36 },
    { name: "Executivo de Tilápia Grelhada", price: 39 },
    { name: "Caldo de Palmito", price: 30 },
    { name: "Refrigerante 350ml", price: 7.5 },
    { name: "Suco de Laranja 440ml", price: 10 },
  ]);
}
