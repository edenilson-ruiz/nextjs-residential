import Form from '@/app/ui/payments/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Payments', href: '/dashboard/payments' },
          {
            label: 'Create Payment',
            href: '/dashboard/payments/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}