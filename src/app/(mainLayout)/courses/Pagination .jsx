"use client";
import { Pagination } from "@heroui/react";
import Link from "next/link";

const PaginationPage = ({ courses }) => {
    const { totalPages, limit, page } = courses;

    const TotalPage = [];
    const isBg = page;


    for (let i = 1; i <= totalPages; i++) {
        TotalPage.push(i)
    }


    return (
        <Pagination className="justify-end mt-17">
            <Pagination.Content>
                <Pagination.Item>
                    <Pagination.Previous isDisabled={page === 1}>
                        <Link href={`/courses?page=${page - 1}&limit=${limit}`} className="flex items-center gap-2">
                        <Pagination.PreviousIcon />
                        <span>Previous</span>
                        </Link>
                    </Pagination.Previous>
                </Pagination.Item>
                {
                    TotalPage.map((page) => {
                        return <Link href={`/courses?page=${page}&limit=${limit}`} key={page}>
                            <Pagination.Item >
                                <Pagination.Link className={`${page=== isBg && 'bg-gray-600 text-white'}`}>
                                    {page}
                                </Pagination.Link>
                            </Pagination.Item>
                        </Link>
                    })
                }
                <Pagination.Item>

                    
                        <Pagination.Next isDisabled={page === totalPages} >
                            <Link href={`/courses?page=${page + 1}&limit=${limit}`} className="flex items-center gap-2">
                            <span>Next</span>
                            <Pagination.NextIcon />
                            </Link>
                        </Pagination.Next>
                    
                </Pagination.Item>
            </Pagination.Content>
        </Pagination>
    )
}

export default PaginationPage 
