import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search } from 'lucide-react'
import React from 'react'


export function NoPaginationTransactionTable({ transactions }) {
 
    return (
        <div className="space-y-4">
            {/* {deleteLoading && (
                <BarLoader className="mt-4" width={"100%"} color="#9333ea" />
            )} */}
            {/* Filters */}
            
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search transactions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8"
                    />
                </div>
                <div className="flex gap-2">
                    <Select 
                        // value={typeFilter} onValueChange={setTypeFilter}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="INCOME">Income</SelectItem>
                            <SelectItem value="EXPENSE">Expense</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select
                        // value={recurringFilter}
                        // onValueChange={(value) => {
                        // setRecurringFilter(value);
                        // }}
                    >
                        <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="All Transactions" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="recurring">Recurring Only</SelectItem>
                            <SelectItem value="non-recurring">Non-recurring Only</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Bulk Actions */}
                    
                </div>
            </div>
            no-pagination-transaction-table
        </div>
    )
}
