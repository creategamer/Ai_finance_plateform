import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'

const layout = () => {
  return (
    <div className="px-5">
        <div className='flex items-center justify-between mb-5'>
            <h1 className="text-6xl font-bold tracking-tight gradient-title">
                Dashboards layouts
            </h1>
        </div>
        <Suspense
            fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
        >
            <DashboardPage/>
        </Suspense>
    </div>
  )
}

export default layout