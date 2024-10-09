// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const residentials = [
  {
    id: '1',
    name: 'Las Acacias',
    code: 'Las Acacias'
  }
];

const properties = [
  { id:'4a2c7556-a83c-4b37-8247-4353ce521655', name: "Casa 001N", code: "C001N", residential_id: 1 },
  { id:'5711726c-f56a-4f08-95d1-30e5ada8cca3', name: "Casa 002N", code: "C002N", residential_id: 1 },
  { id:'f1bb8998-9d0a-4056-af4c-ccd9a69cf384', name: "Casa 003N", code: "C003N", residential_id: 1 },
  { id:'300ed5f9-8b0c-4a22-b1dd-9c8cf34cd07e', name: "Casa 004N", code: "C004N", residential_id: 1 },
  { id:'27d10367-c652-4ef0-b09b-417347846a7f', name: "Casa 005N", code: "C005N", residential_id: 1 },
  { id:'fa7aba6a-d8e9-4cfd-b37e-e774ca142323', name: "Casa 006N", code: "C006N", residential_id: 1 },
  { id:'96602994-e3c6-4c20-8cb4-e0afb2b574d2', name: "Casa 007N", code: "C007N", residential_id: 1 },
  { id:'232328b4-f1e4-4415-ae3b-73340eb77d94', name: "Casa 008N", code: "C008N", residential_id: 1 },
  { id:'e47578c9-e03b-41dd-91f2-477432140378', name: "Casa 009N", code: "C009N", residential_id: 1 },
  { id:'32be87e2-3f19-4a8e-b91b-821566f6214f', name: "Casa 010N", code: "C010N", residential_id: 1 },
  { id:'045b6380-b63c-4453-94e1-cb4e30f98778', name: "Casa 011N", code: "C011N", residential_id: 1 },
  { id:'2ed3e836-efe7-43b6-85c3-f95071e62d4d', name: "Casa 012N", code: "C012N", residential_id: 1 },
];

const users = [
  { id: '410544b2-4001-4271-9855-fec4b6a6442a', name: 'User', email: 'user@nextmail.com', password: '123456', },
];

const customers = [
  {id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa', name: 'Evil Rabbit', email: 'evil@rabbit.com', image_url: '/customers/evil-rabbit.png'},
  {id: '3958dc9e-712f-4377-85e9-fec4b6a6442a', name: 'Delba de Oliveira', email: 'delba@oliveira.com', image_url: '/customers/delba-de-oliveira.png'},
  {id: '3958dc9e-742f-4377-85e9-fec4b6a6442a', name: 'Lee Robinson', email: 'lee@robinson.com', image_url: '/customers/lee-robinson.png'},
  {id: '76d65c26-f784-44a2-ac19-586678f7c2f2', name: 'Michael Novotny', email: 'michael@novotny.com', image_url: '/customers/michael-novotny.png'},
  {id: 'cc27c14a-0acf-4f4a-a6c9-d45682c144b9', name: 'Amy Burns', email: 'amy@burns.com', image_url: '/customers/amy-burns.png'},
  {id: '13d07535-c59e-4157-a011-f8d2ef4e0cbb', name: 'Balazs Orban', email: 'balazs@orban.com', image_url: '/customers/balazs-orban.png'},
];

const invoices = [
  {customer_id: customers[0].id, amount: 15795, status: 'pending', date: '2022-12-06', },
  {customer_id: customers[1].id, amount: 20348, status: 'pending', date: '2022-11-14', },
  {customer_id: customers[4].id, amount: 3040, status: 'paid', date: '2022-10-29', },
  {customer_id: customers[3].id, amount: 44800, status: 'paid', date: '2023-09-10', },
  {customer_id: customers[5].id, amount: 34577, status: 'pending', date: '2023-08-05', },
  {customer_id: customers[2].id, amount: 54246, status: 'pending', date: '2023-07-16', },
  {customer_id: customers[0].id, amount: 666, status: 'pending', date: '2023-06-27', },
  {customer_id: customers[3].id, amount: 32545, status: 'paid', date: '2023-06-09', },
  {customer_id: customers[4].id, amount: 1250, status: 'paid', date: '2023-06-17', },
  {customer_id: customers[5].id, amount: 8546, status: 'paid', date: '2023-06-07', },
  {customer_id: customers[1].id, amount: 500, status: 'paid', date: '2023-08-19', },
  {customer_id: customers[5].id, amount: 8945, status: 'paid', date: '2023-06-03', },
  {customer_id: customers[2].id, amount: 1000, status: 'paid', date: '2022-06-05', },
];

const payments = [
  { customer_id: customers[0].id, amount: 15795, status: 'pending', date: '2022-12-06', },
  { customer_id: customers[1].id, amount: 20348, status: 'pending', date: '2022-11-14', },
  { customer_id: customers[4].id, amount: 3040, status: 'paid', date: '2022-10-29', },
  { customer_id: customers[3].id, amount: 44800, status: 'paid', date: '2023-09-10', },
  { customer_id: customers[5].id, amount: 34577, status: 'pending', date: '2023-08-05', },
  { customer_id: customers[2].id, amount: 54246, status: 'pending', date: '2023-07-16', },
  { customer_id: customers[0].id, amount: 666, status: 'pending', date: '2023-06-27', },
  { customer_id: customers[3].id, amount: 32545, status: 'paid', date: '2023-06-09', },
  { customer_id: customers[4].id, amount: 1250, status: 'paid', date: '2023-06-17', },
  { customer_id: customers[5].id, amount: 8546, status: 'paid', date: '2023-06-07', },
  { customer_id: customers[1].id, amount: 500, status: 'paid', date: '2023-08-19', },
  { customer_id: customers[5].id, amount: 8945, status: 'paid', date: '2023-06-03', },
  { customer_id: customers[2].id, amount: 1000, status: 'paid', date: '2022-06-05', },
];


const customer_property = [
  { id:'b1e2eef1-ea0b-456f-9d5b-e8ac512b6e95', customer_id: customers[0].id, property_id: properties[0].id },
  { id:'94448c68-5c5c-4597-8296-1242ed6ed1b8', customer_id: customers[1].id, property_id: properties[1].id },
  { id:'77102ce2-0565-4b6c-a508-509ae020f906', customer_id: customers[2].id, property_id: properties[2].id },
  { id:'da9f54de-1e13-4bdb-9ca7-3b49b4a07882', customer_id: customers[3].id, property_id: properties[3].id },
  { id:'4b52491e-c8bf-4c96-932d-730caeb8fccc', customer_id: customers[4].id, property_id: properties[4].id },
  { id:'8223386b-8d9a-414f-a7cc-71d265ae20c4', customer_id: customers[5].id, property_id: properties[5].id },
  { id:'d05d61dc-9800-4252-b6a8-1d22cb058d4f', customer_id: customers[3].id, property_id: properties[5].id },
  { id:'3f438420-ba3f-4da4-814f-1d8081a7e957', customer_id: customers[4].id, property_id: properties[6].id },
  { id:'133c9fdf-aa22-4965-b94c-730bf5779994', customer_id: customers[5].id, property_id: properties[6].id },
  { id:'0275192d-36f1-47ba-8516-a8585d3aa496', customer_id: customers[1].id, property_id: properties[7].id }
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customers, invoices, revenue, residentials, properties, payments, customer_property };
