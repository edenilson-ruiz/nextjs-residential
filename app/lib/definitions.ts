// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Residential = {
  id: string;
  name: string;
  code: string;
}

export type Property = {
  id: string;
  name: string;
  code: string;
  residential_id: string;
}

export type PropertyField = {
  id: string;
  name: string;
  code: string;
  residential_name: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  house_id: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type PropertiesTableType = {
  id: string;
  name: string;
  code: string;
  residential_name: string;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};


export type PaymentType = {
  id: string;
  name: string;
  description: string;
};


export type Payment = {
  id: string;  
  payment_amount: number;
  payment_date: string;
  payment_description: string;
  payment_type_id: string;
  customer_code: string;
  customer_id: string;
  house_id: string;  
  date_of_issue: string;  
  reference: string;
  invoice_affected: string;  
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type CustomerProperty = {
  id: string;
  customer_id: string;
  property_id: string;
}

export type Role = {
  id: string;
  name: string;
}

export type Employees = {
  id: string;
  first_name: string;
  last_name: string;
  dni: string;
  birthday_date: string;
  role_id: string;
}