import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/properties/table';
import { roboto } from '@/app/ui/fonts';
import TableRowSkeleton from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchPropertiesPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchPropertiesPages(query);  
  console.log(totalPages);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${roboto.className} text-2xl`}>Properties</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search new properties..." />
      </div>
      <Suspense key={query + currentPage} fallback={<TableRowSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}