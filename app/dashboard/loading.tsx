export default function DashboardLoading() {
  return (
    <div className='container mx-auto p-6'>
      <div className='animate-pulse space-y-4'>
        <div className='h-8 w-64 bg-gray-800 rounded'></div>
        <div className='space-y-3'>
          <div className='h-4 w-full bg-gray-800 rounded'></div>
          <div className='h-4 w-3/4 bg-gray-800 rounded'></div>
          <div className='h-4 w-1/2 bg-gray-800 rounded'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
          {[...Array(6)].map((_, i) => (
            <div key={i} className='bg-gray-800 rounded-lg p-4 space-y-3'>
              <div className='h-40 bg-gray-700 rounded'></div>
              <div className='h-4 w-3/4 bg-gray-700 rounded'></div>
              <div className='h-4 w-1/2 bg-gray-700 rounded'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
